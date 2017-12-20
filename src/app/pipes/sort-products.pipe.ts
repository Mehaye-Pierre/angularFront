import { Product } from './../models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortProducts'})


export class SortProducts implements PipeTransform {
    transform(array: Array < Product>, args: string): Array<Product> {
        if (array !== null) {
            array.sort((a: Product, b: Product) => {
                if (args === 'price') {
                    if (a.price < b.price) {
                        return -1;
                      } else if (a.price > b.price) {
                        return 1;
                      } else {
                        return 0;
                      }
                }else if (args === 'id') {
                    if (a.id < b.id) {
                        return -1;
                      } else if (a.id > b.id) {
                        return 1;
                      } else {
                        return 0;
                      }
                }else if (args === 'name') {
                    if (a.name < b.name) {
                        return -1;
                      } else if (a.name > b.name) {
                        return 1;
                      } else {
                        return 0;
                      }
                }

              });
              return array;
        }
      }
}