export default class WriteData {

    writeData = (path, data) => {
        cy.writeFile(path, data)
    }

}