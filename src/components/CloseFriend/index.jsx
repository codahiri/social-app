import './closefriend.css'

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="Sidebar friend" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend
