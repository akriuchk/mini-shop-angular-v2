import { Linen } from './linen';

export class Catalog {
    id: number;
    name: string;
    linens: Linen[];

    constructor(id: number, name: string , linens: Linen[]) {
        this.id = id;
        this.name = name;
        this.linens = linens;
    }
}
