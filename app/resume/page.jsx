"use client";

import {
  FaFigma,
} from "react-icons/fa";

import { SiGoogleads, SiMeta, SiInstagram, SiGoogleanalytics } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { MdMenuBook, MdMarkEmailRead } from "react-icons/md";

// about data
const about = {
  title: "About me",
  description:
    "I&apos;m Jatin Kashyap, a seasoned digital marketing professional with over 5 years of experience in SEO, performance marketing, and content strategy. I specialize in driving growth through data-driven campaigns and creative solutions. Fluent in English and Hindi, I connect with diverse audiences and deliver impactful results. As an Indian national, I’m available for freelance opportunities globally. Reach me at marketingwithkashyap@gmail.com to discuss your next project.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jatin Kashyap",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7733001147",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Jatin Kashyap",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "marketingwithkashyap@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I am an experienced digital marketer with expertise in managing high-budget ad campaigns, content creation, and SEO strategy. I’ve successfully spent $500K+ on Google and Meta Ads, achieving an average ROAS of 3.2. With over 100 blogs delivered, I specialize in crafting SEO-optimized content that drives organic traffic. I’ve provided 20+ SEO consultations, helping businesses improve search rankings and visibility. My skill set also includes email marketing, social media strategy, local SEO, mobile app promotion, and lead generation. I excel at data-driven strategies, delivering measurable results, and helping brands achieve sustainable growth in competitive digital landscapes.",
  items: [
    {
      company: "Vedic Meet - SaaS Platform",
      position: "Performance Marketing Manager",
      duration: "2025 - Present",
    },
    {
      company: "Octaloop - Marketing Agency",
      position: "Peformance Marketing Associate",
      duration: "July 2024 - March 2025",
    },
    {
      company: "Occult Science Institute - EduTech",
      position: "Peformance Marketing Google Ads Freelancer",
      duration: "2024 - Present",
    },
    {
      company: "Vitto Money",
      position: "Marketing Specialist",
      duration: "3 Months",
    },
    {
      company: "Astrovaidya",
      position: "Google Ads Expert",
      duration: "6 Months",
    },
    {
      company: "100+ Business Profile",
      position: "Local SEO",
      duration: "2020 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I bring a strong foundation in Marketing and Data Analytics, earned through my MBA from Nirma University, and technical expertise in Computer Science Engineering. My specialization includes SEO and Content Marketing, backed by certifications from the University of California, Davis, covering advanced SEO techniques and strategic content creation. I am certified in Google Ads Search and have honed Data Analytics & Presentation Skills through PwC. Additionally, I possess expertise in UI/UX Designing from Zero to Mastery Academy and have achieved a Lean Six Sigma Green Belt from KPMG, enabling me to approach problems with precision and efficiency.",
  items: [
    {
      institution: "Institute of Management, Nirma University",
      degree: "MBA in Marketing & Data Analytics",
      duration: "2025 Graduated",
    },
    {
      institution: "Institute of Technology, Nirma University",
      degree: "Computer Science Engineering",
      duration: "2023 Graduated",
    },
    {
      institution: "University of California, Davis",
      degree: "Professional SEO Certification",
      duration: "6 Months",
    },
    {
      institution: "University of California, Davis",
      degree: "The Strategy of Content Marketing",
      duration: "3 Months",
    },
    {
      institution: "Google",
      degree: "Google Ads Search Certification",
      duration: "6 Months",
    },
    {
      institution: "PWC",
      degree: "Data Analytics & Presentation Skills",
      duration: "6 Months",
    },
    {
      institution: "Zero to Mastery Academy",
      degree: "UI UX Designing",
      duration: "3 Months",
    },
    {
      institution: "KPMG",
      degree: "Lean Six Sigma",
      duration: "32 Classroom Hours",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I excel in SEO, optimizing websites for higher search engine rankings and organic traffic. With proficiency in Google Ads and Meta Ads, I create performance-driven campaigns to maximize ROI. My expertise in Social Media Marketing helps brands build engagement and grow their audience. I specialize in Content Marketing, delivering impactful strategies for audience retention and SEO growth. I’m adept at leveraging Google Analytics for data-driven insights and performance tracking. Additionally, I have hands-on experience with Figma for UI/UX design, ensuring user-friendly interfaces and seamless brand experiences.",
  skillList: [
    {
      icon: <TbSeo />,
      name: "SEO",
    },
    {
      icon: <SiGoogleads />,
      name: "Google Ads",
    },
    {
      icon: <SiMeta />,
      name: "Meta Ads",
    },
    {
      icon: <SiInstagram />,
      name: "Social Media Marketing",
    },
    {
      icon: <MdMenuBook />,
      name: "Content Marketing",
    },
    {
      icon: <SiGoogleanalytics />,
      name: "Google Analytics",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <MdMarkEmailRead />,
      name: "Email Marketing",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;