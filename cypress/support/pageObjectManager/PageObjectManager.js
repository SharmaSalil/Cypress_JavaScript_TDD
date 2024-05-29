import Login from '../page-obj-lib/Login'
import GenericFunctions from '../genericFunctions/GenericFunctions'
import URL from '../urlHandler/Url'
import ReadData from '../fixtureReader/ReadData'
import Registration from '../page-obj-lib/Registration'
import FixturePath from '../fixtureReader/FixturePath'

export default class PageObjectManager {

    constructor() {
        this.login = new Login();
        this.genericFunctions = new GenericFunctions()
        this.url = new URL()
        this.readData = new ReadData()
        this.registration = new Registration();
        this.fixturePath = new FixturePath()
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
}