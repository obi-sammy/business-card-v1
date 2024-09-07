import About from './About'
import { FaEnvelope } from "react-icons/fa";

export default function Main() {
  return (
    <main className='main-container'> 
      <div className="name-container">
        <div className='name-inner-container'> 
            <h1>Obi Sammy</h1>
            <h3>Frontend Developer</h3>
        </div>

        <p className='portfolio-link' ><a href="">obi-sammy.website</a></p>

        <button className='mail-button'>
            <FaEnvelope />
            <p>Email</p>
        </button>
      </div>

      <div className='about-container'>
        <About 
          heading="About" 
          paragraph="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
        />
        <About 
          heading="Interests" 
          paragraph="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        />
      </div>
    </main>
  )
}
