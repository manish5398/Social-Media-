import Share1 from '../share/share.js'
import Post from '../post/post.js'
import './feed.css'
import {Posts} from '../../dummyData'

export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedwrapper">
            <Share1 />  
             {Posts.map((p)=>(
                 <Post key={p.id} post={p}/>
             ))}
            </div>
        </div>
    )
}
 