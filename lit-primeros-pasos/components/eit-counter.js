import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            h2{
                color:red;
            }
            div{
                display:flex;
                flex-direction:row;
                justify-content: space-around;
            }
            button{
                padding: 10px 20px;
                background-color:#39de;
                border: 1px solid #39de;
                border-radius:5px;
                color:#FFF;
                font-weight:900
            }
        `
    ];
    
    static properties={
        counter:{type:Number}
    }
    constructor(){
        super();
        // this.counter=0;
    }
    add(){
        const counter=this.renderRoot?.querySelector('#counter')??null;
        this.counter++;
        counter.value=this.counter;
    }
    subtract(){
        const counter=this.renderRoot?.querySelector('#counter')??null;
        this.counter--;
        counter.value=this.counter;
    }
    render() {
        return html`
            <h2>Mi contador</h2>
            <div>
                <button @click=${this.subtract}>-1</button>
                <p id="counter">${this.counter}</p>
                <button @click=${this.add}>+1</button>
            </div>
        `;
    }
}
customElements.define('eit-counter', EitCounter);
