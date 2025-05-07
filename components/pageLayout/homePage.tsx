'use client'
import FancyButton from "./fancyBtn";
import {
    FaReact,
    // FaNodeJs,
    FaJs,
    FaGithub
} from 'react-icons/fa';
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    // SiExpress,
    // SiMongodb,
    // SiPostgresql,
    SiGraphql, SiStyledcomponents, SiRedux
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface TechnicalSkill {
    name: string;
    icon: IconType;
}

const TECHNICAL_SKILLS: TechnicalSkill[] = [
    { name: 'React', icon: FaReact },
    { name: 'React Native', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Styled Compnet', icon: SiStyledcomponents },
    { name: 'Redux', icon: SiRedux },
    // { name: 'Node.js', icon: FaNodeJs },
    // { name: 'Express.js', icon: SiExpress },
    // { name: 'MongoDB', icon: SiMongodb },
    // { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'GitHub', icon: FaGithub },
];

const Experiences = [
    { style: 'self-start', title: 'Frontend Engineer', company: 'Consonance', time: 'March 2024 - Present', p1: 'Collaborated with product and design teams to develop responsive, scalable frontend components using React, Next.js, and TypeScript for enterprise SaaS applications.', p2: 'Improved page load speeds by optimizing React components and implementing code-splitting, leading to a 25% performance boost.', p3: 'Integrated REST APIs with Axios and SWR, enhancing data fetching strategies and user interactions.' },
    { style: 'self-end', title: 'Frontend Developer', company: 'Filmmakersmart', time: 'Nov 2021 – July 2023', p1: 'Developed a web application tailored for filmmakers, providing streamlined access to essential resources like shooting locations, equipment, and transportation.', p2: 'Built and optimized landing pages and interactive dashboards using Next.js, TypeScript, Redux, Ant Design, Styled Components, REST APIs, Axios, and SWR to deliver scalable, responsive interfaces.', p3: 'Improved user experience, ensuring accessible, efficient workflows for filmmakers to discover and book critical resources.' },
    { style: 'self-start', title: 'Frontend Developer (Intern)', company: 'Consonance', time: 'April 2021 – Sept 2021', p1: 'Worked on the Integrations and Developer Tools team, improving the developer experience on the Technniover platform through enhanced UI and tooling.', p2: 'Developed frontend components for OAuth applications, Personal Tokens, and Webhooks from scratch using React, Redux, Styled Components, and Jest, contributing critical features to the platform.', p3: 'Applied industry best practices to deliver high-quality, tested code, gaining hands-on experience in a professional, collaborative development environment.' },
]                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
export const About = () => {
    return(
        <section className='w-full flex justify-center flex-col gap-10 md:gap-20 items-center p-[5%] pt-[10%] xl:px-[15%] xl:py-[10%]'>
            <p className={'text-[28px] text-center'}>Frontend Engineer specializing in React and Next.js with 3+ years of experience building performant, scalable web applications. Proven track record collaborating with product teams to deliver intuitive dashboards, landing pages, and developer tools. Passionate about improving user workflows, code quality, and frontend architecture using modern JavaScript, TypeScript, and design patterns.
            </p>
            <div className="flex items-center justify-center gap-[20px] w-full">
                <FancyButton text="Know more" variant="filled" />
                <FancyButton text="Contact" variant="outline" />
            </div>
        </section>
    )
}

export const TechnicalSkills = () => {
    return(
        <section className='w-full flex justify-center flex-col gap-[40px] items-center pt-[10%] p-[5%] xl:px-[15%] xl:py-[5%]'>
            <div className="flex items-center justify-center gap-[10px] w-full flex-col">
                <h1>Technical Skills</h1>
                <span className={'text-center'}>A comprehensive list of technologies and tools I work with</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full">
                {TECHNICAL_SKILLS.map((skill, index) => {
                    const Icon = skill.icon;
                    return(
                        <div key={index}  className="flex items-center justify-between w-full group bg-background/50 dark:bg-background/80 backdrop-blur-sm border border-foreground/30 rounded-full p-3 shadow-sm hover:border-foreground/40 transition-all duration-300 hover:bg-background/80 hover:scale-105 hover:shadow-md">
                            <span className={'text-xl'}>{skill.name}</span>
                            <Icon aria-hidden="true" className="size-5 text-foreground" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export const Experience = () => {
    return(
        <section className='w-full flex justify-center flex-col gap-[40px] items-center pt-[10%] p-[5%] xl:px-[15%] xl:py-[5%] h-full'>
            <div className="flex items-center justify-center gap-[10px] w-full flex-col">
              <h1>Professional Experience</h1>
               <span className={'text-center'}>My Journey in the Industry</span>
            </div>
           <div className="flex w-full flex-col justify-between gap-[60px]">
               {Experiences.map((skill, index) => {
                   return(
                       <div key={index}  className={`flex max-w-full w-[500px] ${skill.style} h-auto border border-[#ededed] transition-all duration-300 hover:scale-105 hover:shadow-md p-[2%] rounded-xl`}>
                          <div className={'flex  gap-[10px] w-full flex-col'}>
                              <h3>{skill.title}</h3>
                              <span>{skill.company}</span>
                               <span>{skill.time}</span>
                          </div>
                           <div>
                               <span>{skill.company}</span>
                           </div>
                       </div>
                   )
               })}
           </div>
        </section>
    )
}