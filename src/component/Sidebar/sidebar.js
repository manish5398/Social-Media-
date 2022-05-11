import './sidebar.css'
import { Sidebaritems } from '../../dummyData'
import { Ad } from '../../dummyData'
export default function Sidebar() {
  
  const listItems = Sidebaritems.map((s) =>
    <li className="sidebarlistitem">
      <s.iconname className='sidebarIcon' />
      <span className="sidebarlistitemText">{s.Itemname}</span>
    </li>
  );
  const Aditems = Ad.map((a) =>
    <li className="sidebarfriend">
      <img src={a.profilePic} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{a.username}</span>
    </li>
  );
  
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarlist">  
            {listItems}
        </ul>
        <button className="sidebarbtn">Show More</button>
        <hr className='sidebarhr' />
        <ul className="sidebarfriendList">
          {Aditems}
        </ul>
      </div>
      </div>
  )
}
