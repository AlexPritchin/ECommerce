import XSocialBlackIcon from '../assets/icons/xSocialBlack.svg';
import InstagramBlackIcon from '../assets/icons/instagramBlack.svg';
import LinkedInBlackIcon from '../assets/icons/linkedinBlack.svg';
import './AboutOurTeamItem.scss';

export interface AboutOurTeamItemProps {
  imageLink: string;
  memberName: String;
  memberPosition: String;
}

export const AboutOurTeamItem: React.FC<AboutOurTeamItemProps> = ({
  imageLink,
  memberName,
  memberPosition,
}) => {
  return (
    <div className='about-our-team-item-container'>
      <img src={imageLink} />
      <h3 className='about-our-team-name'>{memberName}</h3>
      <p className='about-our-team-position'>{memberPosition}</p>
      <div className='about-our-team-social-images-container'>
        <XSocialBlackIcon />
        <InstagramBlackIcon />
        <LinkedInBlackIcon />
      </div>
    </div>
  );
};
