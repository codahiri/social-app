import Posts from '../Posts'
import Share from '../Share'
import './feed.css'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  )
}

export default Feed
