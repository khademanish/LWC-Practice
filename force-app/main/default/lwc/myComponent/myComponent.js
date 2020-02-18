import { LightningElement, track } from 'lwc';

/**
 * Show an item
 */

export default class Child extends LightningElement {
@track guestName = 'Guest';
 handleChange(event){ 
     this.guestName = event.target.value;
 }
}
