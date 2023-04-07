customElements.define(
    'my-template',
    class extends HTMLElement {
        constructor() {
            super();
            const template = document.getElementById('my-template');
            const templateContent = template.content;
            this.attachShadow({ mode: 'open' }).appendChild(
                templateContent.cloneNode(true)
            );
        }
    }
);
