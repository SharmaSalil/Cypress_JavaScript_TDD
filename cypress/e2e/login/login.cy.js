/// <reference types="cypress" />
import PageObjectManager from '../../support/pageObjectManager/PageObjectManager'

describe("Test cases for Login Page", () => {

    describe("Login test cases for valid data", () => {

        before(() => {
            const pageObjectManager = new PageObjectManager();
            pageObjectManager.getLogin().getLoginData()
        })

        beforeEach(() => {
            const pageObjectManager = new PageObjectManager();
            pageObjectManager.getLogin().goToLoginPage()
            pageObjectManager.getReadData().readDataUsingReadFile(pageObjectManager.getFixturePath().validLoginData.path).then(data => {
                pageObjectManager.getLogin().login(data.email, data.password)
            })
        });

        it("To verify that the user can log in successfully using valid data.", () => {
            const pageObjectManager = new PageObjectManager();
            pageObjectManager.getGenericFunctions().return_url()
                .should('eq', pageObjectManager.getUrl().getHomePageUrl());
        })
    })

    describe("Login test cases for Invalid data", () => {

        beforeEach(() => {
            const pageObjectManager = new PageObjectManager();
            pageObjectManager.getLogin().goToLoginPage()
        })

        it("To verify the visibility of error message(at bottom) to user attempting to log-in with invalid credential - globalErrInvalidData", () => {
            const pageObjectManager = new PageObjectManager();
            pageObjectManager.getReadData().readDataUsingReadFile(pageObjectManager.getFixturePath().globalErrInvalidData.path).each(data => {
                pageObjectManager.getLogin().email_TXTFLD_type(data.email)
                pageObjectManager.getLogin().password_TXTFLD_type(data.password)
                pageObjectManager.getLogin().login_BTN_click()
                pageObjectManager.getLogin().globalError_TXT_get_invoke().should("contain", "Incorrect email or password")
            })
        })
    })

})
