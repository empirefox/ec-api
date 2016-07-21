地址
由用户ID一次性查询，只列出传输数据格式
export interface IAddress {
  ID: number; // 地址id
  Contact: string;
  Phone: string;
  Province: string;
  City: string;
  District: string;
  House: string;
  Pos: number; // 由大到小排序时使用
}
