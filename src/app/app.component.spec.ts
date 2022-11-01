import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // eslint-disable-line
    const app = fixture.componentInstance; // eslint-disable-line
    expect(app).toBeTruthy();
  });

  it(`should have as title 'w2w'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // eslint-disable-line
    const app = fixture.componentInstance; // eslint-disable-line
    expect(app.title).toEqual('w2w');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // eslint-disable-line
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; // eslint-disable-line
    expect(compiled.querySelector('.content span')?.textContent).toContain('w2w app is running!');
  });
});
