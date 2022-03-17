import {Configuration} from "../configuration/configuration";

export class MainPage {
    components = {
        url: new Configuration()
    }

    public openMainPage(): this {
        cy.visit(this.components.url.mainUrl)
        return this
    }

}