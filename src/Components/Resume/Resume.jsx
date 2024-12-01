import React from 'react'
import './Resume.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Resume = () => {
  return (
    <div id='resume' className='resume'>
      <div className="resume-title">
            <h1>Resume</h1>
            <img src={theme_pattern} alt="" />
      </div>
      <section className="experience">
        <header className='experienc2'>
            <h1>Experience</h1>
        </header>
        <article className="experience-first">
        <h1><br /><span>Dhaka Developers and Real Estate Company</span> (Mar 2024 - June 2024)</h1>
        <h2>Junior Software Engineer </h2>

        <p> <br />Working at a Developers and Real Estate group I involved managing and executing real estate projects from conception to completion. Responsibilities <br />include overseeing construction and development projects, coordinating timelines, budgets, and resources, and ensuring project requirements are met through <br />
         collaboration with architects, engineers, contractors, and clients. </p>
        <br />
        <p>The role requires technical skills in using software for design and project management, as well as understanding zoning laws, building codes, and regulations</p>
      </article>
      </section>

      <section className="education">
        <header className='education1'>
            <h1> <br />Education</h1>
        </header>
        <article className="education-first">
        <h1><br /><span>Daffodil International University </span>   (2019 - 2024)</h1>
        <h2>Computer Science and Engineering</h2>
        <p> <br />University life as a Computer Science and Engineering student involves a blend of rigorous academics, hands-on projects, and personal growth.</p>
    
        <p>I attend lectures on topics like algorithms, programming, data structures, and computer systems, while completing assignments and coding projects to reinforce their learning.</p>
        
        <p>I participated in labs and research, often collaborating on software development and engineering solutions.</p>
      </article>

      <article className="education-first">
        <h1><br /><span>Kalikapur Abdul Matin Khusru Govt College </span>   (2016 - 2018)</h1>
        <h2>Science</h2>
        <p> <br />College life is a blend of learning, growth, and new experiences. It’s a time to explore your passions, gain knowledge, and build lasting friendships. Balancing academics, extracurricular activities, and personal interests teaches time management and independence.</p>
      </article>
      </section>
    </div>
  )
}

export default Resume


