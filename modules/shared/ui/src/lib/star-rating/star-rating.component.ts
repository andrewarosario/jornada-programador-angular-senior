import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

type Rating = { stars: number; text: string };

@Component({
  selector: 'lib-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true,
    },
  ],
})
export class StarRatingComponent implements ControlValueAccessor {
  @Input() ratings: Rating[] = [
    {
      stars: 1,
      text: 'Péssimo',
    },
    {
      stars: 2,
      text: 'Ruim',
    },
    {
      stars: 3,
      text: 'Regular',
    },
    {
      stars: 4,
      text: 'Bom',
    },
    {
      stars: 5,
      text: 'Ótimo!',
    },
  ];

  ratingText!: string;
  displayText = '';
  protected disabled!: boolean;
  protected value!: number;

  onChanged!: (stars: number) => void;
  onTouched!: () => void;

  writeValue(value: number) {
    this.value = value;
  }

  registerOnChange(fn: (stars: number) => void) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(rating: Rating): void {
    if (!this.disabled) {
      this.ratingText = rating.text;
      this.writeValue(rating.stars);
      this.onChanged(rating.stars);
      this.onTouched();
    }
  }
}
