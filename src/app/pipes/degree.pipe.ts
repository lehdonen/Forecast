import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree'
})
export class DegreePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const tempWithDegree = `${value} °C`;
    return tempWithDegree;
  }

}
