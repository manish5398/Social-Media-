import './post.css';
import {MoreVert} from '@material-ui/icons';
import { Users } from '../../dummyData';
import { useState } from "react";

export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postprofileImg' src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postusername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>            
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>            
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" onClick={likeHandler} alt="" className="likeIcon"   />
                        <img src="assets/heart.png" onClick={likeHandler} alt="" className="likeIcon" />
                        <span className="postlikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postcommentText">{post.comment} comments</div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
