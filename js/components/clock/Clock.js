class Clock {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
        this.updateClock();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector has to be non-empty string');
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: could not find an element by given selector');
            return false;
        }

        return true;
    }

    formatTime(timeValues) {
        const updatedTime = [];

        for (let i = 0; i < timeValues.length; i++) {
            const time = timeValues[i];
            if (i === 0 || time > 9) {
                // kada pushinam originalu skaiciu
                updatedTime.push(time);
            } else {
                // o kada pridedam nuli priekyje
                updatedTime.push('0' + time);
            }
        }

        return updatedTime;
    }

    calcDeadline() {
        const dabartinisLaikas = new Date();
        const einamiejiMetai = dabartinisLaikas.getFullYear();

        let numanomaGimtadienioData = einamiejiMetai + '-' + this.targetDate;
        let numanomasLaikas = new Date(numanomaGimtadienioData);

        const dabartinesMilisekundes = dabartinisLaikas.getTime();
        let numanomosMilisekundes = numanomasLaikas.getTime();

        if (dabartinesMilisekundes > numanomosMilisekundes) {
            numanomaGimtadienioData = (einamiejiMetai + 1) + '-' + this.targetDate;
            numanomasLaikas = new Date(numanomaGimtadienioData);
            numanomosMilisekundes = numanomasLaikas.getTime();
        }

        const likusiosMilisekundes = numanomosMilisekundes - dabartinesMilisekundes;
        let likusiosSekundes = Math.floor(likusiosMilisekundes / 1000);

        const dienos = Math.floor(likusiosSekundes / 60 / 60 / 24);
        likusiosSekundes -= dienos * 60 * 60 * 24;

        const valandos = Math.floor(likusiosSekundes / 60 / 60);
        likusiosSekundes -= valandos * 60 * 60;

        const minutes = Math.floor(likusiosSekundes / 60);
        likusiosSekundes -= minutes * 60;

        return [dienos, valandos, minutes, likusiosSekundes];
    }

    updateClock() {
        setInterval(() => {
            const timeValues = this.formatTime(this.calcDeadline());
            for (let i = 0; i < 4; i++) {
               this.allValuesDOM[i] .innerText = timeValues[i];
                
            }
        }, 1000)
    }
    render() {
        const timeValues = this.formatTime(this.calcDeadline());
        const labelValues = ['Days', 'Hours', 'Minutes', 'Seconds'];
        let HTML = '';

        for (let i = 0; i < timeValues.length; i++) {
            HTML += `<div class="time">
                        <div class="value">${timeValues[i]}</div>
                        <div class="label">${labelValues[i]}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
        this.allValuesDOM = this.DOM.querySelectorAll('.value');
    }
}

export { Clock }