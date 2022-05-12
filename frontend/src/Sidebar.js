import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div class='sidebar'>
            <div class="sidebar_header">
                <Avatar src="./logo.png"/>
                <div class="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div class="sidebar_search">
                <div class="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type="text"/>
                </div>
            </div>

            <div class="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>
    );
}
export default Sidebar
