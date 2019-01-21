import { getAboutMe } from '../github';

/* eslint-disable no-unused-vars */
export class AboutMeElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  async render() {
    const md = document.createElement('mark-down');
    md.textContent = await getAboutMe();
    this.shadowRoot.appendChild(md);
  }
}
