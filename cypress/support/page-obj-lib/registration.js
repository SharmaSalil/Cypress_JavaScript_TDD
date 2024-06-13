import Utility from '../Utils/Utility'
import FixturePath from '../fixtureReader/FixturePath'
import WriteData from '../fixtureReader/WriteData'
import ReadData from '../fixtureReader/ReadData'
import GenericFunctions from '../genericFunctions/GenericFunctions'
import Login from '../page-obj-lib/Login'

export default class Registration {


    get firstName_TXTFLD() { return { locator: "#firstName" } }
    get lastName_TXTFLD() { return { locator: "#lastName" } }
    get email_TXTFLD() { return { locator: "#userEmail" } }
    get mobileNumber_TXTFLD() { return { locator: "#userMobile" } }
    get occupation_DRPDWN() { return { locator: "select[formcontrolname='occupation']", subElement: "option", attribute: "value" } }
    get gender_RDOBTN() { return { locator: "input[type='radio']", attribute: "value" } }
    get password_TXTFLD() { return { locator: "#userPassword" } }
    get confirmPassword_TXTFLD() { return { locator: "#confirmPassword" } }
    get age_CHKBX() { return { locator: "input[type='checkbox']" } }
    get register_BTN() { return { locator: "#login" } }
    get login_BTN() { return { loator: ".btn.btn-primary" } }
    get errorMessage_TXT() { return { locator: ".invalid-feedback div" } }
    get ageValidationMessage_CHKBX() { return { locator: ".row > [style*='margin-top:'] > div" } }

    createDataForRegistration = () => {
        const fixturePath = new FixturePath();
        const writeData = new WriteData();
        this.occupation_DRPDWN_selectValue().then(occupationValue => {
            this.gender_RDOBTN_selectValue().then(genderValue => {
                let firstName = this.createName(5)
                let lastName = this.createName(5)
                let email = this.createEmail(3)
                let phoneNumber = this.createMobileNumber(10)
                let occupation = occupationValue
                let gender = genderValue
                let password = this.createPassword()
                let confirmPassword = password
                writeData.writeData(fixturePath.registrationData.path, { firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, occupation: occupation, gender: gender, password: password, confirmPassword: confirmPassword })
            })
        })

    }

    fillDataForRegistration = () => {
        const fixturePath = new FixturePath();
        const readData = new ReadData()
        readData.readDataUsingReadFile(fixturePath.registrationData.path).then(data => {
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

    occupation_DRPDWN_selectValue() {
        const genericFunctions = new GenericFunctions();
        return genericFunctions.get_find_returnArrayOfOption(this.occupation_DRPDWN.locator, this.occupation_DRPDWN.subElement, "Choose your occupation", "value")
    }

    gender_RDOBTN_selectValue() {
        const genericFunctions = new GenericFunctions();
        return genericFunctions.get_returnArrayOfOption(this.gender_RDOBTN.locator, "value")
    }

    createName(length) {
        const utility = new Utility();
        let name = utility.generateRandomWord(1).toString().toUpperCase() + utility.generateRandomWord(length - 1).toString()
        return name
    }

    createEmail(length) {
        const utility = new Utility();
        let email = utility.generateRandomWord(length).toString() + utility.createTimestamp().toString() + "@yopmail.com"
        return email
    }

    createMobileNumber(length) {
        const utility = new Utility();
        return utility.generateNumber(length).toString()
    }

    createPassword() {
        const utility = new Utility();
        let password
        password = utility.generateNumber(8).toString()
        password += utility.generateRandomWord(1).toString().toUpperCase()
        password += utility.generateRandomWord(1).toString()
        password += utility.generateRandomSplCharacter(1)
        return password
    }

    firstName_TXTFLD_clear = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_clear(this.firstName_TXTFLD.locator)
    }

    firstName_TXTFLD_type = (value) => {
        const genericFunctions = new GenericFunctions();
        this.firstName_TXTFLD_clear()
        genericFunctions.get_type(this.firstName_TXTFLD.locator, value)
    }

    lastName_TXTFLD_clear = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_clear(this.lastName_TXTFLD.locator)
    }

    lastName_TXTFLD_type = (value) => {
        const genericFunctions = new GenericFunctions();
        this.lastName_TXTFLD_clear()
        genericFunctions.get_type(this.lastName_TXTFLD.locator, value)
    }

    email_TXTFLD_clear = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_clear(this.email_TXTFLD.locator)
    }

    email_TXTFLD_type = (value) => {
        const genericFunctions = new GenericFunctions();
        this.email_TXTFLD_clear()
        genericFunctions.get_type(this.email_TXTFLD.locator, value)
    }

    mobileNumber_TXTFLD_clear = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_clear(this.mobileNumber_TXTFLD.locator)
    }

    mobileNumber_TXTFLD_type = (value) => {
        const genericFunctions = new GenericFunctions();
        this.mobileNumber_TXTFLD_clear()
        genericFunctions.get_type(this.mobileNumber_TXTFLD.locator, value)
    }

    password_TXTFLD_clear = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_clear(this.password_TXTFLD.locator)
    }

    password_TXTFLD_type = (value) => {
        const genericFunctions = new GenericFunctions();
        this.password_TXTFLD_clear()
        genericFunctions.get_type(this.password_TXTFLD.locator, value)
    }

    confirmPassword_TXTFLD_clear = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_clear(this.confirmPassword_TXTFLD.locator)
    }

    confirmPassword_TXTFLD_type = (value) => {
        const genericFunctions = new GenericFunctions();
        this.confirmPassword_TXTFLD_clear()
        genericFunctions.get_type(this.confirmPassword_TXTFLD.locator, value)
    }

    age_CHKBX_click = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_click(this.age_CHKBX.locator)
    }

    register_BTN_click = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_click(this.register_BTN.locator)
    }

    occupation_DRPDWN_clickWithValue = (value) => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_select(this.occupation_DRPDWN.locator, value)
    }

    gender_RDOBTN_matchAndClick = (value) => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_attributeMatch_click(this.gender_RDOBTN.locator, this.gender_RDOBTN.attribute, value)
    }

    login_BTN_click = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_click(this.login_BTN.loator)
    }

    login_BTN_getElement = () => {
        const genericFunctions = new GenericFunctions();
        return genericFunctions.get(this.login_BTN.loator)
    }

    errorMessage_TXT_getText = () => {
        const genericFunctions = new GenericFunctions();
        return genericFunctions.get_invoke(this.errorMessage_TXT.locator, "text")
    }

    errorMessage_TXT_get_shouldWithVisibleAndExist = () => {
        const genericFunctions = new GenericFunctions();
        genericFunctions.get_shouldWithVisibleAndExist(this.errorMessage_TXT.locator)
    }

    ageValidationMessage_CHKBX_get_invoke = () => {
        const genericFunctions = new GenericFunctions();
        return genericFunctions.get_invoke(this.ageValidationMessage_CHKBX.locator, "text")
    }

    goToRegisterationPage = () => {
        const login = new Login()
        login.goToLoginPage()
        login.register_BTN_click()
    }
}

