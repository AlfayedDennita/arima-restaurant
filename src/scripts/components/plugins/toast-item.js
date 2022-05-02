class ToastItem extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'alert');
  }

  set configData({ type, iconClass = 'fas fa-exclamation', content }) {
    this.iconClass = iconClass;
    this.content = content;
    this.setAttribute('aria-label', content);
    this.classList.add(type);
    this.render();
  }

  render() {
    this.innerHTML = `<i class="${this.iconClass}"></i>${this.content}`;
    const showDelayInMs = 100;
    const destroyDelayInMs = showDelayInMs + 5000;
    setTimeout(() => this.show(), showDelayInMs);
    setTimeout(() => this.destroy(), destroyDelayInMs);
  }

  show() {
    this.classList.add('show');
  }

  hide() {
    this.classList.add('hide');
    this.classList.remove('show');
  }

  destroy() {
    const removeDelayInMs = 300;
    this.hide();
    setTimeout(() => this.remove(), removeDelayInMs);
  }
}

export default ToastItem;
