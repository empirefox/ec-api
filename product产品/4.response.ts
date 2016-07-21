产品及列表查询次数多，返回时直接返回分解的项目
不需要组合好后再返回
产品-sku-属性 在客户端完成组合


export interface IProductResponse {
  Product: IProduct;
  Skus: ISku[];
  Attrs: IProductAttrId[];
}

export interface IProductsResponse {
  Products: IProduct[];
  Skus: ISku[];
  Attrs: IProductAttrId[];
}
