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

    it("To verify that the Registeration is able to login with valid data", () => {
        const pageObjectManager = new PageObjectManager();
        pageObjectManager.getLogin().register_BTN_click();
        pageObjectManager.getRegistration().fillDataForRegistration()
        pageObjectManager.getRegistration().login_BTN_click()
        pageObjectManager.getLogin().getLoginDataFromRegistration()
    })

})