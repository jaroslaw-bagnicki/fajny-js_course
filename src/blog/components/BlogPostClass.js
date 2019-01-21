import { getPost } from '../../github';

/* eslint-disable no-unused-vars */
export class BlogPostElement extends HTMLElement {
  static get observedAttributes() {
    return ['post-id'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  async render() {
    this.clean();
    const id = this.getAttribute('post-id');
    const md = document.createElement('mark-down');
    md.textContent = await getPost(`${id}.md`);
    this.shadowRoot.appendChild(md);
  }

  clean() {
    this.shadowRoot.childNodes.forEach(child => child.remove());
  }
}
