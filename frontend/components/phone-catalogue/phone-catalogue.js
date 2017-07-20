'use strict';

import compiledTemplate from './template.hbs';
import './style.css';


export default class PhoneCatalogue {
  constructor(options) {
    this._el = options.el;
    this._phones = options.phones;

    this._render();

    this._el.addEventListener('click', this._onPhoneClick.bind(this));
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      phones: this._phones
    });
  }

  _onPhoneClick(event) {
    let phoneElement = event.target.closest('[data-element="phone"]');

    if (phoneElement) {
      return;
    }

    console.log(phoneElement.dataset.phoneId);
  }
}
