export default class FixturePath {

    get validLoginData() { return { path: "./cypress/fixtures/TestData/validLoginData.json" } }
    get registrationData() { return { path: "./cypress/fixtures/TestData/registrationData.json" } }
    get globalErrInvalidData() { return { path: "./cypress/fixtures/TestData/globalErrInvalidData.json" } }
    get inlineErrInvalidData() { return { path: "./cypress/fixtures/TestData/inlineErrInvalidData.json" } }
}