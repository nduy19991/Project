interface IProduct {
    _id: string | number;
    discount: number;
    price: number;
    total?: number;
    selling?: boolean;
    imgHover?: string;
    imgLeave?: string;
    branchId?: string | undefined;
    title?: string;
    carousels: Array;
    thumbnails: string[];
    sizes: Array;
    total?: number;
    formattedoldPrice?: number;
    formattednewPrice?: number;
    normalPrice?: number;
    type?: "sale" | "new in" | "clothing" | "shoes" | "accessories" | "sportswear" | "jeans" | "brands" | "topman" | "outlet" | "marketplace" | undefined ;
}

interface IProducts {
    products : Array<IProduct>
}
