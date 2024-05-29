export default class ReadData{

    readValidDataForLoginUsingFixture = (value) => {
        return cy.fixture(value)
    }

    readValidDataForLoginUsingReadFile = (value) => {
        return cy.readFile(value)
    }

}