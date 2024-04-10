import { useState } from "react"
import "./Chat.css"

function Chat() {
    const [chatbox,setchatbox]= useState(false)
    function handleChatBox() {
        setchatbox(!chatbox)
    }
    
    return (
        <div className="chatbox">
            
           <div className="box">
           {!chatbox && (
              <div onClick={handleChatBox} className="chat">
                 <i id="icon"  class="fa-solid fa-message" ></i><span>chat</span>
              </div>
        )}
                
            
            {chatbox && (
            <div className="chatboxshow">
                <img src="https://www.catify.co/cdn/shop/files/Catify_logo_purple_140x@2x.png?v=1613690576" alt="" className="imglogo" />
                <h3>HOW CAN WE HELP YOU</h3>
                <input type="text" placeholder="write your message here" /><i id="send" class="fa-regular fa-paper-plane"></i>
                {/* <button className="btn">Send</button> */}
                <i onClick={handleChatBox} id="xmarkicon" class="fa-solid fa-xmark"></i>
               
            </div>
                 
        )}
              
           </div>
       
        </div>
    )

}

export default Chat




