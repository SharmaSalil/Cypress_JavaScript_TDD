export default class Url {

    getBaseUrl = () => {
        if (Cypress.env('env') == 'QA') return 'https://www.rahulshettyacademy.com'
    }

    getLoginUrl = () => {
        if (Cypress.env('env') == 'QA') return this.getBaseUrl() + '/client/'
    }

    getHomePageUrl = () => {
        if (Cypress.env('env') == 'QA') return this.getBaseUrl() + '/client/dashboard/dash'   
    }

}