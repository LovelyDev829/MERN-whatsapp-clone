import { AttachFile, SearchOutlined} from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import "./Chat.css";

function Chat() {
    return (
        <div class="chat">
            <div class="chat_header">
                <Avatar/>

                <div class="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div class="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div class="chat_body">
                <p class="chat_message">
                    <span class="chat_name">Sonny</span>
                    Hello, How are you, today?
                    <span class="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p class="chat_message chat_reciever">
                    <span class="chat_name chat_name_reciever">Jimmy</span>
                    Fine, thank you, and you?
                    <span class="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p class="chat_message">
                    <span class="chat_name">Sonny</span>
                    Pretty good, thanks.
                    <span class="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div class="chat_footer">
                <MoodIcon />
                <form>
                    <input
                        placeholder='type a message'
                        type="text"
                    />
                    <button type='submit'>
                        Send a message.
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
