import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'familyName'
})
export class FamilyNamePipe implements PipeTransform {

  transform(values: string[], ...args: unknown[]): string {
    const mapValue: string[] = values.map((value) => {return value});
    return mapValue.join(', ');
  }

}
