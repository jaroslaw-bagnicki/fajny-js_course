import style from './style.module.scss';

export class BlogHeader extends HTMLElement {
  constructor() {
    super();
    this.className = `${style.container}`;
    this.innerHTML = `
      <avatar-img src="assets/me.jpg" class="${style.avatar}"></avatar-img>
      <h1 class="${style.title}">Programista <br>na starcie</h1>
      <h2 class="${style.description}">
        blog o technologiach frontendowych, TypeScript, Web Components
      </h2>
    `;
  }
}
