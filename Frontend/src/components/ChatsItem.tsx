import { useAuth } from '../context/AuthContext';
import gpt from '../assets/white.png'
function ChatsItem({content ,role}: {content:string; role:string}) {
  const auth = useAuth()
  return (
    <div>
       {
        role == "assistant" ? 
        <div className='flex flex-row space-x-3'>
          <div className='w-8 h-8 rounded-full border-2'>
            <img src={gpt} alt="" className='' />
           </div>
           <p className='w-72 py-1 text-base'>{content}</p>
        </div>
        :  
        <div className='flex flex-row items-center my-7 space-x-3'>
        <div className='w-8 h-8 bg-white text-black rounded-full font-extrabold flex flex-col items-center justify-center'>
           {auth?.user?.name[0]}
           {auth?.user?.name.split(" ")[1][0]}
         </div>
         <p className='w-72 py-1 bg-slate-600 px-2 text-base'>{content}</p>
      </div>
       }  
    </div>
  )
}

export default ChatsItem