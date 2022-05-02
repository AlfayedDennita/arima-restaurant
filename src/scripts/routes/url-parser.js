const UrlParser = {
  activeUrl() {
    return window.location.hash.slice(1).toLowerCase();
  },

  parseActiveUrlWithoutCombiner() {
    const url = this.activeUrl();
    return this.urlSplitter(url);
  },

  parseActiveUrlWithCombiner() {
    return this.urlCombiner(this.parseActiveUrlWithoutCombiner());
  },

  urlSplitter(url) {
    const urlSplits = url.split('/');
    return {
      resource: urlSplits[1] || null,
      id: urlSplits[2] || null,
      verb: urlSplits[3] || null,
    };
  },

  urlCombiner(splittedUrl) {
    return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/')
      + (splittedUrl.id ? '/:id' : '')
      + (splittedUrl.verb ? `/${splittedUrl.verb}` : '');
  },
};

export default UrlParser;
