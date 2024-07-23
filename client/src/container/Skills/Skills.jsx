import './Skills.scss';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
   
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query)
         .then((data) => {
          console.log(data[0].works)
            setExperiences(data);
         })
    client.fetch(skillsQuery)
         .then((data) => {
            setSkills(data);
         })

  }, []);


  
  return (
    <div>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
        {skills.map((skill) => (

          <motion.div
          whileInView={{opacity: [0,1]}}
          transition={{duration: 0.5}}
          className='app__skills-item app__flex'
          key={skill.name}
          >

            <div className="app__flex " style={{backgroundColor: skill.bgColor}}>
              <img src={urlFor(skill.icon)} alt={skill.name}/>
            </div>
           <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}

        </motion.div>

        <motion.div
        className='app__skills-exp'
        >
          {console.log(experiences)}
          {experiences?.map((experience) => (
            <motion.div
            className='app__skills-exp-item'
            key={experience.year}
            >
            <div className="app__skills-exp-year">
              <p className='bold-text'>{experience.year}</p>
            </div>

            <motion.div
            className='app__skills-exp-works'
            >
              {experience?.works?.map((work) => (
                 <>
            <motion.div
            whileInView={{opacity: [0,1]}}
          transition={{duration: 0.5}}
          className='app__skills-exp-work'
          data-tooltip-id={work.name}
          data-tooltip-content={work.desc}
          data-tooltip-place='top'
          key={work.name}
            >
          <h4 className='bold-text'>{work.name}</h4>
          <p className='p-text'>{work.company}</p>
            </motion.div>
            <ReactTooltip
            id={work.name}
            effect='solid'
            arrowColor='#fff'
            className='skills-tooltip'
            />

            </>
              ))}

            </motion.div>

            </motion.div>
          
          ))}

        </motion.div>
      </div>
    </div>
  )
}


export default AppWrap(
  MotionWrap(Skills, 'app__skills'),'skills', 'app__whitebg');