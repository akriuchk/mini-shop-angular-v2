export class Item {
    id: number;
    name: string;
    imageUrl: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

    //while images are not uploaded, stick to this
    constructor(ids: number, name: string ) {
        this.id = ids;
        this.name = name;
    }
}
