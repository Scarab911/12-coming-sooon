class ProgressBar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }
    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            // console.error('ERROR: nepraejo pirmines patikros');
            return false
        }

        this.DOM = document.querySelector(this.selector);

        if (!this.DOM) {
            console.error('ERROR: Selector not found');
            return false
        }

        this.render();
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: netinkamas selectorius');
            return false
        } return true
    }
    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            console.error('ERROR: blogi duomenys arba duomenu nera');
            return false
        } return true
    }
    render() {
        let HTML = '';
        for (const bar of this.data) {
            HTML += `<div class="progress-bar">
                        <div class="progess-text">
                            <p>${bar.title}</p>
                            <p>${bar.value}%</p>
                        </div>
                        <div class="line">
                            <div class="linebar" style="width: ${bar.value}%;">
                                <div class="animatedbar"></div>
                            </div>
                        </div>
                    </div>`
        }
        this.DOM.innerHTML += HTML;
    }
}
export { ProgressBar };