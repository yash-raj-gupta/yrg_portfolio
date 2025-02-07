import './Testimonials.scss';
import {motion} from 'framer-motion';
import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import {useState, useEffect} from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query)
         .then((data) => {
            setTestimonials(data);
         })
    client.fetch(brandsQuery)
         .then((data) => {
            setBrands(data);
         })

  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }


  const test = testimonials[currentIndex];

  return (
    <>
    {testimonials.length && (
      <>
      <div className="app__testimonial-item app__flex">
        <img src={urlFor(test.imageurl)} alt='testimonial'/>
        <div className="app__testimonials-content">
          <p className='p-text'>{test.feedback}</p>
          <div className="">
            <h4 className='bold-text'>{test.name}</h4>
            <h5 className='p-text'>{test.company}</h5>
          </div>
        </div>
      </div>
      <div className="app__testimonials-btns app__flex">
        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length-1 : currentIndex -1)}>
          <HiChevronLeft/>
        </div>
        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex +1)}>
          <HiChevronRight/>
        </div>

      </div>
      </>
    )}

    <div className="app__testimonials-brands app__flex">
      {brands.map((brand) => (
        <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, type: 'tween'}}
        key={brand._id}
        >
          <img src={urlFor(brand.imgUrl)} alt={brand.name}/>

        </motion.div>
      ))}
    </div>
      
    </>
  )
}


export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),'testimonials', 'app__primarybg');