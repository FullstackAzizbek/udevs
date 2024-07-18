import React, { createContext } from "react";
import { useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(0);
  const [portfolioDropDown, SetPortfolioDropDown] = useState(false);
  const [servicesDropDown, SetServicesDropDown] = useState(false);
  const [languageDropDown, SetLanguageDropDown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [tools, setTools] = useState("");

  const tools_elements = [
    {
      id: 1,
      title: "Promotheus",
      img: "/promothes.png",
      type: "devops",
    },
    {
      id: 2,
      title: "Loki",
      img: "/loki_logo.png",
      type: "devops",
    },
    {
      id: 3,
      title: "Bitbucket",
      img: "bitbucket",
      type: "devops",
    },
    {
      id: 4,
      title: "Gitlab",
      img: "gitlab.png",
      type: "devops",
    },
    {
      id: 5,
      title: "Kotlin",
      img: "kotlin.png",
      type: "mobile",
    },
    {
      id: 6,
      title: "Android",
      img: "android.png",
      type: "mobile",
    },
    {
      id: 7,
      title: "Java",
      img: "java.png",
      type: "mobile",
    },
    {
      id: 8,
      title: "Azure",
      img: "azure.png",
      type: "infra",
    },
    {
      id: 9,
      title: "GCP",
      img: "googlecloud.png",
      type: "infra",
    },
    {
      id: 10,
      title: "DigitalOcean",
      img: "digitalocean.png",
      type: "infra",
    },
    {
      id: 11,
      title: "AWS",
      img: "aws.png",
      type: "infra",
    },
    {
      id: 12,
      title: "Kubernetes",
      img: "kubernetes.png",
      type: "infra",
    },
    {
      id: 13,
      title: "ELK",
      img: "elk.png",
      type: "devops",
    },
    {
      id: 14,
      title: "Grafana",
      img: "girafana.png",
      type: "devops",
    },
    {
      id: 15,
      title: "Terraform",
      img: "terraform.png",
      type: "devops",
    },
    {
      id: 16,
      title: "IOS",
      img: "ios.png",
      type: "mobile",
    },
    {
      id: 17,
      title: "Swift",
      img: "swift_logo.png",
      type: "mobile",
    },
    {
      id: 18,
      title: "Flutter",
      img: "flutter.png",
      type: "mobile",
    },
    {
      id: 19,
      title: "Next JS",
      img: "nextjs.png",
      type: "frontend",
    },
    {
      id: 20,
      title: "React JS",
      img: "reactjs.png",
      type: "frontend",
    },
    {
      id: 21,
      title: "Javascript",
      img: "javascript.png",
      type: "frontend",
    },
    {
      id: 22,
      title: "Balsamic",
      img: "balsamic.png",
      type: "ui",
    },
    {
      id: 23,
      title: "Invision",
      img: "invision.png",
      type: "ui",
    },
    {
      id: 24,
      title: "Figma",
      img: "figma.png",
      type: "ui",
    },
    {
      id: 25,
      title: "Docker",
      img: "docker.png",
      type: "devops",
    },
    {
      id: 26,
      title: "PostgreSQL",
      img: "postgresql.png",
      type: "backend",
    },
    {
      id: 27,
      title: "Python",
      img: "python.png",
      type: "backend",
    },
    {
      id: 28,
      title: "NodeJS",
      img: "nodejs.png",
      type: "backend",
    },
    {
      id: 29,
      title: "PHP",
      img: "php.png",
      type: "backend",
    },
    {
      id: 30,
      title: "GO",
      img: "go.png",
      type: "backend",
    },
    {
      id: 31,
      title: "Ant Design",
      img: "antdesign.png",
      type: "frontend",
    },
    {
      id: 32,
      title: "Gatsby JS",
      img: "gatsby.png",
      type: "frontend",
    },
    {
      id: 33,
      title: "Vue JS",
      img: "vuejs.png",
      type: "frontend",
    },
    {
      id: 34,
      title: "Principle",
      img: "principle.png",
      type: "ui",
    },
    {
      id: 35,
      title: "Sketch",
      img: "sketch_logo.png",
      type: "ui",
    },
    {
      id: 36,
      title: "Adobe Suite",
      img: "photoshop_logo.png",
      type: "ui",
    },
    {
      id: 37,
      title: "YouTrack",
      img: "youtrack.png",
      type: "testing",
    },
    {
      id: 38,
      title: "Appium",
      img: "appium.png",
      type: "testing",
    },
    {
      id: 39,
      title: "Cypress",
      img: "cypress.png",
      type: "testing",
    },
    {
      id: 40,
      title: "Jmeter",
      img: "jmeter.png",
      type: "testing",
    },
    {
      id: 41,
      title: "MongoDB",
      img: "mongodb.png",
      type: "backend",
    },
    {
      id: 42,
      title: "Cassandra",
      img: "casandra.png",
      type: "backend",
    },
    {
      id: 43,
      title: "Sass",
      img: "sass.png",
      type: "frontend",
    },
    {
      id: 44,
      title: "Material UI",
      img: "material_ui.png",
      type: "frontend",
    },
    {
      id: 45,
      title: "Zeplin",
      img: "zeplin.png",
      type: "ui",
    },
    {
      id: 46,
      title: "Illustrator",
      img: "illustrator.png",
      type: "ui",
    },
    {
      id: 47,
      title: "Lottie",
      img: "lottie_logo.png",
      type: "ui",
    },
    {
      id: 48,
      title: "Photoshop",
      img: "photoshop.png",
      type: "ui",
    },
  ];

  const [count, setCount] = useState(0);
  const handleClicker = (num) => {
    setIsActive(num);
  };

  const portfolio_menu_activer = (value) => {
    SetPortfolioDropDown(value);
    SetServicesDropDown(false);
    SetLanguageDropDown(false);
  };

  const services_menu_activer = (value) => {
    SetServicesDropDown(value);
    SetPortfolioDropDown(false);
    SetLanguageDropDown(false);
  };

  const language_menu_activer = (value) => {
    SetLanguageDropDown(value);
    SetServicesDropDown(false);
    SetPortfolioDropDown(false);
  };

  const navbar_activer = (value) => {
    setNavbar(value);
  };
  const targetCount = 100;
  const animationDuration = 3000;
  const increment = Math.ceil(targetCount / (animationDuration / 100));
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        return nextCount >= targetCount ? targetCount : nextCount;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [targetCount, increment]);

  function colorchanger(value) {
    setTools(value);
  }
  return (
    <DataContext.Provider
      value={{
        isActive,
        portfolioDropDown,
        servicesDropDown,
        languageDropDown,
        count,
        tools_elements,
        tools,
        navbar,
        handleClicker,
        portfolio_menu_activer,
        services_menu_activer,
        language_menu_activer,
        colorchanger,
        navbar_activer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
