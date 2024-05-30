// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("softAssert", (callback) => {
    cy.wrap(null, { log: false }).then(() => {
        const errors = [];
        const originalAssert = chai.Assertion.prototype.assert;

        chai.Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
            try {
                originalAssert.apply(this, arguments);
            } catch (err) {
                errors.push(err);
            }
        };

        callback();

        chai.Assertion.prototype.assert = originalAssert;

        if (errors.length) {
            const error = new Error(`Soft assertion failed with ${errors.length} error(s).`);
            error.name = 'SoftAssertionError';
            error.stack = errors.map(err => err.stack).join('\n');
            throw error;
        }
    });
});
