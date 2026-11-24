import { profile } from 'node:console'
import{test} from '../../fixtures/test-fixtures'

test("Update The Profile",async({profile,util,loginPage})=>{
await loginPage.launchWeb();
await loginPage.loginWeb();
await profile.landOnProfilePage();
let username=await util.data.randomTextWithRange(10);
console.log(username);
await util.action.enterText(profile.clientName,username);
await util.action.enterText(profile.mobileNumber,util.data.randomMobileNumber());
await util.action.enterText(profile.address,util.data.randomTextWithRange(10));
await util.action.clickElement(profile.getUpdateButton(0));
await util.assert. toHaveText(profile.userDetailsUpdatedToast,'User details updated successfully')
await util.assert. toHaveValue(profile.clientName,username);



})