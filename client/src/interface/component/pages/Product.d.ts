interface IProduct {
    _id: string | number;
    discount: number;
    price: number;
    total?: number;
    selling?: boolean;
    imgLeave?: string;
    branchId?: string | undefined;
    supplierId?: string | undefined;
    title?: string;
    carousels: Array;
    thumbnails: string[];
    sizes: Array;
    total?: number;
    formattedoldPrice?: number;
    formattednewPrice?: number;
    normalPrice?: number;
    type?: "sale" | "new in" | "clothing" | "shoes" | "accessories" | "sportswear" | "jeans" | "brands" | "topman" | "outlet" | "marketplace" | "monki" |undefined ;
}

interface IProducts {
    products : Array<IProduct>
}
