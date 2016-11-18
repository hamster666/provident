import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
    selector: 'phone-number',
    templateUrl: './phone-number.component.html'
})
export class PhoneNumberComponent {
    error: boolean = false;
    regex = /^[0-9\s+]{9,13}$/;
    @Input() name: string;
    @Input() placeholder: string;

    validate(value: string){
        this.error = !this.regex.test(value);
        if (this.error){
            //show tick
        } else {
            //show cross
        }
    }

    ngOnChanges(changes: SimpleChanges){
        if (this.placeholder == undefined){
            this.placeholder = this.name;
        }
    }
}