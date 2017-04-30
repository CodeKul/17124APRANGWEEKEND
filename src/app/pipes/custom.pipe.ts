import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, num1: number, num2: number): any {

    let str = '';
    for (let i = num1; i < num2; i++) {
      str += value.charAt(i).toUpperCase();
    }
    value = str;
    return value;
  }
}
