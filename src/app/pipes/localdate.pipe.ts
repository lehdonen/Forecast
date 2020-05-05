import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localdate'
})
export class LocaldatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const newDate = new Date(0);
    newDate.setUTCSeconds(value);
    return newDate.toLocaleString();
  }

}
