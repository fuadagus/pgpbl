import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadingComponent } from './loading.component';
import { StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/store/loading/loading.reducers';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [IonicModule.forRoot(),
                StoreModule.forRoot([]),
                StoreModule.forFeature('loading', loadingReducer),
                // StoreModule.forFeature('user', () => ({ user: { username: 'testUser' } }))],
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide loading component when it not loading', () => {

    const compiled = fixture.nativeElement
    expect(compiled.querySelected(".backdrop")).toBeNull();
  });
});
