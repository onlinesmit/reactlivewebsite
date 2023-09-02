import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id = 'experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

    <div className="container experience container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>InterMediate</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>BOOTSTRAP</h4>
            <small className='text-light'>Experienced</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>TAILWIND</h4>
            <small className='text-light'>Experienced</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>REACT JS</h4>
            <small className='text-light'>InterMediate</small>
             </article>
        </div>
      </div>

      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>NODE JS</h4>
            <small className='text-light'>Experienced</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>MONGO DB</h4>
            <small className='text-light'>Experienced</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>JAVA</h4>
            <small className='text-light'>InterMediate</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
             </article>
             <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>MYSQL</h4>
            <small className='text-light'>Experienced</small>
             </article>
             {/* <article className='experince__details'>
            <BsFillPatchCheckFill/>
            <h4>REACT JS</h4>
            <small className='text-light'>InterMediate</small>
             </article> */}
        </div>
      </div>
    </div>

    </section>
  )
}

export default experience