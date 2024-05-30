export default class ReadData{

    readDataUsingFixture = (value) => {
        return cy.fixture(value)
    }

    readDataUsingReadFile = (value) => {
        return cy.readFile(value)
    }

}