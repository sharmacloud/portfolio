import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharmacloudPage } from './sharmacloud.page';

describe('SharmacloudPage', () => {
  let component: SharmacloudPage;
  let fixture: ComponentFixture<SharmacloudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharmacloudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharmacloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
