export interface IRoomProps {
  _id: string;
  user_id_created_room: string[];
  user_id_joined_room: string[];
}
export interface IToUserMessageProps {
  email: string;
  name: string;
  _id: string;
}

export interface IDataRoomProps {
  room: IRoomProps;
  toUserMessage: IToUserMessageProps;
  lastMessage: IMessageDataProps;
  count: number;
}

export interface IMessageDataProps {
  body: string;
  createdAt: Date;
  from_user_id: string;
  room_id: string;
  to_user_id: string;
  viewed_by_the_user: boolean;
  _id: string;
}
