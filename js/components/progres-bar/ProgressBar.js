class ProgressBar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.allProgressBar = null;
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
        this.addEvents();
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
        this.allProgressBar = this.DOM.querySelectorAll('.progress-bar')
        console.log(this.allProgressBar);
    }
    addEvents() {

        const screenBottom = window.scrollY + window.innerHeight;



        window.addEventListener('scroll', () => {
            for (let i = 0; i < this.allProgressBar.length; i++) {

                const element = this.allProgressBar[i];
                console.log(element);
                const elementBottom = element.offsetHeight + element.offsetTop;

                if (screenBottom >= elementBottom) {
                    element.classList.add('loading');

                }
            }

            // for (const element in this.allProgressBar) {
            //     console.log(element);
            //     const elementBottom = element.offsetHeight + element.offsetTop;
            //     if (screenBottom >= elementBottom) {
            //         element.classList.add('loading');
            //         console.log('rodoma');
            //     }
            // }
        });
    };
}
export { ProgressBar };