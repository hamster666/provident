import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture,TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
    let component: AppComponent;
	let debugEl: DebugElement;
    let element: HTMLElement;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({ 
        	declarations: [
        		AppComponent,
        		HeaderComponent,
        		FooterComponent
        	], 
        	imports: [
        		RouterTestingModule
        	]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
       
    });

    it ('should work', () => {
        expect(component instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    it('should have a header on the page', () => {
    	let debugEl = fixture.debugElement.query(By.css('app-header'));
    	expect(debugEl).toBeTruthy();
    })

    it('should have a footer on the page', () => {
    	let debugEl = fixture.debugElement.query(By.css('app-footer'));
    	expect(debugEl).toBeTruthy();
    })

});