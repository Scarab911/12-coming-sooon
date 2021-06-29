class Form {
    constructor(selector, toastObject) {
        this.selector = selector;
        this.toastObject = toastObject;
        this.DOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;

        this.validations = {
            email: this.isValidEmail,
            name: this.isValidName,
            text: this.isValidText,
        };
        this.init()
    }
    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM = document.querySelector(this.selector)
        if (!this.DOM) {
            console.error('ERROR: Element not found!');
            return false
        }
        this.allInputsDOM = this.DOM.querySelectorAll('input, textarea')
        this.submitButtonDOM = this.DOM.querySelector('button[type="submit"]')

        this.addEvents()
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: Selector must be a non empty string');
            return false;
        }

        return true
    }
    isValidEmail(email) {
        const maxEmailLength = 100;
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 || //reiskia @ stringe nerasta(-1)
            email[0] === '@' ||         // pirma string reiksme yra@
            email.slice(-4).indexOf('@') > -1 || //paima 4 paskutinius email simbolius ir iesko @
            this.countSimbols(email, '@') > 1 ||
            email.length > maxEmailLength) { //tikrina kiek stringe yra atitinkamu simboliu!
            return false;
        }
        return true;
    }
    countSimbols(text, letter) {
        let count = 0;

        for (const t of text) {
            if (t === letter) {
                count++;
            }
        }

        return count;
    }
    isValidName(name) {
        const maxNameLength = 50;
        if (name === undefined ||
            typeof name !== 'string' ||
            name.length < 2 ||
            !this.isUpperCase(name[0]) ||
            name.length > maxNameLength) {
            return false;
        }
        return true;
    }
    isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }
    isValidText(text) {
        if (typeof text !== 'string' ||
            text === '') {
            return false;
        }
        return true;
    }
    addEvents() {
        this.submitButtonDOM.addEventListener('click', (e) => {
            e.preventDefault();
            let allGood = true;
            for (let element of this.allInputsDOM) {
                const validationRule = element.dataset.validation;
                const value = element.value;

                if (validationRule === 'email' && !this.isValidEmail(value)) {
                    allGood = false;
                    this.toastObject.error('ERROR: Bad email form');
                    break;
                }
                if (validationRule === 'name' && !this.isValidName(value)) {
                    allGood = false;
                    this.toastObject.error('ERROR: Bad Name form');
                    break;
                }
                if (validationRule === 'text' && !this.isValidText(value)) {
                    allGood = false;
                    this.toastObject.error('ERROR: message area has to be non empty');
                    break;
                }

            }
            if (allGood) {
                this.toastObject.success('Form sent successfully !')

            }
        });
    }
}
export { Form }