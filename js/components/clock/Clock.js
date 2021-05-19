function Clock(selector) {
    const DOM = document.querySelector(selector);
    const timeValues = [432, 9, 37, 39];
    const labelValues = ['Days', 'Hours', 'Minutes', 'Seconds'];
    let HTML = '';

    for (let i = 0; i < timeValues.length; i++) {
        HTML += `<div class="time">
                    <div class="value">${timeValues[i]}</div>
                    <div class="label">${labelValues[i]}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;
}

export { Clock }