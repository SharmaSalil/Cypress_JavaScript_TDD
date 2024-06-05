export default class ReadData{

    readDataUsingFixture = (path) => {
        path = String(path).replace("./cypress/fixtures", ".")
        return cy.fixture(path)
    }

    readDataUsingReadFile = (path) => {
        return cy.readFile(path)
    }

}