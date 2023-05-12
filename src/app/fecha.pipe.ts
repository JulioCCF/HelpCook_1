import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {
  transform(value: Date): string { 
    return value.toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'});
  }
}