'use client'
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import CardSkill from '../components/card-skills/index';
import { SKILLS_CURRENT, SKILLS_FUTURE, SKILLS_PRODUCTIVITY } from '../constants/skills-obj';

export default function Skills(){

return(
  <section id='skills' className="min-h-[100vh]  w-full dark:bg-dark-background bg-light-background p-4">
     <motion.header variants={fadeIn('up' , 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false , amount : 0.7}} className="flex justify-center flex-col items-center
     ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#FF1BF7] to-[#b249f8]  bg-clip-text animate-gradient ">Skills</h1>
        <h2 className="dark:text-dark-text text-light-text font-semibold text-2xl text-center">A seguir as tecnologias que uso:</h2>
      </motion.header>
      <div className="w-full  max-w-[80%] m-auto flex justify-center items-center flex-wrap gap-[1rem] my-10 px-4">
      {SKILLS_CURRENT.map((skill, index) => (
        <CardSkill
          key={skill.id}
          id={skill.id}
          imageSrc={skill.imageSrc}
              link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
      </div>
      <header className="flex justify-center flex-col items-center
     ">
        <h2 className="dark:text-dark-text text-light-text font-semibold text-2xl text-center">Ferramentas para produtividade:</h2>
      </header>
                        <div className="w-full flex max-w-[80%] m-auto justify-center items-center flex-wrap gap-[1rem] my-10  px-4">
       
      {SKILLS_PRODUCTIVITY.map((skill, index) => (
        <CardSkill
        key={skill.id}
        id={skill.id}
          imageSrc={skill.imageSrc}
              link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
      
      </div>

      <header className="flex justify-center flex-col items-center
     ">
          <h2 className="dark:text-dark-text text-light-text font-semibold text-2xl text-center">Planos de estudos futuros:</h2>
      </header>
      <div className="w-full max-w-[80%] m-auto flex justify-center items-center flex-wrap gap-[1rem] my-10  px-4">
      {SKILLS_FUTURE.map((skill, index) => (
        <CardSkill
        key={skill.id}
        id={skill.id}
          imageSrc={skill.imageSrc}
              link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
      
      </div>
  </section>
)
  }