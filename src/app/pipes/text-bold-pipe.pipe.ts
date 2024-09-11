import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold',
  standalone: true
})
export class TextBoldPipePipe implements PipeTransform {

  transform(value: string): any {
    return '<b>' + value + '</b>'; 
  }

}
