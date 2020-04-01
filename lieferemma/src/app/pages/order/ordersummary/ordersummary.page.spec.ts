import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersummaryPage } from './ordersummary.page';

describe('OrdersummaryPage', () => {
  let component: OrdersummaryPage;
  let fixture: ComponentFixture<OrdersummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
