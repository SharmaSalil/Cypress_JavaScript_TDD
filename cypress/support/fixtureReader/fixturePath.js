export default class FixturePath {

    constructor() {
        if (FixturePath.instance) {
            return FixturePath.instance;
        }

        FixturePath.instance = this;
    }

    get registrationData() { return { path: "./cypress/fixtures/TestData/registeration/registrationData.json" } }

    get validLoginData() { return { path: "./cypress/fixtures/TestData/login/validLoginData.json" } }
    get globalErrInvalidData() { return { path: "./cypress/fixtures/TestData/login/globalErrInvalidData.json" } }
    get inlineErrInvalidData() { return { path: "./cypress/fixtures/TestData/login/inlineErrInvalidData.json" } }
}


const fixturePathInstance = new FixturePath();
Object.freeze(fixturePathInstance);