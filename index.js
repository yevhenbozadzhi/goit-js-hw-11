import{a as p,S as m,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50383769-6461d4d81fbd57ed3efc96c78",g="https://pixabay.com/api/";async function h(s){try{return(await p.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw r}}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${i}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){c.innerHTML=""}function v(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const d=document.querySelector(".form"),$=d.elements["search-text"];d.addEventListener("submit",async s=>{s.preventDefault();const r=$.value.trim();if(r){w(),v();try{const o=await h(r);if(o.length===0){a.warning({title:"Oops!",message:"No images found. Try another word!",position:"topRight"});return}L(o)}catch(o){a.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{S()}}});
//# sourceMappingURL=index.js.map
