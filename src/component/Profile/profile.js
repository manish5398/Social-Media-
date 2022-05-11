import './profile.css';
import Topbar from '../../component/Topbar/Topbar.js'
import Rightbar from '../../component//rightbar/rightbar'
import Feed from '../../component/feed/feed.js'
import Sidebar from '../../component/Sidebar/sidebar.js'

export default function Profile() {
    return (
        <>
            < Topbar />
            <div className="Profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className="ProfileCoverImg" />
                            <img src="assets/person/7.jpeg" alt="" className="ProfileUserImg" />
                        </div>
                        <div className="ProfileInfo">
                            <h4 className="ProfileInfoName">Safak Kocaoglu</h4>
                            <span className="ProfileInfoDesc">Hello My Friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        < Rightbar Profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
