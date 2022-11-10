import {Artwork} from './Artwork_interface'; 

export class Statue implements Artwork { 
    title: string;
    price: number;
    year : number;
    height : number;
    public constructor(title: string, price: number, year : number , height: number) { 
        this.title = title;
        this.price = price;
        this.year = year;
        this.height = height;
    }
}