import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, fields: string[]): any[] {
    if (!searchText || !fields || fields.length === 0) {
      return items;
    }

    const query = searchText.toLowerCase();
    return items.filter((item: any) => {
      for (const property of fields) {
        if (Object.prototype.hasOwnProperty.call(item, property)) {
          const itemValue = String(item[property]).toLowerCase();
          if (itemValue.includes(query)) {
            return true;
          }
        }
      }
      return false;
    });
  }
}

