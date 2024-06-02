export default class GenericFuntions {

    get = (element) => {
        return cy.get(element)
    }

    get_checkTextInBody(value) {
        return cy.get("body").then($body => {
            if ($body.text().includes(value)) {
                return true;
            } else {
                return false;
            }
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

    get_invoke = (element, value) => {
        return cy.get(element).invoke(value)
    }

    get_attributeMatch_click = (element, attribute, value) => {
        cy.get(element).each(($radio) => {
            const attributeValue = $radio.attr(attribute);
            if (attributeValue == value) {
                cy.wrap($radio).click({ force: true });
            }
        });
    }

    return_url = () => {
        return cy.url()
    }

    loadPage = (url) => {
        cy.visit(url)
    }

}