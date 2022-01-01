import React from 'react';
import './posts.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dumpyData';

const Post = ({ post }) => {

  const [like, setLike] = React.useState(post.like)
  const [dislike, setDislike] = React.useState(false)

  const likeHandler = () => {
    setLike(dislike ? like - 1 : like + 1)
    setDislike(!dislike)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="post pic" className="postProfileImg" />
            <span className="postUsername">
              {Users.filter(u => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="Post pic" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="Like pic" onClick={likeHandler} className="likeIcon" />
            <img src="/assets/heart.png" alt="Like pic" onClick={likeHandler} className="likeIcon" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
