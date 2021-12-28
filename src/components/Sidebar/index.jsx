import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <SlowMotionVideoIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon' />
            <span className="sidebarlistitemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="Sidebar friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jhon Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
