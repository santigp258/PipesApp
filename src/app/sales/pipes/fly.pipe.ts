import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fly'
})
export class FlyPipe implements PipeTransform{
    transform(boolean:boolean){
        return (boolean) ? 'Fly' : 'No fly';
    }
}