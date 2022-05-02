/* eslint-disable no-restricted-globals */

import 'regenerator-runtime';
import CONFIG from './globals/config';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;
const { CACHE_NAME } = CONFIG;

const isRequestFromGoogleFonts = (url) => url.match(new RegExp('https://fonts.googleapis.com')) || url.match(new RegExp('https://fonts.gstatic.com'));

const isRequestFromApi = (url) => url.match(new RegExp('https://dicoding-restaurant-api.el.r.appspot.com'));

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './'], CACHE_NAME.APP_SHELL));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (isRequestFromGoogleFonts(event.request.url)) {
    event.respondWith(CacheHelper.cacheFirst(event.request, CACHE_NAME.FONTS));
  } else if (isRequestFromApi(event.request.url)) {
    event.respondWith(CacheHelper.networkFirst(event.request, CACHE_NAME.API));
  } else {
    event.respondWith(CacheHelper.revalidateCache(event.request, CACHE_NAME.APP_SHELL));
  }
});
