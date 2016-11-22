import { ComponentFixture,TestBed } from '@angular/core/testing';
import { PhoneNumberComponent } from './phone-number.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe('App', () => {
    let component: PhoneNumberComponent;
    let fixture: ComponentFixture<PhoneNumberComponent>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PhoneNumberComponent
            ],
            imports: [
                RouterTestingModule
            ]
        });

        fixture = TestBed.createComponent(PhoneNumberComponent);
        component = fixture.componentInstance;

    });

    it ('should work', () => {
        expect(component instanceof PhoneNumberComponent).toBe(true, 'should create PhoneNumberComponent');
    });

    it ('should display the correct label', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('label'));
        expect(de.nativeElement.textContent).toContain("Please enter your phone number");
    });

    it('should display an input field', () => {
        de = fixture.debugElement.query(By.css('input'));
        expect(de).toBeTruthy();
    });

    it('should not error with valid phone number', () => {
        let validNums = [
            '01999999999',
            '+449999999999'
        ];
        for (var num in validNums) {
            component.validate('01999999999');
            expect(component.error).toBeFalsy();
        }
    });

    it('should error with an invalid phone number', () => {
        let invalidNums = [
            '01234567890123',
            'invalid number'
        ];
        for (var num in invalidNums) {
            component.validate(num);
            expect(component.error).toBeTruthy();
        }
    });
});