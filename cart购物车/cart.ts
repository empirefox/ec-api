购物车
由用户ID一次性查询
export interface ICartItem {
  ID: number; // 购物车条目id
  Img: string; // sku快照项，Sku失效时使用
  Name: string; // sku快照项，Sku失效时使用
  Type: string; // sku attrs快照，例如：XL 红色
  Price: number; // sku快照项，Sku失效时使用
  Quantity: number; // 此sku数量
  CreatedAt: number;
  Sku?: ISku; // 预加载 Sku.Product，如果sku失效则为空
}
