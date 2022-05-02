import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests, cacheName) {
    const cache = await caches.open(cacheName);
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    const activeCaches = Object.values(CONFIG.CACHE_NAME);
    cacheNames
      .filter((name) => !activeCaches.includes(name))
      .map((filteredName) => caches.delete(filteredName));
  },

  async cacheFirst(request, cacheName) {
    const response = await caches.match(request);
    return response || this.fetchRequest(request, cacheName);
  },

  async networkFirst(request, cacheName) {
    try {
      return await this.fetchRequest(request, cacheName);
    } catch {
      return caches.match(request);
    }
  },

  async revalidateCache(request, cacheName) {
    const response = await caches.match(request);

    if (response) {
      this.fetchRequest(request, cacheName);
      return response;
    }

    return this.fetchRequest(request, cacheName);
  },

  async fetchRequest(request, cacheName) {
    const response = await fetch(request);

    if (!response || response.status !== 200 || request.method !== 'GET') {
      return response;
    }

    await this.addCache(request, cacheName);
    return response;
  },

  async addCache(request, cacheName) {
    const cache = await caches.open(cacheName);
    cache.add(request);
  },
};

export default CacheHelper;
