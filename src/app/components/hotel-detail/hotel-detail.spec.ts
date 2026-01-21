import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // <--- Needed for HotelService
import { RouterTestingModule } from '@angular/router/testing'; // <--- Needed for ActivatedRoute
import { HotelDetailComponent } from './hotel-detail'; // <--- FIXED: Correct Class Name

describe('HotelDetailComponent', () => {
  let component: HotelDetailComponent;
  let fixture: ComponentFixture<HotelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HotelDetailComponent, // <--- Import the Standalone Component
        HttpClientTestingModule, // <--- Fakes the HTTP calls so tests don't fail
        RouterTestingModule // <--- Fakes the Router
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});