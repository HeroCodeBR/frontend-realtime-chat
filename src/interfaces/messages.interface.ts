export interface IMessageData {
  room_id: string;
  body: string;
  createdAt: number;
  to_user_id: string;
  from_user_id: string;
  id: number;
  viewed_by_the_user: boolean;
}

export interface ICreateMessage {
  room_id: string;
  body_message: string;
  email: string;
}

export interface IOutputMessage {
  ok: boolean;
}
