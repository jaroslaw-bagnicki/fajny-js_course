import style from './style.module.scss';

export class BlogFooter extends HTMLElement {
  constructor() {
    super();
    this.className = style.container;
    this.innerHTML = `
      <span class="${style.copyrights}">This website by Jarosław Bagnicki is released under a Creative Commons License, <br>except for any source code in the form of code snippets/fragments/samples, which are released under GPLv3 License.</span>
    `;
  }
}
