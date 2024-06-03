import Utility from '../Utils/Utility'

export default class GenericFunctions {

    constructor() {
        if (GenericFunctions.instance) return GenericFunctions.instance;

        this.utility = new Utility()

        GenericFunctions.instance = this;
    }

    get = (element) => {
        return cy.get(element)
    }

    get_checkTextInBody(value) {
        return cy.get("body").then($body => {
            if ($body.text().includes(value)) return true
            else return false;
        });
    }

    get_clear = (element) => {
        cy.get(element).clear()
    }

    get_type = (element, value) => {
        cy.get(element).type(value)
    }

    get_shouldWithVisibleAndExist = (element) => {
        cy.get(element).should("be.visible").and("exist")
    }

    get_click = (element) => {
        cy.get(element).click({ force: true })
    }

    get_select = (element, value) => {
        cy.get(element).select(value)
    }

    get_find_returnArrayOfOption = (element, subelement, text, value) => {
        return cy.get(element).find(subelement).then($elements => {
            if ($elements.length === 0) cy.wait(1000)
            const options = [...$elements].filter(item => item.text !== text)
            let randomIndex = this.utility.getRandomNumber(options.length - 1);
            let selectedOption = cy.wrap(options).eq(randomIndex).invoke("attr", value)

            return selectedOption
        });
    }

    get_returnArrayOfOption = (element, value) => {
        return cy.get(element).then($elements => {
            if ($elements.length === 0) cy.wait(1000)
            const options = [...$elements]
            let randomIndex = this.utility.getRandomNumber(options.length - 1);
            let selectedOption = cy.wrap(options).eq(randomIndex).invoke("attr", value)

            return selectedOption
        });
    }

    get_invoke = (element, value) => {
        return cy.get(element).invoke(value)
    }

    get_index_invoke = (element, value, index) => {
        return cy.get(element).eq(index).invoke(value)
    }

    get_attributeMatch_click = (element, attribute, value) => {
        cy.get(element).each(($element) => {
            const attributeValue = $element.attr(attribute);
            if (attributeValue == value) cy.wrap($element).click({ force: true });
        });
    }

    return_url = () => {
        return cy.url()
    }

    loadPage = (url) => {
        cy.visit(url)
    }

}

const genericFunctionsInstance = new GenericFunctions();
Object.freeze(genericFunctionsInstance);