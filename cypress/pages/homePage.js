class HomePage {
    elements = {
        link_Gmail: () => cy.get("a").contains("Gmail")
    };

    async enterValueToSearch() {
        await this.elements.link_Gmail().click()
    }
}

export default new HomePage();