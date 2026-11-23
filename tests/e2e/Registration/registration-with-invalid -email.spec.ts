import{test} from "../../fixtures/test-fixtures"
import { testData } from "../../test-data/registation-data";

test("Verify The Registration With Invalid Email",async({loginPage,register,util})=>{
await loginPage.launchWeb();
await util.action.clickElement(register.registrationLink);
await util.action.enterText(register.customerNameInput,util.data.randomTextWithRange(8));
await util.action.enterText(register.emailAddressInput,util.data.randomInvalidEmail());
await util.action.clickElement(register.submitButton);
await util.assert.toHaveText(register.toastNotification,testData.validationMessages.invalidEmail);

// await util.action.isVisible(register.toastCloseButton(0));
// await util.action.clickElement(register.toastCloseButton(0));
// await util.action.press(register.emailAddressInput,'Control+A');
// await util.action.press(register.emailAddressInput,'Backspace');
// await util.action.clickElement(register.submitButton);
// await util.assert.toHaveText(register.toastNotification,testData.validationMessages.invalidEmail);




})