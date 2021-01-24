import { Product } from './linen';
import { MatTableDataSource } from '@angular/material';

export class Catalog {
    linenDatasource: MatTableDataSource<Product>;

    constructor(
        public id: number,
        public name: string,
        public displayName: string,
        public products: Product[]) {
    }
}
