import Hero from "../components/Hero"
import FeatureCard from "../components/FeatureCard"
import ProfileCard from "../components/ProfileCard"

const HomePage = () => {
  return (
    <div className="home-page">
      {/* You can use your Canva-created hero background image here */}
      <div className="hero-container">
        <Hero subtitleAbove="Hey! I'm" title="Ashley," subtitleBelow="a Computer Science Student at the University of Waterloo" />
      </div>

      <div className="features-container">
        <ProfileCard
          image="/assets/profile.png" // Your Canva-exported profile image
          name="Ashley Ge"
          description="Hey! I'm Ashley and I'm in second-year at the University of Waterloo."
		  description2="In my free time, I enjoy sewing, ballroom dancing, learning new languages, singing, and reading!"
        />
		<div className="features-grid">
        {/* Use your Canva-created card backgrounds and icons */}
        <FeatureCard
          title="READING CORNER"
          icon={<img src="/assets/books.png" alt="Book icon" />}
          color="#caaacd"
          link="/reading-corner"
          backgroundImage="/assets/cards/reading-bg.png"
        />

        <FeatureCard
          title="WORK JOURNEY"
          icon={<img src="/assets/working.png" alt="Laptop icon" />}
          color="#d44902"
          link="/experience"
          backgroundImage="/assets/cards/work-bg.png"
        />

        <FeatureCard
          title="PROJECT HUB"
          icon={<img src="/assets/project.png" alt="Tools icon" />}
          color="#ffd4d4"
          link="/projects"
          backgroundImage="/assets/cards/project-bg.png"
        />

        <FeatureCard
          title="SEWING STUDIO"
          icon={<img src="/assets/sewing.png" alt="Sewing icon" />}
          color="#d6e8f7"
          link="/portfolio"
          backgroundImage="/assets/cards/sewing-bg.png"
        />
		
      </div>
    </div>
	</div>
  )
}

export default HomePage
