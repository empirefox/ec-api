sku
export interface ISku {
  ID: number;
  ProductID: number;
  Stock: number; // 库存
  Img: string; // 图片地址
  SalePrice: number; // 售价
  MarketPrice: number; // 市场价
  Freight: number; // 运费
}

product
export interface IProduct {
  ID: number;
  Name: string;
  Img: string;
  Intro: string;
  Detail: string;
  Saled: number;
  ForSale: boolean;
  TimeCreated: number;
  TimeSale: number;
  TimeShelf: number; // 暂未使用
  CategoryID: number;
  Skus?: ISku[];
}
