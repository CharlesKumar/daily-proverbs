/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "b815b0dad9ec95c55e619d3991e364de"
  },
  {
    "url": "index.html",
    "revision": "724e5abd79e6c711cef925bf6501df48"
  },
  {
    "url": "main.c1c17590.js",
    "revision": "2bcd0334299ef60aa0bdf8c7bb4b81be"
  },
  {
    "url": "report.html",
    "revision": "6339942684b94ef0d92b751b1dda34da"
  },
  {
    "url": "style.92efba47.css",
    "revision": "07b478a198174b7e11f37f253a567671"
  },
  {
    "url": "/",
    "revision": "efcecb2d4dad083bf03fd4f38b444aaf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute(/https:\/\/cors-anywhere.herokuapp.com\/https:\/\/www.unixtimestamp.com/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute("https://raw.githubusercontent.com/parcel-bundler/website/01a1f7dd/src/assets/parcel@3x.png", workbox.strategies.cacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0]})] }), 'GET');
