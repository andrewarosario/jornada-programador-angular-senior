import { Injectable } from '@angular/core';

export type Rating = {
  rating: number | null;
  comment: string | null;
};

@Injectable({ providedIn: 'root' })
export class RatingService {
  setRating(rating: Partial<Rating>): void {
    console.log(rating);
  }
}
