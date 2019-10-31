export class Linen {
    id: number;
    name: string;
    smallAvailable: boolean;
    middleAvailable: boolean;
    euroAvailable: boolean;
    duoAvailable: boolean;
    image: number;
    imageUrl: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

    constructor(id: number,
        name: string,
        smallAvailable: boolean,
        middleAvailable: boolean,
        euroAvailable: boolean,
        duoAvailable: boolean,
        image: number) {
        this.id = id;
        this.name = name;
        this.smallAvailable = smallAvailable;
        this.middleAvailable = middleAvailable;
        this.euroAvailable = euroAvailable;
        this.duoAvailable = duoAvailable;
        this.image = image;
    }

}
