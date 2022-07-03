import { LitElement, html, css } from 'lit';
import { WiredButton, WiredCard,WiredInput, WiredSlider } from "wired-elements";

export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
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
        `
    ];
    
    static properties={
        counter:{type:Number},
        quantity:{type:Number},
    }
    constructor(){
        super();
        this.quantity=0;
    }
    get getquantity(){
        return parseInt(this.renderRoot.querySelector("#quantity").value);
    }
    add(){
        if(this.getquantity===0){
            this.counter++;
            return;
        }
        this.counter+=this.getquantity;
    }
    subtract(){
        if(this.getquantity===0){
            this.counter--;
            return;
        }
        this.counter-=this.getquantity;
    }
    doChangeQuantity(e){
        this.quantity=e.detail.value;
    }
    render() {
        return html`
            <wired-card elevation="3">
                <h2>Counter <span>if the input value is 0, the counter will increase by 1</span></h2>
                <div>
                    <wired-button @click=${this.subtract}>Substract</wired-button>
                    <p id="counter">${this.counter}</p>
                    <wired-button @click=${this.add}>Add</wired-button>
                    <p>
                        <wired-input type="number" id="quantity" min="0" value="0" .value="${this.quantity}"></wired-input>
                    </p>
                </div>
                <p>
                    <wired-slider value="0" min="0" max="20" step="2" @change=${this.doChangeQuantity}></wired-slider>
                </p>
            </wired-card>
        `;
    }
}
customElements.define('eit-counter', EitCounter);
