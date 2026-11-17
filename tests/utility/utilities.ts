import { Page } from '@playwright/test';
import { Actions } from './actions';
import { Assertions } from './assertions';
import { Data } from './data';
 
export class Utilities {
 
    action: Actions;
    assert: Assertions;
    data: Data;
 
    constructor(page: Page) {
        this.action = new Actions(page);
        this.assert = new Assertions(page);
        this.data = new Data();
    }
}
 