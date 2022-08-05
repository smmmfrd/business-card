import blankProfilePic from "../assets/blank-profile-picture.webp";
import mailIcon from "../assets/mail-icon.svg";

export default function Details(){
    return (
        <div className="details">
            <img src={blankProfilePic} width="100%"/>
            <h1>Sam Mumford</h1>
            <p>Frontend Developer</p>
            <p className="detail--website"><small>smmmfrd.website</small></p>
            <p><button className="email-btn"><img src={mailIcon} width="20px"/> Email</button></p>
        </div>
    )
}