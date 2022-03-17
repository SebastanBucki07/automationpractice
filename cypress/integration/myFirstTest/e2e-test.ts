import {MainPage} from "../../src/pages/main.page";

describe('test', () => {
    let mainPage: MainPage
    before('Generate data', () => {
        mainPage = new MainPage()
    })
    beforeEach(() => {
        mainPage.openMainPage();
    })

    it('cypress work', () => {
        console.log('cypress work')
    })
})
