分类
1. 强行设定为3级分类，第3级为叶节点，必须设置Img
2. 与用户无关
3. 一次性查询
export interface ICategory {
  ID: number; // 分类id
  Name: string;
  Img?: string; // 第3级必须设置
  Pos: number; // 排序使用
}
