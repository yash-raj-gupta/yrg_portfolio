import {NavigationDots, SocialMedia} from '../components';
const AppWrap = (Component, idName, classNames) => function HOC() {
  {console.log(idName)}
  return (

    <section  id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>
       <div className='app__wrapper app__flex'>
        <Component/>
        <div className='copyright'>
          <p className='p-text'>@2024 Yrg</p>
          <p className='p-text'>All rights reserved</p>
        </div>
       </div>
       <NavigationDots active={idName}/>
    </section>
  )
}

export default AppWrap
