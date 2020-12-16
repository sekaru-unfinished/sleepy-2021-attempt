import projects from '../projects'

class Game extends HTMLElement {
  constructor() {
    const self = super()

    const game = projects[0] //projects.find((game) => game.name === self.dataset.name) 

    this.attachShadow({ mode: 'open' })
    
    const wrapper = document.createElement('li')
    wrapper.className = `game game--${game.class}`

    const content = wrapper.appendChild(document.createElement('div'))
    content.className = 'game__content'

    if (game.video) {
      const video = content.appendChild(document.createElement('video'))
      video.setAttribute('autoplay', 'true')
      video.setAttribute('loop', 'true')
      video.setAttribute('muted', 'true')
      video.setAttribute('poster', game.poster)

      const source = video.appendChild(document.createElement('source'))
      source.setAttribute('src', game.video)
    } else {
      const image = content.appendChild(document.createElement('img'))
      image.setAttribute('src', game.poster)
      image.setAttribute('alt', '')
    }

    const caption = content.appendChild(document.createElement('div'))
    caption.className = 'caption';

    const title = caption.appendChild(document.createElement('p'))
    title.className = 'title'
    const link = title.appendChild(document.createElement('a'))
    link.innerHTML = game.name
    link.setAttribute('href', game.external ?? `/game?${game.name}`)

    const desc = caption.appendChild(document.createElement('p'))
    desc.className = 'desc'
    desc.innerHTML = game.desc

    this.shadowRoot.append(wrapper)
  }
}

customElements.define('sleepy-game', Game)
