import { Product } from './../models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterProducts' })

export class FilterProducts implements PipeTransform {
    transform(array: Array<Product>, args: string): Array<Product> {
        if (array !== null) {
            if (args === null) {
                return array;
            }else {
                return array.filter(product => product.name.toLowerCase().includes(args.toLowerCase()));
            }
        }
    }
}
