var q=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var l=(t,o,e)=>(q(t,o,"read from private field"),e?e.call(t):o.get(t)),u=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};import{i as D,a as N,b as P,c as R,d as H}from"./assets/dark-light-switcher-8bb7e530.js";import{S as i,a as y}from"./assets/vendor-4589f348.js";JSON.parse(localStorage.getItem("shoppingList"));function z(t){const o=document.getElementById("bookModal"),e=t.description||"Description will be added later";o.innerHTML="";const s=document.createElement("div");s.classList.add("modal-content"),s.innerHTML=`
        <button id="closeModal">
            <svg width="24" height="24" class="close-modal-icon">
                <use href="${D}#x-close"></use>
            </svg>
        </button>

        <div class="book-modal-info">
            <img class="book-modal-img" src="${t.book_image}" alt="Book cover for ${t.title}" loading="lazy" />
            
            <div>
                <h3 class="book-modal-title">${t.title}</h3>
                <p class="book-modal-author">${t.author}</p>
                <p class="book-modal-description">${e}</p>
                
                <div class="book-link-wrap">
                    <a href="${t.buy_links[0].url}" target="_blank" class="book-link amazon-link">
                        <img src="${N}" srcset="${P} 2x"  alt="Amazon link">
                    </a>
                    
                    <a href="${t.buy_links[1].url}" target="_blank" class="book-link">
                        <img src="${R}" srcset="${H} 2x" alt="Apple Book link">
                    </a>
                </div>
            </div>
        </div>

        <button id="addToShoppingList">Add to Shopping List</button>

        <p id="congratulationsMessage" style="display: none;">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </p>
    `,o.appendChild(s),o.style.display="block",document.body.style.overflow="hidden",document.getElementById("closeModal").addEventListener("click",()=>{d()});const a=document.getElementById("addToShoppingList");a.addEventListener("click",w),T(),document.addEventListener("keydown",r=>{r.key==="Escape"&&d()}),o.addEventListener("click",r=>{r.target===o&&d()});function d(){o.style.display="none",document.body.style.overflow="auto"}function w(){const r=JSON.parse(localStorage.getItem("shoppingList"))||[];if(!r.some(m=>m.title===t.title))r.push(t),localStorage.setItem("shoppingList",JSON.stringify(r)),i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:L=>{L.onmouseenter=i.stopTimer,L.onmouseleave=i.resumeTimer}}).fire({icon:"success",title:"Book was ADDED to Shopping list!"});else{const m=r.filter(g=>g.title!==t.title);localStorage.setItem("shoppingList",JSON.stringify(m)),i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:g=>{g.onmouseenter=i.stopTimer,g.onmouseleave=i.resumeTimer}}).fire({icon:"success",title:"Book was REMOVED from Shopping list!"})}T()}function T(){(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(m=>m.title===t.title)?(a.innerText="Remove from Shopping List",document.getElementById("congratulationsMessage").style.display="block"):(a.innerText="Add to Shopping List",document.getElementById("congratulationsMessage").style.display="none")}}var c,k,B,b;class E{constructor(){u(this,c,"https://books-backend.p.goit.global/books");u(this,k,"/top-books");u(this,B,"/category-list");u(this,b,"/category?category=")}async getBooks(){return(await y.get(`${l(this,c)}${l(this,k)}`)).data}async getAllCategories(){return(await y.get(`${l(this,c)}${l(this,B)}`)).data}async getBookById(o){return(await y.get(`${l(this,c)}/${o}`)).data}async getBooksFromCategory(o){return(await y.get(`${l(this,c)}${l(this,b)}${o}`)).data}}c=new WeakMap,k=new WeakMap,B=new WeakMap,b=new WeakMap;const S=document.querySelector(".loader-backdrop");function p(){S==null||S.classList.toggle("is-hidden")}const h=document.querySelector(".book-block-list");function x(t){return`<li class="book-card" id="${t._id}">
        <div class="book-card-box" data-book-info='${JSON.stringify(t)}'>
            <img class="book-card-img" src="${t.book_image}" alt="Book cover ${t.title}" loading="lazy" />
            <p class="book-card-overlay">quick view</p>
        </div>
        <h3 class="book-card-title">${t.title}</h3>
        <p class="book-card-text">${t.author}</p>
    </li>`}function J(t){const o=[];for(let e=0;e<t.length;e+=1){const s=t[e].books.map((a,d)=>{if(d<5)return x(a)}).join(""),n=`<h2 class="best-category-title">${t[e].list_name}</h2>
    <ul class="best-category-list">${s}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${t[e].list_name}" type="button">See more</button></div>`;o.push(n)}h.innerHTML=o.join("")}const O=new E;async function M(){p();try{const t=await O.getBooks();t.length===0&&i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.onmouseenter=i.stopTimer,e.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"}),J(t)}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.onmouseenter=i.stopTimer,e.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{p()}}M();let I=null;const v=document.querySelector(".modal");h==null||h.addEventListener("click",U);async function U(t){try{p();let o=t.target.closest("li");o&&(I=o.id,await F(I))}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{p()}}async function F(t){try{const o=await O.getBookById(t);return z(o),v==null||v.classList.remove("is-hidden"),o}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}}const j=(t,o)=>{const e=document.createElement("li");e.classList.add("categories-item");const s=`categoryRadio${o+1}`,n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","category"),n.setAttribute("id",s),n.classList.add("categories-button");const a=document.createElement("label");return a.textContent=t.list_name,a.setAttribute("for",s),a.classList.add("categories-label"),e.appendChild(n),e.appendChild(a),e};async function G(){try{const t=await new E().getAllCategories();t.sort((e,s)=>e.list_name.localeCompare(s.list_name));const o=document.querySelector(".categories-list");t.forEach((e,s)=>{const n=j(e,s);o==null||o.appendChild(n)})}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.onmouseenter=i.stopTimer,e.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}}G();const W=new E,f=document.querySelector(".book-block-list"),$=document.querySelector(".book-block-title"),C=document.querySelector(".categories-list");f==null||f.addEventListener("click",Y);function Y(t){t.preventDefault(),window.innerWidth>=1440?window.scrollTo(window.innerHeight,0):window.innerWidth>=768&&window.innerWidth<1440?window.scrollTo(window.innerHeight,500):window.scrollTo(window.innerHeight,820),document.querySelectorAll("label").forEach(e=>{e.textContent===t.target.name?e.classList.add("active"):e.classList.remove("active")}),t.target.nodeName==="BUTTON"&&($.style.display="none",_(t.target.name))}C==null||C.addEventListener("click",K);function K(t){t.preventDefault(),document.querySelectorAll("label").forEach(s=>{s===t.target&&s.classList.add("active"),s.classList.remove("active")});const e=t.target;e.nodeName==="LABEL"&&e.textContent!=="All Categories"?(e.classList.add("active"),$.style.display="none",_(e.textContent)):e.textContent==="All Categories"&&($.style.display="block",e.classList.add("active"),M())}async function _(t){try{p();const o=await W.getBooksFromCategory(t);V(o,t)}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{p()}}function V(t,o){const e=t.map(r=>x(r)).join(""),s=o.split(" ");let n=s.length-1,a=s[n];const w=`<h2 class="book-block-title">${s.splice(0,n).join(" ")}&nbsp;<span class="book-block-title-accent">${a}</span>
    </h2>
    <ul class="category-books-wrapper">${e}</ul>`;f.innerHTML=w,document.querySelectorAll(".book-card").forEach(r=>r.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
