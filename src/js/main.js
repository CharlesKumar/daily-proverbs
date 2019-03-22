// import {ch1, ch2} from './data/proverbs.js';
// import * as chapters from './data/proverbs.js';
import chapters from './data/proverbs.js';

let d = new Date();

function loadProverb(data){
    let proverbs = '';
    data.forEach(function (el, ind) {
        // console.log((ind+1)+'. '+el);
        proverbs += `<p>${(ind+1)}. ${el} </p>`;
    });
    document.getElementById('proverbs').innerHTML = proverbs;
}

function loadDate (d) {
    // var d = new Date();
    // var n = d.toString();
    document.getElementById('today').innerHTML = d.toString();

}
// let tday = d.getDay(); // 0-6
let tday = d.getDate();
loadProverb(chapters[tday-1]);
loadDate(d);


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    const x = 'service-worker.js';
    navigator.serviceWorker.register(x).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}