import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

let fixture, comp;
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [
        		AppComponent,
        		HeaderComponent,
        		FooterComponent
        	]
        });

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it ('should work', () => {
        expect(comp instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
     it('true is true', () => {
     	expect(true).toBe(true)
     });
});