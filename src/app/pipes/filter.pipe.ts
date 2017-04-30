import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], filterChar: string): any {
    let filtered = [];
    
    for(let i = 0; i < value.length ;i++){
      if(value[i].charAt(0) === filterChar)
        filtered.push(value[i]);
    }
    return filtered;
  }
}
