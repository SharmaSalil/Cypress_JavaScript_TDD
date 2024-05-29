/// <reference types="cypress" />

import PageObjectManager from '../../support/pageObjectManager/PageObjectManager'

describe("Login test cases for valid data", () => {

    beforeEach(() => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getGenericFunctions().loadPage(pageObjectManager.getUrl().getLoginUrl());
        pageObjectManager.getReadData().readValidDataForLoginUsingReadFile(pageObjectManager.getFixturePath().validLoginData.path).then(data => {
            pageObjectManager.getLogin().login(data.email, data.password)
        })
    });

    it("To verify that the user can log in successfully using valid data.", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getGenericFunctions().return_url()
            .should('eq', pageObjectManager.getUrl().getHomePageUrl());
    })

})