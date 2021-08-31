
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(supplierList: any[], searchText: string): any[] {
    if (!supplierList) {
      return [];
    }
    if (!searchText) {
      return supplierList;
    }

    return supplierList.filter(it => {
        console.log(supplierList, searchText);
      return searchText;
    });
  }
}
