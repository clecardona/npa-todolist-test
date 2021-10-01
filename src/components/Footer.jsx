import IconSocial from "./shared/IconSocial";
import icons from "../assets/icons.json";
import contact from "../assets/contact.json";

export default function Footer() {
  const { linkedIn, github } = icons[0];
  const { linkedInURL, githubURL, fullname } = contact[0];
  return (
    <footer>
      <ul>
        <IconSocial icon={linkedIn} link={linkedInURL} />
        <IconSocial icon={github} link={githubURL} />
      </ul>
      <span>© 2021 • {fullname}</span>
    </footer>
  );
}
