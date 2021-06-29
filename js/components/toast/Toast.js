class Toast {
    constructor() {
        this.bodyDOM = document.querySelector('body');
        this.DOM = null;
        this.titleDOM = null;
        this.messageDOM = null;
        this.closeDOM = null;

        this.render();
        this.addEvents();
    }

    render() {
        const HTML = `<div class="toast hide" data-state="success">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-info-circle"></i>
                        <i class="fa fa-exclamation-triangle"></i>
                        <i class="fa fa-shield"></i>
                        <div class="texts">
                            <div class="title">Form validation</div>
                            <div class="message">Demo message about action with a form</div>
                        </div>
                        <i class="fa fa-times"></i>
                    </div>`;

        this.bodyDOM.insertAdjacentHTML('beforeend', HTML);

        this.DOM = document.querySelector('.toast');
        this.titleDOM = this.DOM.querySelector('.title');
        this.messageDOM = this.DOM.querySelector('.message');
        this.closeDOM = this.DOM.querySelector('.fa-times');
    }

    show() {
        this.DOM.classList.remove('hide');
    }

    hide() {
        this.DOM.classList.add('hide');
    }

    success(msg, title = 'Success!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'success';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    info(msg, title = 'Information!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'info';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    warning(msg, title = 'Warning!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'warning';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    error(msg, title = 'Error!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'error';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    addEvents() {
        this.closeDOM.addEventListener('click', () => {
            this.hide();
        })
    }
}

export { Toast }