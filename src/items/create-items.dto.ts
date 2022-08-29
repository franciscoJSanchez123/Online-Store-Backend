export class CreateItemDto {
    itemId?:string;
    name: string;
    description: string;
    img:string;
    isActive:boolean;
    price:number;
    imgsUrls:[]
  }
  