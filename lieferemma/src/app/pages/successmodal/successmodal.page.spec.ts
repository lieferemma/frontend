import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessmodalPage } from './successmodal.page';

describe('SuccessmodalPage', () => {
  let component: SuccessmodalPage;
  let fixture: ComponentFixture<SuccessmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
