import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteOverviewPage } from './route-overview.page';

describe('RouteOverviewPage', () => {
  let component: RouteOverviewPage;
  let fixture: ComponentFixture<RouteOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
