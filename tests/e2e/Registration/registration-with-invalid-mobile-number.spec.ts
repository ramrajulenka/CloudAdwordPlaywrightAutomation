import{test} from "../../fixtures/test-fixtures"
import { testData } from "../../test-data/registation-data";

test("Verify The Registration With Invalid Mobile Number",async({loginPage,register,util})=>{
await loginPage.launchWeb();
await util.action.clickElement(register.registrationLink);
await util.action.enterText(register.customerNameInput,util.data.randomTextWithRange(9));
await util.action.enterText(register.emailAddressInput,util.data.randomEmail());
await util.action.enterText(register.contactNumberInput,util.data.randomInvalidMobileNumber());
await util.action.clickElement(register.submitButton);
await util.assert.toHaveText(register.toastNotification,testData.validationMessages.invalidContactNumber);



})