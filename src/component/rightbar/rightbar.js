import './rightbar.css'
import { Ad } from '../../dummyData'

console.log(Ad);
export default function Rightbar({ profile }) {
  const listItems = Ad.map((a) =>
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={a.profilePic} alt="" className="rightbarprofileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarusername">{a.username}</span>
    </li>
  );

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer" >
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other Friends</b> have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {listItems}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <h1>
        <>
          <h4 className="rightbarTitle">
            User Information
          </h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfokey">City:</span>
              <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfokey">From:</span>
              <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfokey">Realitonship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle">
            User Friends
          </h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
          </div>
        </>
      </h1>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {profile ? < ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
