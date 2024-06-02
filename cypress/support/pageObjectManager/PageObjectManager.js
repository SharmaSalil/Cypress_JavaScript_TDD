import Login from '../page-obj-lib/Login'
import GenericFunctions from '../genericFunctions/GenericFunctions'
import Url from '../urlHandler/Url'
import ReadData from '../fixtureReader/ReadData'
import Registration from '../page-obj-lib/Registration'
import FixturePath from '../fixtureReader/FixturePath'
import RegistrationErrorMessages from '../enum/registration/registration';

export default class PageObjectManager {

    constructor() {
        this.login = new Login();
        this.genericFunctions = new GenericFunctions()
        this.url = new Url()
        this.readData = new ReadData()
        this.registration = new Registration();
        this.fixturePath = new FixturePath()
        this.registrationErrorMessages = RegistrationErrorMessages
    }

    getLogin = () => {
        return this.login;
    }

    getGenericFunctions = () => {
        return this.genericFunctions;
    }

    getUrl = () => {
        return this.url;
    }

    getReadData = () => {
        return this.readData;
    }

    getRegistration = () => {
        return this.registration;
    }

    getFixturePath = () => {
        return this.fixturePath;
    }

    getRegistrationErrorMessages = () => {
        return this.registrationErrorMessages;
    }
}