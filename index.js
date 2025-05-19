import{a as p,S as f,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50383769-6461d4d81fbd57ed3efc96c78",y="https://pixabay.com/api/";async function g(n){try{return(await p.get(y,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw r}}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery");document.querySelector(".loader");function b(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${d}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){document.querySelector(".loader").style.display="block"}function w(){document.querySelector(".loader").style.display="none"}function S(){c.innerHTML=""}const l=document.querySelector(".form"),q=l.elements["search-text"];l.addEventListener("submit",async n=>{n.preventDefault();const r=q.value.trim();if(r){S(),L();try{const o=await g(r);if(o.length===0){a.warning({title:"Oops!",message:"No images found. Try another word!",position:"topRight"});return}b(o)}catch(o){a.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{w()}}});
//# sourceMappingURL=index.js.map
