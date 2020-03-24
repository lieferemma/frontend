import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackorderPage } from './trackorder.page';

describe('TrackorderPage', () => {
  let component: TrackorderPage;
  let fixture: ComponentFixture<TrackorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
