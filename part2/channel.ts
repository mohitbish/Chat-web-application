import { Userobj } from "src/app/userobj"
import { Chatobj } from "chat"
export interface Channelobj {
    Userlist : [Userobj]
    chatList:[Chatobj]
}