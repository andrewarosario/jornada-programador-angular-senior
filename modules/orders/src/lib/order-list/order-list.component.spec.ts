import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from 'modules/shared/ui';
import { RatingService } from '../services/rating/rating.service';
import { OrderListComponent } from './order-list.component';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
  let ratingService: RatingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderListComponent],
      imports: [StarRatingComponent, ReactiveFormsModule],
    }).compileComponents();

    ratingService = TestBed.inject(RatingService);
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button when form is valid', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);

    const [firstStar]: HTMLSpanElement[] =
      fixture.nativeElement.querySelectorAll('[role=radio]');
    firstStar.click();

    fixture.detectChanges();

    expect(button.disabled).toBe(false);
  });

  it('should call "onSubmit" function when button is clicked', () => {
    jest.spyOn(component, 'onSubmit');
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    const [firstStar]: HTMLSpanElement[] =
      fixture.nativeElement.querySelectorAll('[role=radio]');
    firstStar.click();

    fixture.detectChanges();

    button.click();

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call "setRating" function when button is clicked', () => {
    jest.spyOn(ratingService, 'setRating');
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    const [firstStar, secondStar]: HTMLSpanElement[] =
      fixture.nativeElement.querySelectorAll('[role=radio]');
    secondStar.click();

    fixture.detectChanges();

    button.click();

    expect(ratingService.setRating).toHaveBeenCalledWith({
      rating: 2,
      comment: '',
    });
  });
});
