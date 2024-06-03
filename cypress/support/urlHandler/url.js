export default class Url {

    constructor() {
        if (Url.instance) return Url.instance;

        this.environment = 'QA';

        Url.instance = this;
    }

    getBaseUrl = () => {
        if (this.environment == 'QA') return 'https://www.rahulshettyacademy.com'
    }

    getLoginUrl = () => {
        if (this.environment == 'QA') return this.getBaseUrl() + '/client/'
    }

    getHomePageUrl = () => {
        if (this.environment == 'QA') return this.getBaseUrl() + '/client/dashboard/dash'
    }

}

const urlInstance = new Url();
Object.freeze(urlInstance);