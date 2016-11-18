/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let debugEl: DebugElement;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ HeaderComponent ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
        .compileComponents();
  
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

        // query for the title H1 by CSS element selector. 
        debugEl = fixture.debugElement.query(By.css('h1'));
        element = debugEl.nativeElement;
    });

    it('should display original title', () => {
        expect(element.textContent).toContain(component.title);
    });

    it('should display a different test title', () => {
        component.title = 'Test Title';
        fixture.detectChanges();
        expect(element.textContent).toContain('Test Title');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});