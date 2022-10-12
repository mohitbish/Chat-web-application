import { Userobj } from "./userobj";
import { Channelobj } from "./channel";
export interface Groupobj {
    Groupname: String
    userlist : [Userobj]
    Channellist: [Channelobj]
}