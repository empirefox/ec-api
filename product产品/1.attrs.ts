产品属性
用户无关，一次性查询
export interface IProductAttr {
  ID: number;
  Value: string;
  GroupID: number;
  Pos: number; // 排序时使用
}

产品属性组
用户无关，一次性查询
export interface IProductAttrGroup {
  ID: number;
  Name: string;
  Pos: number; // 排序时使用
}
