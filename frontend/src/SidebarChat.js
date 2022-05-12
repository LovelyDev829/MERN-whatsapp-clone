import { Avatar } from '@mui/material';
import React from 'react'
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div class = "sidebarChat">
            <Avatar/>
            <div class="sidebarChat_info">
                <h2>Room name</h2>
                <p>This is the last message.</p>
            </div>
        </div>
    )
}

export default SidebarChat
