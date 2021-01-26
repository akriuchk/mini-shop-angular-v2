import { Catalog } from './catalog';
import { Product } from './linen';

export class ImportFileDto {
    constructor(
        public createdAt: string,
        public filename: string,
        public id: number,
        public status: string,
        public result: ImportResultDto[]

    ) { }
}

export class ImportResultDto {
    constructor(
        public category: Catalog,
        public updates: ProductUpdateDetails[],

    ) { }
}

export class ProductUpdateDetails extends Product {
    constructor(
        public isNew: boolean,
        public id: number, 
        public name: string, 
        public category: string, 
        public smallAvailable: boolean,
        public middleAvailable: boolean, 
        public euroAvailable: boolean, 
        public duoAvailable: boolean
    ) {
        super(id, name, category, smallAvailable, middleAvailable, euroAvailable, duoAvailable, []);
    }
}