class Socials {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();

    }
    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            return false
        }

        this.DOM = document.querySelector(this.selector);

        if (!this.DOM) {
            console.error('ERROR: Selector not found!');
            return false
        }
        this.render();
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: Selector has to be non empty string')
            return false
        } return true
    }
    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            console.error('ERROR: Data has to be non emty Array')
            return false
        } return true
    }
    render() {
        let HTML = '';
        for (const social of this.data) {

            HTML += `<a href="${social.href}"
                    target="_blank"
                    class="fa fa-${social.icon}"></a>`;
        }
        this.DOM.innerHTML = HTML;
    }
}
export { Socials };