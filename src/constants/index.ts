import { Cloud, Code, Database, Globe, Layout, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "UI/UX Development",
    description:
      "Creating beautiful and intuitive user interfaces with modern design principles. Specializing in responsive layouts and engaging user experiences that drive conversion.",
    size: "large",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building responsive and dynamic web applications using cutting-edge technologies.",
    size: "small",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications for iOS and Android. Creating seamless experiences across all devices.",
    size: "medium",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Implementing scalable cloud infrastructure and serverless applications. Expertise in AWS and Google Cloud Platform.",
    size: "medium",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Designing efficient and scalable database solutions. Optimizing performance and ensuring data integrity.",
    size: "small",
  },
  {
    icon: Code,
    title: "API Development",
    description:
      "Creating robust and secure APIs for seamless integration. RESTful and GraphQL expertise with comprehensive documentation.",
    size: "large",
  },
];

const projects = [
  {
    id: 1,
    name: "Restly",
    image:
      "https://github.com/donymvarkey/restly/blob/main/images/Screenshot%202025-01-23%20at%2011.05.43%E2%80%AFAM.png?raw=true",
    description:
      "A RESTful API client that simplifies the process of testing and debugging APIs built with React, Tailwind CSS, ShadcnUI, Typescript, Redux toolkit and Electron.",
    url: [
      {
        name: "GitHub",
        href: "https://github.com/donymvarkey/restly",
      },
    ],
  },
  {
    id: 2,
    name: "create-mexn-app",
    image:
      "https://raw.githubusercontent.com/donymvarkey/create-mexn-app/main/images/img1.png",
    description:
      "A CLI tool to scaffold a Mongo-Express-Node app from scratch without the hassle of setting up the project structure. Included logger support, swagger support and more.",
    url: [
      {
        name: "GitHub",
        href: "https://github.com/donymvarkey/create-mexn-app",
      },
      {
        name: "NPM",
        href: "https://www.npmjs.com/package/create-mexn-app",
      },
    ],
  },
  {
    id: 3,
    name: "Pokedex",
    image:
      "https://github.com/donymvarkey/PokedexRN/blob/rn-upgrade/images/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-01-23%20at%2012.08.12.png?raw=true",
    description:
      "A pokedex app built with React Native, Typescript, React Navigation and axios",
    url: [
      {
        name: "GitHub",
        href: "https://github.com/donymvarkey/PokedexRN.git",
      },
    ],
  },
];

export { services, projects };
