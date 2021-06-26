function socials(selector, data) {
    //validation

    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const social of data) {

        HTML += `<a href="${social.href}"
                    target="_blank"
                    class="fa fa-${social.icon}"></a>`;
    }

    //result return
    DOM.innerHTML = HTML;
}

export { socials }