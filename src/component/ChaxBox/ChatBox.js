import { Avatar } from '@mui/material';
import { deepPurple, lightBlue } from '@mui/material/colors';
import './ChatBox.css';



const ChatBox = (prop) => {

    const messages = [
        {
            img: "/w3images/bandmember.jpg",
            message: "Hello. How are you today?",
            time: "11:00",
        },
        {
            img: "/w3images/avatar_g2.jpg",
            message: "Hey! I'm fine. Thanks for asking!",
            time: "11:02"
        },
        {
            img: "/w3images/bandmember.jpg",
            message: "Sweet! So, what do you wanna do today?",
            time: "11:05"
        },
        {
            img: "/w3images/avatar_g2.jpg",
            message: "Nah, I dunno. Play soccer.. or learn more coding perhaps?",
            time: "11:11"
        },
    ]

    return(
        <div className='ChatBox'>
         <h2>Chat Messages</h2>
         <div >
            {
                messages.map((message, index) => {
                    if(index % 2 === 0){
                      return (
                        <div className="container" key={index}>
                            <Avatar className="left"  sx={{ bgcolor: lightBlue[500] }}>XL</Avatar>
                            <p>{message.message}</p>
                            <span className="time-right">{message.time}</span>
                        </div>
                      )
                    }else {
                      return (
                        <div className="container darker" key={index}>
                             <Avatar className="right"  sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                            <p>{message.message}</p>
                            <span className="time-left">{message.time}</span>
                        </div>
                       )
                    }
                })
            }
         </div>
        </div>
    )
}

export default ChatBox;