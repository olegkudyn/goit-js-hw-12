import{a as L,S as w,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function S(t,o=1){const a="50886815-863f8f405658b4e0ea4896497",r=new URLSearchParams({key:a,q:t,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await L.get("https://pixabay.com/api/",{params:r})).data}const f=document.querySelector(".loader"),h=document.querySelector(".gallery"),m=document.querySelector(".load-more-btn"),q=new w(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function x(t){const o=t.map(({webformatURL:a,largeImageURL:r,tags:e,likes:s,views:n,comments:v,downloads:b})=>`
    <li class="gallery-box">
        <a href="${r}">
        <img src="${a}" alt="${e}" width="300">
        </a>
        <div class="gallery-info ">
            <div class="gallery-stat">
                <span class="label">Likes</span>
                <span class="value">${s}</span>
            </div>
            <div class="gallery-stat">
                <span class="label">Views</span>
                <span class="value">${n}</span>
            </div>
            <div class="gallery-stat">
                <span class="label">Comments</span>
                <span class="value">${v}</span>
            </div>
            <div class="gallery-stat">
                <span class="label">Downloads</span>
                <span class="value">${b}</span>
            </div>
        </div>
    </li>`).join("");h.insertAdjacentHTML("beforeend",o),q.refresh()}function B(){h.innerHTML=""}function g(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}function P(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}const $=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let c="",l=1,p=0,d=0;$.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c===""){i.error({message:"Please, fill in the field!",closeOnClick:!0,position:"topRight"});return}l=1,d=0,B(),g(),await y()});M.addEventListener("click",async()=>{g(),await y();const t=document.querySelectorAll(".image-box");if(t.length){const a=t[0].getBoundingClientRect().height;console.log(a),window.scrollBy({top:a*2,behavior:"smooth"})}});const y=async()=>{try{u();const t=await S(c,l);if(l===1&&(p=t.totalHits,!t.hits.length)){i.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"});return}x(t.hits),l++,d+=t.hits.length,d>=p?(u(),i.error({message:"We're sorry, but you've reached the end of search results.",closeOnClick:!0,position:"topRight"})):P()}catch(t){i.error({message:`${t}`})}finally{O()}};
//# sourceMappingURL=index.js.map
