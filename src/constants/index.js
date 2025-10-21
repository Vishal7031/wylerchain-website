import {
  mobile,
  backend,
  creator,
  web,
  medium,
  twitterx,
  discord,
  ip,
  instagram,
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
    icon: instagram,
    url: "https://www.instagram.com/wylerchain/"
  },
  {
    // name: "JavaScript",  
    icon: medium,
    url: "https://medium.com/@wylerchain"
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
    title: "Phase 1: Foundation & Research",
    company_name: "Establish the groundwork for WylerChain's Layer 3 infrastructure.",
    icon: launch,
    iconBg: "#383E56",
    date: "Q1–Q2 2025",
    points: [
      "Define WylerChain's mission, vision, and long-term ecosystem goals.",
      "Finalize integration with Arbitrum Orbit as the base L2.",
      "Design zero gas fee transaction model using relayers and account abstraction.",
      "Begin R&D for social login integration and gasless wallet architecture.",
      "Start smart contract development for L3 modules.",
      "Build partnerships with key infrastructure providers (RPC, indexers, oracles).",
      "Form the core technical and business development teams."
    ],
  },

  {
    title: "Phase 2: Core Development, Testnet & Token Launch",
    company_name: "Develop, test, and deploy the WylerChain testnet and ecosystem token.",
    icon: hackathon,
    iconBg: "#E6DEDD",
    date: "Q3–Q4 2025",
    points: [
      "Begin WylerChain Testnet Development on Arbitrum Orbit.",
      "Integrate Account Abstraction (ERC-4337) for gasless transactions.",
      "Implement social login system (Google, Discord, Telegram).",
      "Deploy initial dApps — WylerSwap, WylerBridge, and WylerID on testnet.",
      "Conduct internal testing and security audits for protocol stability.",
      "Launch $WYLER Token on the Arbitrum chain.",
      "List $WYLER on tier-2 and tier-1 exchanges to boost liquidity and exposure.",
      "Begin community expansion and marketing campaigns across Asia, Europe & MENA.",
      "Partner with early ecosystem projects (GameFi, SocialFi, DeFi)."
    ],
  },

  {
    title: "Phase 3: Mainnet Launch & Ecosystem Expansion",
    company_name: "Publicly launch WylerChain and expand its ecosystem.",
    icon: node,
    iconBg: "#383E56",
    date: "Q1–Q2 2026",
    points: [
      "WylerChain Mainnet Launch on Arbitrum L2.",
      "Integrate WylerBridge for seamless Arbitrum–WylerChain transfers.",
      "Launch Wyler Developer Grant Program for early builders.",
      "Release WylerScan (block explorer) and Wyler Dashboard for ecosystem insights.",
      "Form strategic partnerships with Web3 startups, DeFi protocols, and GameFi platforms.",
      "Onboard the first 20+ dApps into the WylerChain ecosystem."
    ],
  },
  {
    title: "Phase 4: Growth, Governance & Ecosystem Scaling",
    company_name: "Transform WylerChain into a decentralized, scalable Layer 3 hub.",
    icon: launch,
    iconBg: "#383E56",
    date: "Q3–Q4 2026",
    points: [
      "Launch Wyler DAO for decentralized governance and ecosystem funding.",
      "Release WylerPay API — enabling gasless Web3 payments for dApps.",
      "Deploy Wyler Mobile SDK for social login + wallet integration.",
      "Expand WylerChain presence across Asia, Europe, and Latin America.",
      "Host Wyler Hackathon Series to attract global developer participation.",
      "Reach 1M+ on-chain transactions and 100+ deployed dApps."
    ],
  },
  {
    title: "Long-Term Vision",
    company_name: "Establish WylerChain as the default Layer 3 for mass Web2 → Web3 onboarding.",
    icon: ecosystem,
    iconBg: "#E6DEDD",
    date: "2027 & Beyond",
    points: [
      "Establish WylerChain as the default Layer 3 for mass Web2 → Web3 onboarding.",
      "Support multi-chain interoperability (zkSync, Base, Optimism integrations).",
      "Expand into a modular gasless L3 ecosystem network with multiple subnets."
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
