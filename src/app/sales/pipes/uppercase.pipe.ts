import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, boolean: boolean = true): string {
      
    return (boolean) ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
