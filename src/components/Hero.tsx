interface HeroProps {
	title: string
	subtitleAbove?: string
	subtitleBelow?: string
  }
  
  const Hero = ({ title, subtitleAbove, subtitleBelow}: HeroProps) => {
	return (
<div className="hero">
	<div className="hero-wrapper">
      <div className="hero-content">
        {subtitleAbove && <p className="hero-subtitle-above">{subtitleAbove}</p>}
        
        <h1>{title}</h1> {/* Title */}

        {subtitleBelow && <p className="hero-subtitle-below">{subtitleBelow}</p>}
      </div>
	</div>
      <div className="hero-decoration">
        <img src="/assets/hero-cloud.png" alt="" className="clouds" />
        <img src="/assets/hero-birds.png" alt="" className="birds" />
      </div>
    </div>
	)
  }
  
  export default Hero
  