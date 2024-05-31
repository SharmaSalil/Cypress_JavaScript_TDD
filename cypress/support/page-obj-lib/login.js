import GenericFuntions from '../genericFunctions/GenericFunctions'
import FixturePath from '../fixtureReader/FixturePath'
import ReadData from '../fixtureReader/ReadData'
import WriteData from '../fixtureReader/WriteData'
import Url from '../urlHandler/Url'


export default class Login {

    get email_TXTFLD() { return { locator: "#userEmail" } }
    get password_TXTFLD() { return { locator: "#userPassword" } }
    get login_BTN() { return { locator: "#login" } }
    get register_BTN() { return { locator: "section .btn1" } }
    get globalError_TXT() { return { locator: "#toast-container .toast-error" } }
    get invalidFeedback_TXT() { return { locator: "div .invalid-feedback" } }

    goToLoginPage() {
        const genericFuntions = new GenericFuntions();
        const getUrl = new Url();
        genericFuntions.loadPage(getUrl.getLoginUrl());
    }

    email_TXTFLD_clear = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_clear(this.email_TXTFLD.locator)
    }

    email_TXTFLD_type = (value) => {
        const genericFuntions = new GenericFuntions();
        this.email_TXTFLD_clear()
        genericFuntions.get_type(this.email_TXTFLD.locator, value)
    }

    password_TXTFLD_clear = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_clear(this.password_TXTFLD.locator)
    }

    password_TXTFLD_type = (value) => {
        const genericFuntions = new GenericFuntions();
        this.password_TXTFLD_clear()
        genericFuntions.get_type(this.password_TXTFLD.locator, value)
    }

    login_BTN_click = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_click(this.login_BTN.locator)
    }

    login = (email, password) => {
        this.email_TXTFLD_type(email)
        this.password_TXTFLD_type(password)
        this.login_BTN_click()
    }

    register_BTN_click = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_click(this.register_BTN.locator)
    }

    getLoginData = () => {
        const writeData = new WriteData()
        const readData = new ReadData()
        const fixturePath = new FixturePath()
        readData.readDataUsingReadFile(fixturePath.registrationData.path).then(data => {
            writeData.writeData(fixturePath.validLoginData.path, { email: data.email, password: data.password })
        })
    }

    globalError_TXT_get_shouldWithVisibleAndExist() {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_shouldWithVisibleAndExist(this.globalError_TXT.locator)
    }

    globalError_TXT_get_invoke() {
        const genericFuntions = new GenericFuntions();
        this.globalError_TXT_get_shouldWithVisibleAndExist()
        return genericFuntions.get_invoke(this.globalError_TXT.locator, "text")
    }

    // invalidFeedback_TXT_get_shouldWithVisibleAndExist() {
    //     const genericFuntions = new GenericFuntions();
    //     genericFuntions.get_shouldWithVisibleAndExist(this.invalidFeedback_TXT.locator)
    // }

    invalidFeedback_TXT_get_invoke() {
        const genericFuntions = new GenericFuntions();
        // this.invalidFeedback_TXT_get_shouldWithVisibleAndExist()
        // return genericFuntions.get_invoke(this.invalidFeedback_TXT.locator, "text")
        return cy.get(this.invalidFeedback_TXT.locator).invoke("text")
    }

}



