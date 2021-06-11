import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import "../Screens/ProfileScreen.css"

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit profile</h1>
                <div className="profileScreen_info">
                    <img
                    src="https://1.bp.blogspot.com/-4vqOLs-4Wbc/YLuaMiX2jsI/AAAAAAAAAAM/kDLfziwTx7QSofPb4VjiQR8-zspDQDiuwCNcBGAsYHQ/s320/profile_avatar.png"
                    alt=""
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            
                            <button 
                            onClick={() => auth.signOut()}
                            className="profileScreen_signOut">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileScreen
