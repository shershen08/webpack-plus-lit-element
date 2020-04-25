import { LitElement, html, css } from 'lit-element';


import '../styles/index.scss';

console.log('webpack starterkit');


class MyList extends LitElement {

    constructor(){
        super();
    }


    static get properties() {
        return { 
          items: {
              type: Array,
          }
        };
      }

    render(){

        const list = this.items ? html`${this.items.map(i => html`<li>${i}</li>`)}` : '';

        return html`<ul>
                    ${list}
                    </ul>`;
    }
}


class MyElement extends LitElement {

    constructor(){
        super();
        setTimeout(() => {
            this.requestUpdate();
        });

        this.items = [1,2,3,4,5];
    }

     static get styles() {
        return css`
          p { color: red; }
        `;
      }

     static get properties() {
        return { 
          name: { type: String },
          items: {
              type: Array
          }
        };
      }

      updated(changedProperties) {
        console.log('updated');
          console.log(changedProperties);
      }

       shouldUpdate(changedProperties) { 
        console.log('changedProperties');
        return true;
       }

    handleClick(){
        console.log('handleClick');
        this.name = 'click happened';
    }

  render(){

    return html`
      <!-- template content -->
      <p>A paragraph. name = ${this.name}</p>
      <button @click="${this.handleClick}">
          click me
      </button>
      ${this.items}
      <my-list .items="${this.items}"></my-list>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);
customElements.define('my-list', MyList);