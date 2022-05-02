const handleAccesibility = (key) => {
  const mouseActive = () => {
    document.body.classList.remove('accessibility');
    window.removeEventListener('mousedown', mouseActive);
    window.removeEventListener('wheel', mouseActive);
    window.addEventListener('keydown', handleAccesibility);
  };
  const tabActive = () => {
    const keyCodeTabButton = 9;
    if (key.keyCode === keyCodeTabButton) {
      document.body.classList.add('accessibility');
      window.removeEventListener('keydown', tabActive);
      window.addEventListener('mousedown', mouseActive);
      window.addEventListener('wheel', mouseActive);
    }
  };
  tabActive();
};

export default handleAccesibility;
