import './Header.scss';
import {motion} from 'framer-motion';
import {images} from '../../constants'
import { AppWrap } from '../../wrapper';
const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0,1],
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>
            👋
            </span>
            <div className=" ml-5">
              <p className='p-text'>Hello I am</p>
              <h1 className='head-text'>Yash</h1>

            </div>
          </div>
           <div className="tag-cmp app__flex">
           <p className='p-text'>Software Developer</p>
           <p className='p-text'>Tech Enthusiast</p>
           </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'      
      >
        <img src={images.profile} alt='profile_bg'/>
        <motion.img
        whileInView={{ scale: [0, 1]}}
        transition={{duration: 1, ease: 'easeInOut'}}
        className='overlay_circle'
        src={images.circle}
        alt='profile_circle'     
        />

      </motion.div>


      <motion.div 
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))  }
      </motion.div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(Header, 'home');
