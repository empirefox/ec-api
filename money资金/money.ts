资金流动条目
每次交易、退款、提现的记录，在钱包(IWallet)中使用
export interface ICapitalFlow {
  ID: number; // 条目id
  CreatedAt: number; // 产生时间
  Type: string; // trade|refund|withdraw
  Reason: string; // 事由
  Amount: number; // 交易金额，以用户视觉，进账为正，出账为负
  Balance: number; // 交易后余额
}

积分条目
每次积分变动的记录，在钱包(IWallet)中使用
export interface IPointsItem {
  ID: number;
  CreatedAt: number;
  Reason: string; // 事由
  Amount: number; // 变动数量，以用户视觉，奖励为正，使用为负
  Balance: number; // 变动后的余量
}

钱包
1. 由用户id查询
2. 全部实时批量查询
export interface IWallet {
  HasPayKey: boolean; // 是否设置支付密码
  CapitalFlows: ICapitalFlow[]; // 资金流动
  PointsList: IPointsItem[]; // 积分变动
}
