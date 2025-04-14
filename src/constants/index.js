import {
  mobile,
  backend,
  creator,
  web,
  medium,
  telegram,
  twitterx,
  discord,
  ip,
  synthisis,
  dao,
  node,
  launch,
  hackathon,
  ecosystem,
} from "../assets";

export const navLinks = [
  {
    id: "overview",
    title: "Home",
  },
  {
    id: "roadmap",
    title: "Roadmap",
  },
  {
    id: "products",
    title: "Products"
  },
  {
    id: "nodes",
    title: "Sequencer"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Zero Gas Fees",
    icon: web,
  },
  {
    title: "Social Login",
    icon: mobile,
  },
  {
    title: "AI & RWA",
    icon: backend,
  },
  {
    title: "Modularity",
    icon: creator,
  },
];

const technologies = [
  {
    // name: "",
    icon: twitterx,
    url: "https://x.com/wylerchain"
  },
  {
    // name: "CSS 3",
    icon: discord,
    url: "https://discord.com/"
  },
  {
    // name: "JavaScript",  
    icon: medium,
    url: "https://x.com/"
  },
  {
    // name: "TypeScript",
    icon: telegram,
    url: "https://t.me/wylerchain"
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Testnet Launch",
    company_name: "Launch the WylerChain Testnet to allow developers to build and test dApps.",
    icon: launch,
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Launching public Testnet with core modules (Hyperbridge, Proof Aggregation)",
      "Engage the community with early access and testing opportunities.",
    ],
  },

  {
    title: "Community & Partnerships",
    company_name: "Drive developer engagement through hackathons and grant programs.",
    icon: hackathon,
    iconBg: "#E6DEDD",
    date: "Q2–Q3 2025",
    points: [
      "Strategic tie-ups with AI, RWA, and Gaming projects",
      "Offer developer grants to support innovative dApps and tools within the WylerChain ecosystem"
    ],
  },

  {
    title: "Sequencer Slot Sale",
    company_name: "Initiate a Node Sale to distribute validation responsibilities and enhance decentralization.",
    icon: node,
    iconBg: "#383E56",
    date: "Q3 2025",
    points: [
      "Limited sale of sequencer slots with $WYLER rewards",
      "Infrastructure and protocol upgrades for performance & security."
    ],
  },
  {
    title: "Mainnet Launch",
    company_name: "Deploy WylerChain Mainnet for full-scale application deployment.",
    icon: launch,
    iconBg: "#383E56",
    date: "Q4 2025",
    points: [
      "Full-feature WylerChain Mainnet live for users and developers",
      "Staking, governance, and bridging with Ethereum & Arbitrum"
    ],
  },
  {
    title: "Ecosystem Expansion",
    company_name: "Expand WylerChain's ecosystem by onboarding more dApps, enterprises, and partners.",
    icon: ecosystem,
    iconBg: "#E6DEDD",
    date: "2026 & Beyond",
    points: [
      "Onboarding high-impact dApps, DAOs, and enterprises",
      "Scaling infra, dev tools, and community-driven governance"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Become a Wyler Node Operator for WylerChain and Earn Network Rewards As a Wyler Node on WylerChain, you'll play a crucial role in validating transactions and securing our blockchain network. Your participation is vital for maintaining trust and security within the WylerChain ecosystem. Principal Node Operators will be rewarded with $WYLER tokens for their contributions to validating transactions and ensuring network integrity.",
    name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Wyler IPs",
    description:
      "",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: ip,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Indie Stake",
    description:
      "",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: synthisis,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Wyler Dao",
    description:
      "",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: dao,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
