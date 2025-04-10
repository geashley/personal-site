"use client"

import { useEffect } from "react"
import ExperienceCard from "../components/ExperienceCard"
import "../styles/experience.css"

// Experience data
const experiences = [
  {
    title: "Product Manager",
    company: "LaunchPath Inc",
    location: "Toronto, ON",
    dateRange: "MARCH 2025 - PRESENT",
    responsibilities: [
      "Developing an AI-driven mental health app, enhancing its product strategy and AI integration",
      "Create features such as personalized prompts, mood analytics, and guided mindfulness tools",
    ],
    color: "pink",
    imagePath: "./assets/launchpath.png",
    imageAlt: "Decorative lotus flower",
    alignment: "left" as const,
	link: "https://launchpath.ca/",
  },
  {
    title: "Engineering Lead",
    company: "TechNova",
    location: "Waterloo, ON",
    dateRange: "JANUARY 2025 - PRESENT",
    responsibilities: [
      "Leading the dev team in creating the website for the 4th iteration of Waterloo's first Women+ hackathon",
      "Create and manage tickets for the development process",
      "Coding the website with HTML, CSS, JavaScript",
    ],
    color: "purple",
    imagePath: "./assets/technova.png",
    imageAlt: "Decorative butterfly",
    alignment: "right" as const,
	link: "https://itstechnova.org/",
  },
  {
    title: "QA Analyst + Cloud Infrastructure Intern",
    company: "Propel Holdings",
    location: "Toronto, ON",
    dateRange: "JANUARY 2025 - PRESENT",
    responsibilities: [
      "Create and execute tickets for the web team using TestRail and Jira, using MySQL Workbench for loan querying",
      "Automate AWS processes with Python scripts, retrieving tags for EC2 instances, EBS volumes, and RDS instances",
    ],
    color: "blue",
    imagePath: "./assets/propel.png",
    imageAlt: "Decorative cloud",
    alignment: "left" as const,
	link: "https://www.propelholdings.com/",
  },
  {
    title: "Technical Analyst",
    company: "Ministry of Transportation Ontario",
    location: "Toronto, ON",
    dateRange: "MAY 2024 - AUGUST 2024",
    responsibilities: [
      "Created and executed tickets for the internal and external site using Azure DevOps",
      "Developed a CRUD application with Angular and SSMS",
    ],
    color: "orange",
    imagePath: "./assets/mto.png",
    imageAlt: "Decorative hot air balloon",
    alignment: "right" as const,
	link: "https://www.ontario.ca/page/ministry-transportation",
  },
  {
    title: "Teaching Assistant",
    company: "Aurorae Young AI Academy",
    location: "Seattle, Washington",
    dateRange: "MARCH 2024 - AUGUST 2024",
    responsibilities: [
      "Answered student inquiries on AI, supporting them in their projects",
      "Completed multiple courses on GenAI and LLMs for training",
    ],
    color: "yellow",
    imagePath: "./assets/aurorae.png",
    imageAlt: "Decorative stars",
    alignment: "left" as const,
	link: "https://www.auroraeyoungaiacademy.org/",
  },
]

const ExperiencePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="experience-page">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            dateRange={experience.dateRange}
            responsibilities={experience.responsibilities}
            color={experience.color}
            imagePath={experience.imagePath}
            imageAlt={experience.imageAlt}
            alignment={experience.alignment}
			link={experience.link}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperiencePage
