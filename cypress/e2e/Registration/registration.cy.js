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
        pageObjectManager.getRegistration().errorMessage_TXT_get_visibleAndExist()
        pageObjectManager.getRegistration().errorMessage_TXT_getText().then(errorMessages => {

            pageObjectManager.getRegistration().ageValidation_CHKBX_get_checkTextInBody().then(ageErrVisible => {
                cy.softAssert(() => {
                    expect(errorMessages).to.be.contain("First Name is required")
                    expect(errorMessages).to.be.contain("Email is required")
                    expect(errorMessages).to.be.contain("Phone Number is required")
                    expect(errorMessages).to.be.contain("Password is required")
                    expect(errorMessages).to.be.contain("Confirm Password is required")
                    expect(ageErrVisible).to.be.true
                })
            })
        })
    })

})