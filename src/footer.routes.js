// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import labLogo from "assets/lab-images/lab_logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "CNU ImageLab",
    image: labLogo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "info",
      items: [
        { name: "professor", href: "https://www.creative-tim.com/presentation" },
        { name: "Lab", href: "https://www.creative-tim.com/templates/free" },
        { name: "Way to Come", href: "https://www.creative-tim.com/templates/premium" },
      ],
    },
    {
      name: "research",
      items: [
        { name: "사람과 사물 인식", href: "https://iradesign.io/" },
        { name: "사람과 사물 추적", href: "https://www.creative-tim.com/bits" },
        { name: "실감형 콘텐츠", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "publication",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "Member",
      items: [
        { name: "Undergraduate", href: "https://www.creative-tim.com/terms" },
        { name: "Master", href: "https://www.creative-tim.com/privacy" },
        { name: "Ph. D", href: "https://www.creative-tim.com/license" },
        { name: "Graduated", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
