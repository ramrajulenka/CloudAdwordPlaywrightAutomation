import { profile } from 'node:console'
import{test} from '../fixtures/test-fixtures'

test("Update The Profile",async({profile,util,loginPage})=>{
await loginPage.launchWeb();
await loginPage.loginWeb();
await profile.landOnProfilePage();
await util.action.enterText(profile.clientName,util.data.randomTextWithRange(8));
await util.action.enterText(profile.mobileNumber,util.data.randomMobileNumber());
await util.action.enterText(profile.address,util.data.randomTextWithRange(10));
await util.action.clickElement(profile.updateButton);
await util.assert.verifyElementText(profile.userDetailsUpdatedToast,'User details updated successfully')





})