import {Artwork} from './Artwork_interface'; // importáljuk a köny osztályt a köny intefészből

export class Statue implements Artwork { 
    title: string;
    price: number;
    year : number;
    size : number;
    public constructor(title: string, price: number, year : number , size: number) { 
        this.title = title;
        this.price = price;
        this.year = year;
        this.size = size;
    }
}