import { LitElement, html, css } from 'lit';
import { WiredButton } from "wired-elements";

export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            h2{
                color:blue;
            }
            span{
                color:red;
                font-size:15px;
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
            input{
                width:50px;

            }
        `
    ];
    
    static properties={
        counter:{type:Number},
        quantity:{type:Number},
    }
    constructor(){
        super();
    }
    get quantity(){
        return parseInt(this.renderRoot.querySelector("#quantity").value);
    }
    add(){
        if(!this.quantity){
            this.counter++;
            return;
        }
        this.counter+=this.quantity;
    }
    subtract(){
        if(!this.quantity){
            this.counter--;
            return;
        }
        this.counter-=this.quantity;
    }
    render() {
        return html`
            <h2>Counter <span>if the input value is 0, the counter will increase by 1</span></h2>
            <div>
                <wired-button @click=${this.subtract}>Substract</wired-button>
                <p id="counter">${this.counter}</p>
                <wired-button @click=${this.add}>Add</wired-button>
                <p>
                    <input type="number" id="quantity" min="0" value="0">
                </p>
            </div>
        `;
    }
}
customElements.define('eit-counter', EitCounter);
