import { useRef, useState } from 'react';
import ChatsItem from '../components/chatsItem'
import {v4 as uuidv4} from 'uuid'
import {AiOutlineSend } from "react-icons/ai";
import axios from "axios"
interface Message{
    role:string,
    content:string
}
function Chats() {
    // const auth = useAuth()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [chatMessage, setChatMessage] = useState<Message[]>([])
    
    const sendChatRequest = async(message:string) => {
        const res = await axios.post("/chat/new", { message });
        if(res.status !== 200){
            throw new Error("Unable to send chat")
        }
        const data = await res.data;
        console.log(data);
        return data
    }

    const handleSubit = async()=>{
        const content = inputRef.current?.value as string
        if(inputRef && inputRef.current){
            inputRef.current.value = "";
        }
        const newMessage:Message = {role:"user", content};
        setChatMessage((prev) =>[...prev,newMessage]);
        const chatMessages = await sendChatRequest(content);
        setChatMessage([...chatMessages.chats])
    }
      
  return (
    <div className='text-white'>
       <div>
        {
           chatMessage.map((chat) => {
               return <ChatsItem content={chat.content} role={chat.role} key={uuidv4()} />
            })
        }
       </div>
       <div className='fixed bottom-0 h-20 w-5/6'>
        <div className='flex flex-row '>
            <input type="text" ref={inputRef} className='outline-none text-white bg-slate-800 w-full relative py-1 px-2' placeholder='Send message'/>
            <AiOutlineSend onClick={handleSubit} className='absolute right-1 w-5 h-5 mt-1'/>
        </div>
        <p className='text-[11px] my-3 text-center'>Check all the answers given carefully, bots can make mistakes</p>
       </div>
    </div>
  )
}

export default Chats