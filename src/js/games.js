import React from 'react'
import ReactDOM from 'react-dom'
import projects from './projects'

const Games = () => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
  const reducedMotion = !mediaQuery || mediaQuery.matches

  return (
    <ul id='games-container' role='list'>
      {projects.map((project) => (
        <li key={project.name} className={`game game--${project.class}`}>
          <div className='game__content'>
            {project.video && !reducedMotion &&
              <video autoPlay loop muted poster={project.poster}>
                <source src={project.video} />
              </video>          
            }

            {(!project.video || reducedMotion) &&
              <img width="767" height="250" src={project.poster} alt='' />
            }

            <div className='caption'>
              <p className='title'>
                <a href={project.external ?? `/game?${project.name}`}>{project.name}</a>
              </p>
              <p className='desc'>{project.desc}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

ReactDOM.render(<Games />, document.getElementById('games'))
