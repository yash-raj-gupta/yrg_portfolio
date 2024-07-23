
// eslint-disable-next-line react/prop-types
const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
      {[ 'home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                <a href={`#${item}`} 
                key={item + index}
                className={`app__navigation-dot `}
                style={{backgroundColor: active === item ? '#313BAC' : ''}}
                />
        ))}
    </div>
  )
}

export default NavigationDots
