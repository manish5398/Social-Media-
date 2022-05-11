import './Topbar.css'
import { Search, Person, Chat, Notifications} from '@material-ui/icons'
export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">Yanlack Social</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input placeholder='Search for friend, post or videos' type="text" className="searchinput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                  <span className="topbarLinkItem">HomePage</span>
                  <span className="topbarLinkItem">Timeline</span>

            </div>
        <div className="topbarIcons">
            <div className="topbarIconsItem">
                <Person />
                <span className="topbarIconsBadge">1</span>
            </div>
            <div className="topbarIconsItem">
                <Chat />
                <span className="topbarIconsBadge">2</span>
            </div>
            <div className="topbarIconsItem">
                <Notifications />
                <span className="topbarIconsBadge">3</span>
            </div>
        </div>
        <img src="./assets/person/1.jpeg" alt="" className="topbarImg" />
          </div>
    </div>
  )
}
