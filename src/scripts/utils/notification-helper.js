const NotificationHelper = {
  async show(notificationTitle, additionalOptions = {}) {
    this.notificationTitle = notificationTitle;
    this.additionalOptions = additionalOptions;

    if (this.checkAvailability()) {
      if (this.permissionNotDenied()) {
        if (this.permissionGranted()) {
          await this.showNotification();
        } else {
          await this.requestPermission();
        }
      }
    }
  },

  checkAvailability() {
    return ('Notification' in window);
  },

  permissionNotDenied() {
    return Notification.permission !== 'denied';
  },

  permissionGranted() {
    return Notification.permission === 'granted';
  },

  async requestPermission() {
    await Notification.requestPermission();
  },

  async showNotification() {
    const { notificationTitle, additionalOptions } = this;
    const options = {
      badge: 'images/icons/icon.png',
      icon: 'images/icons/icon.png',
    };
    Object.assign(options, additionalOptions);
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(notificationTitle, options);
  },
};

export default NotificationHelper;
