export class TextElement {
    constructor(private selector: string) {
    }

    validateTextElement(text: string): this {
        cy.get(this.selector).should(textEl => {
            expect(textEl.get(0).innerText).to.eq(text)
        })
        return this
    }

    scrollIntoView(): this {
        cy.get(this.selector).scrollIntoView()
        return this
    }
}