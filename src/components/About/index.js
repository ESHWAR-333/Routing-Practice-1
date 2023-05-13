import './index.css'

const About = () => {
  console.log('ji')
  return (
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png "
        alt="about"
        className="about-image"
      />
      <h1 className="about-heading">About</h1>
      <h1 className="about-description">I love to create ! I am a frontend</h1>
    </div>
  )
}

export default About
