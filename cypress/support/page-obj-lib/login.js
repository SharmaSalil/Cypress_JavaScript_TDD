import GenericFunctions from '../genericFunctions/GenericFunctions'
import FixturePath from '../fixtureReader/FixturePath'
import ReadData from '../fixtureReader/ReadData'
import WriteData from '../fixtureReader/WriteData';
import Url from '../urlHandler/Url'

export default class Login {

    constructor() {

        if (Login.instance) return Login.instance;

        this.genericFunctions = new GenericFunctions();
        this.getUrl = new Url();
        this.readData = new ReadData();
        this.writeData = new WriteData();
        this.fixturePath = new FixturePath();

        Login.instance = this;
    }

    get email_TXTFLD() { return { locator: "#userEmail" } }
    get password_TXTFLD() { return { locator: "#userPassword" } }
    get login_BTN() { return { locator: "#login" } }
    get register_BTN() { return { locator: "section .btn1" } }
    get globalError_TXT() { return { locator: "#toast-container .toast-error" } }
    get invalidFeedback_TXT() { return { locator: "div .invalid-feedback" } }

    goToLoginPage = () => {
        this.genericFunctions.loadPage(this.getUrl.getLoginUrl());
    }

    email_TXTFLD_clear = () => {
        this.genericFunctions.get_clear(this.email_TXTFLD.locator)
    }

    email_TXTFLD_type = (value) => {
        this.email_TXTFLD_clear()
        this.genericFunctions.get_type(this.email_TXTFLD.locator, value)
    }

    password_TXTFLD_clear = () => {
        this.genericFunctions.get_clear(this.password_TXTFLD.locator)
    }

    password_TXTFLD_type = (value) => {
        this.password_TXTFLD_clear()
        this.genericFunctions.get_type(this.password_TXTFLD.locator, value)
    }

    login_BTN_click = () => {
        this.genericFunctions.get_click(this.login_BTN.locator)
    }

    login = (email, password) => {
        this.email_TXTFLD_type(email)
        this.password_TXTFLD_type(password)
        this.login_BTN_click()
    }

    register_BTN_click = () => {
        this.genericFunctions.get_shouldWithVisibleAndExist(this.register_BTN.locator)
        this.genericFunctions.get_click(this.register_BTN.locator)
    }

    getLoginData = () => {
        this.readData.readDataUsingReadFile(this.fixturePath.registrationData.path).then(data => {
            this.writeData.writeData(this.fixturePath.validLoginData.path, { email: data.email, password: data.password })
        })
    }

    globalError_TXT_get_shouldWithVisibleAndExist = () => {
        this.genericFunctions.get_shouldWithVisibleAndExist(this.globalError_TXT.locator)
    }

    globalError_TXT_get_invoke = () => {
        this.globalError_TXT_get_shouldWithVisibleAndExist()
        return this.genericFunctions.get_invoke(this.globalError_TXT.locator, "text")
    }

    invalidFeedback_TXT_get_shouldWithVisibleAndExist = () => {
        this.genericFunctions.get_shouldWithVisibleAndExist(this.invalidFeedback_TXT.locator)
    }

    invalidFeedback_TXT_get_invoke = () => {
        this.invalidFeedback_TXT_get_shouldWithVisibleAndExist()
        return this.genericFunctions.get_invoke(this.invalidFeedback_TXT.locator, "text")
    }

}

const loginInstance = new Login();
Object.freeze(loginInstance);




