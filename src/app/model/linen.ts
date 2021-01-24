import { Image } from "./image";

export class Product {
    constructor(public id: number,
        public name: string,
        public category: string,
        public smallAvailable: boolean,
        public middleAvailable: boolean,
        public euroAvailable: boolean,
        public duoAvailable: boolean,
        public images: Image[]) {
    }
}
