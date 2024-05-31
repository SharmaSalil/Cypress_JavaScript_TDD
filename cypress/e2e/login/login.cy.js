/// <reference types="cypress" />
import PageObjectManager from '../../support/pageObjectManager/PageObjectManager'

context("Login Page Test Cases", () => {

    before(() => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getLogin().getLoginData()
    })

    beforeEach(() => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getLogin().goToLoginPage()
    });

    specify("To verify that the user can log in successfully using valid data.", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getReadData().readDataUsingReadFile(pageObjectManager.getFixturePath().validLoginData.path).then(data => {
            pageObjectManager.getLogin().login(data.email, data.password)
        })
        pageObjectManager.getGenericFunctions().return_url().should('eq', pageObjectManager.getUrl().getHomePageUrl());
    })

    specify("To verify the visibility of error message(at bottom) to user attempting to log-in with invalid credential - globalErrInvalidData", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getReadData().readDataUsingReadFile(pageObjectManager.getFixturePath().globalErrInvalidData.path).each(data => {
            pageObjectManager.getLogin().login(data.email, data.password)
            pageObjectManager.getLogin().globalError_TXT_get_invoke().should("contain", "Incorrect email or password")
        })
    })

})
