import {Component, Input, SimpleChanges, Output} from '@angular/core';

@Component({
    selector: 'phone-number',
    templateUrl: './phone-number.component.html'
})
export class PhoneNumberComponent {
    label: string = 'Please enter your phone number';
    placeholder: string = 'Phone number';
    errorMsg: string = 'Please enter a valid telephone number.';

    error: boolean = false;
    regex = /^[0-9\s+]{9,14}$/;

    validate( value: string ) {
        this.error = !this.regex.test(value);
        if ( this.error ) {
            // show tick
        } else {
            // show cross
        }
    }
}