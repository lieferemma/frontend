import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverOverviewPage } from './driver-overview.page';

describe('DriverOverviewPage', () => {
  let component: DriverOverviewPage;
  let fixture: ComponentFixture<DriverOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
