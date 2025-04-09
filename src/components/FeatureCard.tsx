import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface FeatureCardProps {
  title: string
  icon: ReactNode
  color: string
  link: string
  backgroundImage?: string
  children?: ReactNode
}

const FeatureCard = ({ title, icon, color, link, backgroundImage, children }: FeatureCardProps) => {
  return (
    <Link
      to={link}
      className="feature-card"
      style={{
        backgroundColor: color,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="feature-card-icon">{icon}</div>
      <h3 className="feature-card-title">{title}</h3>
      {children && <div className="feature-card-content">{children}</div>}
    </Link>
  )
}

export default FeatureCard