import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DsgvoPage } from './dsgvo.page';

describe('DsgvoPage', () => {
  let component: DsgvoPage;
  let fixture: ComponentFixture<DsgvoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsgvoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DsgvoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
