import React from "react";

type Props = {};

const Skills = (props: Props) => {
  const skillSet = ["Html", "CSS", "javascript", "NextJS"];

  const skillSet1 = ["API", "MongoDB", "Node", "Express"];

  const skillSet2 = ["tailwind", "Git", "github", "ReactJS"];

  return (
    <div className="space-y-10" id="skills">
      <div className="flex justify-center mt-10">
        <h3 className="font-bold text-[16px] leading-[17.92px] uppercase">
          Core skills
        </h3>
      </div>
      <div className="flex justify-center items-center gap-3 transform transition duration-1000 hover:scale-125">
        {skillSet.map((skill) => (
          <div key={skill} className="flex gap-2  uppercase">
            {skill} {""}
            <div className="flex gap-2 ">
              <span className=" text-[#F7AB0A] uppercase ">/</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 transform transition duration-1000 hover:scale-125">
        {skillSet1.map((skill) => (
          <div key={skill} className="flex gap-2  uppercase">
            {skill} {""}
            <div className="flex gap-2 ">
              <span className=" text-[#F7AB0A] uppercase ">/</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 transform transition duration-1000 hover:scale-125">
        {skillSet2.map((skill) => (
          <div key={skill} className="flex gap-2  uppercase">
            {skill} {""}
            <div className="flex gap-2 ">
              <span className=" text-[#F7AB0A] uppercase ">/</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
