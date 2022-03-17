import {topMenuViewSelectors} from "../../selectors/common/top-menu-view.selectors";
import {Button} from "../../components/button";
import {TextElement} from "../../components/textElement";

export class TopMenuView {
    components = {
        signIn: new Button(topMenuViewSelectors.signIn),
        contactUs: new Button(topMenuViewSelectors.contactUs),
        shopPhone: new TextElement(topMenuViewSelectors.shopPhone)
    }

    assertSignIn(expected:string): this{
        this.components.signIn.scrollIntoView().validateTextValue(expected)
        return this;
    }

    assertContactUs(expected:string): this{
        this.components.contactUs.scrollIntoView().validateTextValue(expected)
        return this;
    }

    assertShopPhone(expected:string): this{
        this.components.shopPhone.scrollIntoView().validateTextElement(expected)
        return this;
    }
}