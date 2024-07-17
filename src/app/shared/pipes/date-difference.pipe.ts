import { Pipe, PipeTransform } from '@angular/core';
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  addMonths,
  addYears,
} from 'date-fns';

@Pipe({
  name: 'dateDifference',
})
export class DateDifferencePipe implements PipeTransform {
  transform(targetDate: Date): string {
    const target = new Date(targetDate);
    const today = new Date();

    const years = differenceInYears(today, target);
    const months = differenceInMonths(today, target);
    const days = differenceInDays(today, target);

    let result = '';

    if (years >= 1) {
      const remainingMonths = differenceInMonths(
        addYears(today, -years),
        target
      );
      const totalYears = years + remainingMonths / 12;
      result = totalYears.toFixed(1) + ' years';
    } else if (months >= 1) {
      const remainingDays = differenceInDays(target, addMonths(today, months));
      const totalMonths = months + remainingDays / 30;
      result = totalMonths.toFixed(1) + ' months';
    } else {
      result = days + ' days';
    }

    return result;
  }
}
