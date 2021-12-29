import './posts.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Posts = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" alt="post pic" className="postProfileImg" />
            <span className="postUsername">Safak Kocaoglu</span>
            <span className="postDate">5 min age</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It is my first post.</span>
          <img src="/assets/post/1.jpeg" alt="Post pic" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="Like pic" className="likeIcon" />
            <img src="/assets/heart.png" alt="Like pic" className="likeIcon" />
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
