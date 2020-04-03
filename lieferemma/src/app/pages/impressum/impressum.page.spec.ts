import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImpressumPage } from './impressum.page';

describe('ImpressumPage', () => {
  let component: ImpressumPage;
  let fixture: ComponentFixture<ImpressumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImpressumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
