import Image from 'next/image'
import Sidebar from './Sidebar'
import Contacts from './Contacts'
import Chats from './Chats'
import MessageContext from './context/MessageContext'


export default function Home() {
  return (
    <MessageContext>
      <main className="
      flex w-[90%] h-[95%] rounded-lg absolute 
     top-[2.5%] bottom-[2.5%] left-[5%] right-[5%] homepage
     ">
      <Sidebar />
      <Contacts />
      <Chats/>
    </main>
    </MessageContext>
  )
}
