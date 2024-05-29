/// <reference types="cypress" />

import PageObjectManager from '../../support/pageObjectManager/PageObjectManager'

describe("Login test cases for valid data", () => {

    before(() => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getRegistration().createDataForRegistration();
    })

    beforeEach(() => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getGenericFunctions().loadPage(pageObjectManager.getUrl().getLoginUrl());
    });

    it("To check if users can register successfully with correct information", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getLogin().register_BTN_click();
        pageObjectManager.getRegistration().fillDataForRegistration()
        pageObjectManager.getRegistration()
            .login_BTN_getElement().should("be.visible")
    })

    it.only("To verify that when a user clicks the 'Register' button without filling in the required fields, an error message should appear.", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getLogin().register_BTN_click();
        pageObjectManager.getRegistration().register_BTN_click()
        pageObjectManager.getRegistration().errorMessage_TXT_getText()
            .should("contain", "First Name is required")
            .and("contain", "Email is required")
            .and("contain", "Phone Number is required")
            .and("contain", "Password is required")
            .and("contain", "Confirm Password is required")
    })

})