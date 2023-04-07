class ComponentsDiv extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' });
        const dom = document.createElement('div');
        const style = document.createElement('style');
        dom.textContent = 'components-div';
        style.textContent = `
      div {
        color: red;
      }
    `;
        shadow.appendChild(style);
        shadow.appendChild(dom);
    }
}

// 注册组件
customElements.define('components-div', ComponentsDiv);
