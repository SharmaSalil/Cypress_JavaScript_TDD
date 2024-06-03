import Login from '../page-obj-lib/Login'
import GenericFunctions from '../genericFunctions/GenericFunctions'
import Url from '../urlHandler/Url'
import ReadData from '../fixtureReader/ReadData'
import Registration from '../page-obj-lib/Registration'
import FixturePath from '../fixtureReader/FixturePath'
import RegistrationErrorMessages from '../enum/registration/registration';
import Chai from '../enum/chai/chai';

export default class PageObjectManager {

    constructor() {
        if (PageObjectManager.instance) return PageObjectManager.instance;

        this.login = new Login();
        this.genericFunctions = new GenericFunctions()
        this.url = new Url()
        this.readData = new ReadData()
        this.registration = new Registration();
        this.fixturePath = new FixturePath()
        this.registrationErrorMessages = RegistrationErrorMessages
        this.chai = Chai

        PageObjectManager.instance = this;
    }

    getLogin = () => this.login;

    getGenericFunctions = () => this.genericFunctions;

    getUrl = () => this.url;

    getReadData = () => this.readData;

    getRegistration = () => this.registration;

    getFixturePath = () => this.fixturePath;

    getRegistrationErrorMessages = () => this.registrationErrorMessages;

    getChai = () => this.chai;
}

const pageObjectManagerInstance = new PageObjectManager();
Object.freeze(pageObjectManagerInstance);