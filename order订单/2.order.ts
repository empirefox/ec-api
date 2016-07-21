订单条目
订单条目为相应sku的快照
export interface IOrderItem {
  ID: number;
  OrderID: number;
  Quantity: number; // sku数量
  DiscountRate?: number; // 折扣，预留，暂未使用
  Name: string; // sku快照项
  ProductID: number;
  Img: string; // sku快照项
  Attrs: string; // sku快照项
  Price: number; // sku快照项
  DeliverFee: number; // sku快照项
}

订单
由用户id实时查询，客户端未缓存
export interface IOrder {
  ID: number;
  PaymentAmount: number; // 实付款金额
  DiscountValue: number; // 节省金额，是否需要？
  AbandonedReason: string; // 取消原因
  TrackingNumber: string; // 订单串号，暂未使用
  Items: IOrderItem[]; // 订单条目
  DeliverFee: number; // 快递费
  DeliverCom: string; // 快递公司
  DeliverNo: string; // 快递单号
  State: string; // 订单状态 checkout|cancelled|paied|paid_cancelled|delivered|reciepted|returned
  CreatedAt: number; // 下单时间
  CancelledAt: number; // 取消时间
  PaiedAt: number; // 付款时间
  DeliveredAt: number; // 发货时间
  ReceiptedAt: number; // 确认收货时间
  ReturnedAt: number; // 退货时间
  Remark?: string; // 订单的用户备注
  IsDeliverPay: boolean; // 是否货到付款，是否支持此功能？
  Invoice: IInvoice; // 发票

  Contact: string; // 联系人
  Phone: string; // 电话
  DeliverAddress: string; // 详细地址
}
