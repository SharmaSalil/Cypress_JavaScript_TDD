import Config from "../utils/config";

export default class Url {

    getBaseUrl = () => {
        if (Config.environment == 'QA') return 'https://www.rahulshettyacademy.com'
    }

    getLoginUrl = () => {
        if (Config.environment == 'QA') return this.getBaseUrl() + '/client/'
    }

    getHomePageUrl = () => {
        if (Config.environment == 'QA') return this.getBaseUrl() + '/client/dashboard/dash'
    }

}
