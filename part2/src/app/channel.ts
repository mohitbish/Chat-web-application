import { Userobj } from "./userobj"
import { Chatobj } from "./chat"
export interface Channelobj {
    Channelname: String
    Userlist : Userobj[]
    chatList: Chatobj[]
}