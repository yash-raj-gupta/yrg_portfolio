import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className="">
        <BsInstagram/>
      </div>
      <div className="">
        <BsLinkedin />
      </div>
      <div className="">
        <FaFacebookF/>
      </div>
    </div>
  )
}

export default SocialMedia
