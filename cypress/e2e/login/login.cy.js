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
        pageObjectManager.getGenericFunctions().return_url().should(pageObjectManager.getChai().EQ, pageObjectManager.getUrl().getHomePageUrl());
    })

    specify("To verify the visibility of error message(at bottom) to user attempting to log-in with invalid credential - globalErrInvalidData", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getReadData().readDataUsingReadFile(pageObjectManager.getFixturePath().globalErrInvalidData.path).each(data => {
            pageObjectManager.getLogin().login(data.email, data.password)
            pageObjectManager.getLogin().globalError_TXT_get_invoke().should(pageObjectManager.getChai().CONTAIN, pageObjectManager.getRegistrationErrorMessages().GLOBALERRMSSG)
        })
    })

    specify("To verify the visibility of error message(below Textfield) to user attempting to log-in with invalid credential - inlineErrInvalidData, Tag : sanity", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getReadData().readDataUsingReadFile(pageObjectManager.getFixturePath().inlineErrInvalidData.path).each(data => {
            pageObjectManager.getLogin().login(data.email, data.password)
            pageObjectManager.getLogin().invalidFeedback_TXT_get_invoke().then($el => {
                expect($el).to.satisfy((msg) => msg.includes(pageObjectManager.getRegistrationErrorMessages().EMAIL) || msg.includes(pageObjectManager.getRegistrationErrorMessages().EMAILFEEDBACK));
            });
        })
    })

})
