export interface IUsers {
  createdAt: Date;
  email: string;
  name: string;
  avatar_url: string;
  _id: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: IUsers;
}
