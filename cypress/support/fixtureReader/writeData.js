export default class WriteData {

    constructor() {
        if (WriteData.instance) {
            return WriteData.instance;
        }

        WriteData.instance = this;
    }

    writeData = (path, data) => {
        cy.writeFile(path, data)
    }

}

const writeDataInstance = new WriteData();
Object.freeze(writeDataInstance);