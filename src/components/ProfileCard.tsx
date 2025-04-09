interface ProfileCardProps {
	image: string
	name: string
	description: string
	description2: string
  }
  
  const ProfileCard = ({ image, name, description, description2 }: ProfileCardProps) => {
	return (
	  <div className="profile-card">
		<img src={image || "/placeholder.svg"} alt={name} className="profile-image" />
		<div className="profile-content">
		  <p>{description}</p>
		  <p>{description2}</p>
		</div>
	  </div>
	)
  }
  
  export default ProfileCard