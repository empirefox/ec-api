轮播
可关联 分类/产品，当前简化为直接指定链接(Link)
一次性查询，不与用户关联，只列出传输数据格式
export interface ICarouselItem {
  ID: number; // 轮播id
  Img: string;
  Link: string;
  Pos: number; // 排序时使用
}
