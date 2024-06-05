export default class FixturePath {

    get registrationData() { return { path: "./cypress/fixtures/TestData/registeration/registrationData.json" } }

    get validLoginData() { return { path: "./cypress/fixtures/TestData/login/validLoginData.json" } }
    get globalErrInvalidData() { return { path: "./cypress/fixtures/TestData/login/globalErrInvalidData.json" } }
    get inlineErrInvalidData() { return { path: "./cypress/fixtures/TestData/login/inlineErrInvalidData.json" } }
}