物流条目
需要保存在服务器时设定？
export interface IDeliveryItem {
  time: string;
  context: string;

  date: string;
  second: string;
}

export interface IDeliveryDay {
  date: string;
  items: IDeliveryItem[];
}

export interface IDelivery {
  message: string;
  status: number;
  state: number;
  data: IDeliveryItem[];

  days: IDeliveryDay[];
}
