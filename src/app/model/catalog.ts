import { Linen } from './linen';
import { MatTableDataSource } from '@angular/material';

export class Catalog {
    id: number;
    name: string;
    linens: Linen[];
    linenDatasource: MatTableDataSource<Linen>;


    constructor(id: number, name: string , linens: Linen[]) {
        this.id = id;
        this.name = name;
        this.linens = linens;
    }
}
