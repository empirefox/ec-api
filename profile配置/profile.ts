配置
export interface IProfile {
  FreeDeliverLine: number; // 订单不低于此数量时免运费
  Phone: string; // 显示的联系电话
  WxAppId: string;
  WxScope: string;
  WxLoginPath: string;
  DefaultHeadImage: string;
}
