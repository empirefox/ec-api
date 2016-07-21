团购条目
1. 与用户无关
2. 一次性查询
export interface IGroupBuyItem {
  ID: number;
  Img: string; // 为空时使用sku.Img
  Title: string;
  Reason: string;
  Price: number;
  Sku: ISku; // 必须预加载
  Start: number; // 开始时间
  End: number; // 结束时间
}
