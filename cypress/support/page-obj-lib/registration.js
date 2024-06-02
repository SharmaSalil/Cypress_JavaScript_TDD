import Utility from '../Utils/Utility'
import FixturePath from '../fixtureReader/FixturePath'
import WriteData from '../fixtureReader/WriteData'
import ReadData from '../fixtureReader/ReadData'
import GenericFunctions from '../genericFunctions/GenericFunctions'
import Login from '../page-obj-lib/Login'

export default class Registration {

    constructor() {
        
        if (Registration.instance) {
            return Registration.instance;
        }

        this.utility = new Utility();
        this.fixturePath = new FixturePath();
        this.writeData = new WriteData();
        this.readData = new ReadData();
        this.genericFunctions = new GenericFunctions();
        this.login = new Login()

        Registration.instance = this;
    }

    get firstName_TXTFLD() { return { locator: "#firstName" } }
    get lastName_TXTFLD() { return { locator: "#lastName" } }
    get email_TXTFLD() { return { locator: "#userEmail" } }
    get mobileNumber_TXTFLD() { return { locator: "#userMobile" } }
    get occupation_DRPDWN() { return { locator: "select[formcontrolname='occupation']", values: ["1: Doctor", "2: Student", "3: Engineer", "4: Scientist"] } }
    get gender_RDOBTN() { return { locator: "input[type='radio']", attribute: "value", values: ["Male", "Female"] } }
    get password_TXTFLD() { return { locator: "#userPassword" } }
    get confirmPassword_TXTFLD() { return { locator: "#confirmPassword" } }
    get age_CHKBX() { return { locator: "input[type='checkbox']" } }
    get register_BTN() { return { locator: "#login" } }
    get login_BTN() { return { loator: ".btn.btn-primary" } }
    get errorMessage_TXT() { return { locator: ".invalid-feedback div" } }
    get ageValidationMessage_CHKBX() { return { locator: ".row > [style*='margin-top:'] > div" } }


    createDataForRegistration = () => {
        let firstName = this.utility.generateRandomWord(1).toString().toUpperCase() + this.utility.generateRandomWord(5).toString()
        let lastName = this.utility.generateRandomWord(1).toString().toUpperCase() + this.utility.generateRandomWord(5).toString()
        let email = (this.utility.generateRandomWord(3).toString() + this.utility.createTimestamp().toString() + "@yopmail.com")
        let phoneNumber = this.utility.generateNumber(10).toString()
        let occupation = this.occupation_DRPDWN.values[this.utility.getRandomNumber((this.occupation_DRPDWN.values.length) - 1)].toString()
        let gender = this.gender_RDOBTN.values[this.utility.getRandomNumber((this.gender_RDOBTN.values.length) - 1)].toString()
        let password = this.utility.generateNumber(8).toString() + this.utility.generateRandomWord(1).toString().toUpperCase() + this.utility.generateRandomWord(1).toString() + "!"
        let confirmPassword = password
        this.writeData.writeData(this.fixturePath.registrationData.path, { firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, occupation: occupation, gender: gender, password: password, confirmPassword: confirmPassword })
    }

    fillDataForRegistration = () => {
        this.readData.readDataUsingReadFile(this.fixturePath.registrationData.path).then(data => {
            this.firstName_TXTFLD_type(data.firstName)
            this.lastName_TXTFLD_type(data.lastName)
            this.email_TXTFLD_type(data.email)
            this.mobileNumber_TXTFLD_type(data.phoneNumber)
            this.occupation_DRPDWN_clickWithValue(data.occupation)
            this.gender_RDOBTN_matchAndClick(data.gender)
            this.password_TXTFLD_type(data.password)
            this.confirmPassword_TXTFLD_type(data.confirmPassword)
            this.age_CHKBX_click()
            this.register_BTN_click()
        })
    }

    firstName_TXTFLD_clear() {
        this.genericFunctions.get_clear(this.firstName_TXTFLD.locator)
    }

    firstName_TXTFLD_type(value) {
        this.firstName_TXTFLD_clear()
        this.genericFunctions.get_type(this.firstName_TXTFLD.locator, value)
    }

    lastName_TXTFLD_clear() {
        this.genericFunctions.get_clear(this.lastName_TXTFLD.locator)
    }

    lastName_TXTFLD_type(value) {
        this.lastName_TXTFLD_clear()
        this.genericFunctions.get_type(this.lastName_TXTFLD.locator, value)
    }

    email_TXTFLD_clear() {
        this.genericFunctions.get_clear(this.email_TXTFLD.locator)
    }

    email_TXTFLD_type(value) {
        this.email_TXTFLD_clear()
        this.genericFunctions.get_type(this.email_TXTFLD.locator, value)
    }

    mobileNumber_TXTFLD_clear() {
        this.genericFunctions.get_clear(this.mobileNumber_TXTFLD.locator)
    }

    mobileNumber_TXTFLD_type(value) {
        this.mobileNumber_TXTFLD_clear()
        this.genericFunctions.get_type(this.mobileNumber_TXTFLD.locator, value)
    }

    password_TXTFLD_clear() {
        this.genericFunctions.get_clear(this.password_TXTFLD.locator)
    }

    password_TXTFLD_type(value) {
        this.password_TXTFLD_clear()
        this.genericFunctions.get_type(this.password_TXTFLD.locator, value)
    }

    confirmPassword_TXTFLD_clear() {
        this.genericFunctions.get_clear(this.confirmPassword_TXTFLD.locator)
    }

    confirmPassword_TXTFLD_type(value) {
        this.confirmPassword_TXTFLD_clear()
        this.genericFunctions.get_type(this.confirmPassword_TXTFLD.locator, value)
    }

    age_CHKBX_click() {
        this.genericFunctions.get_click(this.age_CHKBX.locator)
    }

    register_BTN_click() {
        this.genericFunctions.get_click(this.register_BTN.locator)
    }

    occupation_DRPDWN_clickWithValue(value) {
        this.genericFunctions.get_select(this.occupation_DRPDWN.locator, value)
    }

    gender_RDOBTN_matchAndClick(value) {
        this.genericFunctions.get_attributeMatch_click(this.gender_RDOBTN.locator, this.gender_RDOBTN.attribute, value)
    }

    login_BTN_click() {
        this.genericFunctions.get_click(this.login_BTN.loator)
    }

    login_BTN_getElement() {
        return this.genericFunctions.get(this.login_BTN.loator)
    }

    errorMessage_TXT_getText() {
        return this.genericFunctions.get_invoke(this.errorMessage_TXT.locator, "text")
    }

    errorMessage_TXT_get_shouldWithVisibleAndExist() {
        this.genericFunctions.get_shouldWithVisibleAndExist(this.errorMessage_TXT.locator)
    }

    ageValidationMessage_CHKBX_get_invoke() {
        return this.genericFunctions.get_invoke(this.ageValidationMessage_CHKBX.locator, "text")
    }

    goToRegisterationPage() {
        this.login.goToLoginPage()
        this.login.register_BTN_click()
    }
}

const registrationInstance = new Registration();
Object.freeze(registrationInstance);