用户信息
仅包含返回给用户的信息，删除了vip等内容，可根据情况设定
export interface IUserInfo {
  ID: number; // user id
  // UserInfoOut 与微信 userinfo 对应
  Nickname: string;
  Sex: number;
  City: string;
  Province: string;
  HeadImageURL: string;
  Privilege: string;

  Phone: string;
}
