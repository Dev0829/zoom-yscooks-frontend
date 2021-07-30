import { UserModel } from './user.model';

export interface FeedModel {
  postid?: number;
  user?: UserModel;
  group?: Array<any>;
  media?: Array<any>;
  file?: object;
  comment?: Array<any>;
  likes?: Array<any>;
}
