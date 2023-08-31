import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RatingService } from '../services/rating/rating.service';

@Component({
  selector: 'lib-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  constructor(private ratingService: RatingService) {}

  form = new FormGroup({
    rating: new FormControl<number | null>(
      { value: null, disabled: false },
      Validators.required
    ),
    comment: new FormControl(''),
  });

  onSubmit(): void {
    this.ratingService.setRating(this.form.value);
  }
}
