import { Userobj } from "./userobj"
import { Chatobj } from "./chat"
export interface Channelobj {
    Channelname: string
    Userlist : Userobj[]
    chatList: Chatobj[]
}