import { AboutOurTeamItem, AboutOurTeamItemProps } from './AboutOurTeamItem';
import teamMember1 from '../assets/images/TeamMember1.png';
import teamMember2 from '../assets/images/TeamMember2.png';
import teamMember3 from '../assets/images/TeamMember3.png';
import './AboutOurTeam.scss';

const aboutOurTeamItemsData: AboutOurTeamItemProps[] = [
  {
    imageLink: teamMember1,
    memberName: 'Tom Cruise',
    memberPosition: `Founder & Chairman`,
  },
  {
    imageLink: teamMember2,
    memberName: 'Emma Watson',
    memberPosition: 'Managing Director',
  },
  {
    imageLink: teamMember3,
    memberName: 'Will Smith',
    memberPosition: 'Product Designer',
  },
];

export const AboutOurTeam = () => {
  return (
    <div className='about-our-team'>
      {aboutOurTeamItemsData.map(item => (
        <AboutOurTeamItem
          imageLink={item.imageLink}
          memberName={item.memberName}
          memberPosition={item.memberPosition}
        />
      ))}
    </div>
  );
};
