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

    it("To verify that when a user clicks the 'Register' button without filling in the required fields, an error message should appear.", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getLogin().register_BTN_click();
        pageObjectManager.getRegistration().register_BTN_click()
        pageObjectManager.getRegistration().errorMessage_TXT_get_shouldWithVisibleAndExist()
        pageObjectManager.getRegistration().errorMessage_TXT_getText().then(errorMessages => {
            pageObjectManager.getRegistration().ageValidationMessage_CHKBX_get_invoke().then(errorMessage => {

                cy.softAssert(() => {
                    expect(errorMessages).to.be.contain(pageObjectManager.getRegistrationErrorMessages().FIRSTNAME)
                    expect(errorMessages).to.be.contain(pageObjectManager.getRegistrationErrorMessages().EMAIL)
                    expect(errorMessages).to.be.contain(pageObjectManager.getRegistrationErrorMessages().PHONENUMBER)
                    expect(errorMessages).to.be.contain(pageObjectManager.getRegistrationErrorMessages().PASSWORD)
                    expect(errorMessages).to.be.contain(pageObjectManager.getRegistrationErrorMessages().CONFIRMPASSWORD)
                    expect(errorMessage).to.be.contain(pageObjectManager.getRegistrationErrorMessages().AGECHKBX)
                })
            })
        })
    })

})