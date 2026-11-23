import{test} from "../../fixtures/test-fixtures"
import { testData } from "../../test-data/registation-data";

test("Verify The Registration With Empty Email",async({loginPage,register,util})=>{
 await loginPage.launchWeb();
await util.action.clickElement(register.registrationLink);
await util.action.enterText(register.customerNameInput,util.data.randomTextWithRange(8));
await util.action.clickElement(register.submitButton);
await util.assert.toHaveText(register.toastNotification,testData.validationMessages.emptyEmail);
});