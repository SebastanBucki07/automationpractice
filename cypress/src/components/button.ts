export class Button {
    constructor(private selector: string) {
    }

    click(): this {
        cy.get(this.selector).click()
        return this
    }

    scrollIntoView(): this {
        cy.get(this.selector).scrollIntoView()
        return this
    }

    validateTextValue(text: string): this {
        cy.get(this.selector).should(button => {
            expect(button.get(0).innerText).to.eq(text)
        })
        return this
    }
}