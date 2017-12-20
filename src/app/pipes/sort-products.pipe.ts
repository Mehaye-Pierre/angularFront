import { Product } from './../models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortProducts' })


export class SortProducts implements PipeTransform {
    transform(array: Array<Product>, args: string): Array<Product> {
        if (array !== null && array !== undefined) {
            array.sort((a: Product, b: Product) => {
                if (args === 'price increasing') {
                    if (a.price < b.price) {
                        return -1;
                    } else if (a.price > b.price) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else if (args === 'price decreasing') {
                    if (a.price < b.price) {
                        return 1;
                    } else if (a.price > b.price) {
                        return -1;
                    } else {
                        return 0;
                    }
                } else if (args === 'id') {
                    if (a.id < b.id) {
                        return -1;
                    } else if (a.id > b.id) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else if (args === 'name increasing') {
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    } else {
                        return 0;
                    }
                }else if (args === 'name decreasing') {
                    if (a.name < b.name) {
                        return 1;
                    } else if (a.name > b.name) {
                        return -1;
                    } else {
                        return 0;
                    }
                }

            });
            return array;
        }
    }
}
