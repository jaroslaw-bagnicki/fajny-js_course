import style from './style.module.scss';

export class Avatar extends HTMLElement {
  constructor() {
    super();
    const imgSrc = this.getAttribute('src');
    this.innerHTML = `
     <img src="${imgSrc}" class="${style.img}" draggable="false" />
    `;
  }
}
