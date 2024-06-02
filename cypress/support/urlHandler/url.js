export default class Url {

    envirounment = 'QA'

    getBaseUrl = () => {
        if (this.envirounment == 'QA') {
            return 'https://www.rahulshettyacademy.com'
        }
    }

    getLoginUrl = () => {
        if (this.envirounment == 'QA') {
            return this.getBaseUrl() + '/client/'
        }
    }

    getHomePageUrl = () => {
        if (this.envirounment == 'QA') {
            return this.getBaseUrl() + '/client/dashboard/dash'
        }
    }

}