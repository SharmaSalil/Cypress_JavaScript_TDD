export default class Url {

    getBaseUrl = () => {
        if (Cypress.env('ENV') === 'qa') return 'https://www.rahulshettyacademy.com'
    }

    getLoginUrl = () => {
        if (Cypress.env('ENV') === 'qa') return this.getBaseUrl() + '/client/'
    }

    getHomePageUrl = () => {
        if (Cypress.env('ENV') === 'qa') return this.getBaseUrl() + '/client/dashboard/dash'
    }

}
