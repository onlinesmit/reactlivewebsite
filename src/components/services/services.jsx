import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const services = () => {
  return (
    <section id = 'services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              UI/UX design
            </h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
          </ul>
        </article>
        {/* End of UI/UX design */}
        {/* WEb development */}

        <article className="service">
          <div className="service__head">
            <h3>
              Web Development
            </h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
          </ul>
        </article>

             {/* content creater */}

        <article className="service">
          <div className="service__head">
            <h3>
              Content Creater
            </h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services