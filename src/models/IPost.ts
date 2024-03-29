import { IUser } from "./IUser";

export interface IPost {
  postId: number;
  title: string;
  description: string;
  images: string[];
  postOwner: IUser;
}
