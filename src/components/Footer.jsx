import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-app-icon.svg";
import twitterIcon from "../assets/twitter-app-icon.svg";

export default function Footer(){
    return (
        <div className="footer">
            <img src={linkedinIcon} />
            <img src={twitterIcon} />
            <img src={githubIcon} />
        </div>
    )
}