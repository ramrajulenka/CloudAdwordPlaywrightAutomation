import { Page, Locator } from '@playwright/test';


export class RegistationPage{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

get registrationLink(): Locator { 
         return this.page.getByRole('link', { name: 'Register' });
    }
get registationPageTitle(): Locator {
         return this.page.getByText('Register', { exact: true });
    }

get nameTextBox(): Locator {
         return this.page.getByRole('textbox', { name: 'Customer Name' });
    }
get emailTextBox(): Locator {
         return this.page.getByRole('textbox', { name: 'Email' });
    }    

get countryCodeDropdown(): Locator {
    return this.page.getByLabel('Country Code');
}

get mobileNumberTextBox(): Locator {
    return this.page.getByRole('textbox', { name: 'Contact No' });
}

get termsAndConditionsCheckbox(): Locator {
    return this.page.getByText('By clicking register you');
}

get submitButton(): Locator {
    return this.page.getByRole('button', { name: 'SUBMIT' }); 
}
get emptyNameValidationMessage(): Locator {
    return this.page.getByText('×ErrorPlease enter name');
}
get emptyEmailValidationMessage(): Locator {
    return this.page.getByText('×ErrorPlease enter email');
}
get emptyContactNumberValidationMessage(): Locator {
    return this.page.getByText('×ErrorPlease enter contact no');    
}
get verifyValidationMessage(): Locator {
    return this.page.getByText('xErrorRegistration successful');
}
get verifyInvalidEmailValidationMessage(): Locator {
    return this.page.getByText('×ErrorPlease enter correct');
}
get verifyInvalidContactNumberValidationMessage(): Locator {
    return this.page.getByText('×ErrorPlease enter correct');
}

}