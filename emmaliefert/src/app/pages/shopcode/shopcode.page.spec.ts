import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopcodePage } from './shopcode.page';

describe('ShopcodePage', () => {
  let component: ShopcodePage;
  let fixture: ComponentFixture<ShopcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
