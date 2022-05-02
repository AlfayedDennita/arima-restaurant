class ToastContainer extends HTMLElement {
  set show(config) {
    this.config = config;
    this.render();
  }

  render() {
    const toastItemElement = document.createElement('toast-item');
    toastItemElement.configData = this.config;
    this.appendChild(toastItemElement);
  }
}

export default ToastContainer;
