import {MainPage} from "../../src/pages/main.page";
import {TopMenuView} from "../../src/views/common/top-menu-view";
import {TopMenuModel} from "../../src/models/topMenu.model";

describe('test', () => {
    let mainPage: MainPage;
    let topMenuView: TopMenuView
    before('Generate data', () => {
        mainPage = new MainPage()
        topMenuView = new TopMenuView()
        mainPage.openMainPage();
    })

    it('cypress work', () => {
        console.log('cypress work')
    })

    it('validate top-menu', () => {
        cy.fixture('topMenu.json').then((literals: TopMenuModel) => {
            topMenuView.assertSignIn(literals.topMenuElements.signIn)
            topMenuView.assertContactUs(literals.topMenuElements.contactUs)
            topMenuView.assertShopPhone(literals.topMenuElements.shopPhoneNumber)
        })
    })
})
