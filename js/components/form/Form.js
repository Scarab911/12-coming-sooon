class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;


        this.init()
    }
    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        //uzregistruojae mygtuko paspaudimo ivyki

        this.DOM = document.querySelector(this.selector)
        if (!this.DOM) {
            console.error('ERROR: Element not found!');
            return false
        }
        this.allInputsDOM = this.DOM.querySelectorAll('input, textarea')
        this.submitButtonDOM = this.DOM.querySelector('button')


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
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 || //reiskia @ stringe nerasta(-1)
            email[0] === '@' ||         // pirma string reiksme yra@
            email.slice(-4).indexOf('@') > -1 || //paima 4 paskutinius email simbolius ir iesko @
            this.countSimbols(email, '@') > 1) { //tikrina kiek stringe yra atitinkamu simboliu!
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
    isValidName(firstName) {
        if (firstName === undefined ||
            typeof firstName !== 'string' ||
            firstName.length < 2 ||
            !this.isUpperCase(firstName[0])) {
            return false;
        }
        return true;
    }
    isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }
    isValidMessage(msg) {
        if (typeof msg !== 'string' ||
            msg === '') {
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

                if (validationRule === 'email') {
                    if (this.isValidEmail(element.value) === false) {
                        allGood = false;
                        break;
                    }
                }
                if (validationRule === 'name') {
                    if (this.isValidName(element.value) === false) {
                        allGood = false;
                        break;
                    }
                }
                if (validationRule === 'text') {
                    if (this.isValidMessage(element.value) === false) {
                        allGood = false;
                        break;
                    }
                }
            }
            console.log('All Good?', allGood)


        });


        //issitraukti is visu formos lauku informacija
        //eiti per visus formos laukus ir atapzinus informacijos tipa atlikti tos informacijos validacija

        //jei patikrinus visus laukus nerasta klaidu tai 'siunciam pranesima'
        //jei patikrinus visus laukus rasta klaidu tai 'siunciam pranesimus' (kolkas i konsole)
    }
}
export { Form }