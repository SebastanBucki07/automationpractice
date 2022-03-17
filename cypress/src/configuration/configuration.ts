export class Configuration{
    public mainUrl: string;

    constructor() {
        this.mainUrl = "http://automationpractice.com/index.php"
        return this;
    }

    public returnMainUrl():string{
        return this.mainUrl
    }
}