import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import './About.scss'
const About = () => {

  const abouts = [
    {   title: "Web Development",
    description: "I am a web developer with a passion for creating beautiful and functional websites. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, and React. I am always looking to learn new skills and improve my craft, and I am excited to work on new projects and challenges.",
    imgUrl: ''
     },
    {   title: "Web Development",
    description: "I am a web developer with a passion for creating beautiful and functional websites. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, and React. I am always looking to learn new skills and improve my craft, and I am excited to work on new projects and challenges.",
    imgUrl: ''
     },
    {   title: "Web Development",
    description: "I am a web developer with a passion for creating beautiful and functional websites. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, and React. I am always looking to learn new skills and improve my craft, and I am excited to work on new projects and challenges.",
    imgUrl: ''
     },
    {   title: "Web Development",
    description: "I am a web developer with a passion for creating beautiful and functional websites. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, and React. I am always looking to learn new skills and improve my craft, and I am excited to work on new projects and challenges.",
    imgUrl: ''
     },
  ]
  return (
    <>
     <h2 className='head-text'>I know that
      <span>Good Design</span>
      <br/>
      and 
      <span>Good Development</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div 
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
          key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>

          </motion.div>
        ))}
        </div> 
    </>
  )
}

export default About
