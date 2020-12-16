import projects from '../projects'

class Games extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    
    const wrapper = document.createElement('ul')
    wrapper.setAttribute('role', 'list')

    for (const project of projects) {
      const game = wrapper.appendChild(document.createElement('sleepy-game'))
      game.dataset.name = project.name
    }

    this.shadowRoot.append(wrapper)
  }
}

customElements.define('games-container', Games)
