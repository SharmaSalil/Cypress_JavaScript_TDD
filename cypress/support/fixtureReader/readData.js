export default class ReadData{

    constructor() {
        if (ReadData.instance) {
            return ReadData.instance;
        }

        ReadData.instance = this;
    }

    readDataUsingFixture = (path) => {
        path = String(path).replace("./cypress/fixtures", ".")
        return cy.fixture(path)
    }

    readDataUsingReadFile = (path) => {
        return cy.readFile(path)
    }

}


const readDataInstance = new ReadData();
Object.freeze(readDataInstance);