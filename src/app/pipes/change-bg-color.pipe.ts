import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeBgColor',
  standalone: true
})
export class ChangeBgColorPipe implements PipeTransform {

  transform(value: any): any {
    let date = new Date(value).getTime();
    console.log(value);
    switch (true) {
      case (new Date().setDate(new Date().getDate() - 7) < date): return '#2F80ED';
      case (new Date().setMonth(new Date().getMonth() - 1) < date): return '#10d824';
      case (new Date().setMonth(new Date().getMonth() - 6) < date): return '#ffdd00';
      case (new Date().setMonth(new Date().getMonth() - 6) > date): return '#d80000';
      default: return "";
    }
  }
}
