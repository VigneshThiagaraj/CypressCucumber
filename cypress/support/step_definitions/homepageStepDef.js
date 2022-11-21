import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;

Given("I launch the application", () => {
    cy.visit("/");
})

When("I enter the value to search", () => {
    homePage.enterValueToSearch();
})