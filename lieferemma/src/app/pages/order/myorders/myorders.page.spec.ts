import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyordersPage } from './myorders.page';

describe('MyordersPage', () => {
  let component: MyordersPage;
  let fixture: ComponentFixture<MyordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyordersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
