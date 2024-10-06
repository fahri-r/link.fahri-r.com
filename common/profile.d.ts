import EducationProps from "./education";
import ExperienceProps from "./work";
import SkillProps from "./skill";
import SocialProps from "./social";
import LinkProps from "./link";

type ProfileProps = {
  name: string;
  initials: string;
  job: string;
  imgUrl: string;
  email: string;
  socials: SocialProps[];
  links: LinkProps[];
};

export default ProfileProps;
