export default class WriteData {

    writeDatatToFile = (path, data) => {
        cy.writeFile(path, data)
    }

}