interface ExperienceCardProps {
	title: string
	company: string
	location: string
	dateRange: string
	responsibilities: string[]
	color: string
	imagePath: string
	imageAlt: string
	alignment: "left" | "right"
	link: string
  }
  
  const ExperienceCard = ({
	title,
	company,
	location,
	dateRange,
	responsibilities,
	color,
	imagePath,
	imageAlt,
	alignment,
	link,
  }: ExperienceCardProps) => {
	const handleClick = () => {
		window.open(link, "_blank") 
	  }
	return (
	  <div className={`experience-row row-${alignment}`}>
		<div className={`experience-card card-${color}`}
		 onClick={handleClick}
		 style={{ cursor: "pointer" }}>
		  <div className="experience-header">
			<h2 className="experience-job-title">
			  {title} | {company}
			</h2>
			<p className="experience-location">{location}</p>
		  </div>
		  <div className="experience-details">
			<ul>
			  {responsibilities.map((responsibility, index) => (
				<li key={index}>{responsibility}</li>
			  ))}
			</ul>
		  </div>
		  <div className="experience-mobile-date">{dateRange}</div>
		</div>
  
		<div className="experience-image-container">
		  <div className="experience-date">{dateRange}</div>
		  <img src={imagePath} alt={imageAlt} className="experience-image" />
		</div>
	  </div>
	)
  }
  
  export default ExperienceCard
  