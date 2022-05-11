import './home.css'
import Topbar from '../../component/Topbar/Topbar.js'
import Rightbar from '../../component//rightbar/rightbar'
import Feed from '../../component/feed/feed.js'
import Sidebar from '../../component/Sidebar/sidebar.js'

export default function Home() {
  return (
    <>
    < Topbar/>
    <div className="homeContainer">
        <Sidebar />
        <Feed />
      < Rightbar />
    </div>
    </>
  )
}
