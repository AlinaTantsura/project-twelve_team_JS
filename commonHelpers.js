var D=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var l=(t,o,e)=>(D(t,o,"read from private field"),e?e.call(t):o.get(t)),u=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};import{i as N,a as P,b as R,c as H,d as U,w as I}from"./assets/dark-light-switcher-03c03f45.js";import{S as i,a as y}from"./assets/vendor-dacd7886.js";JSON.parse(localStorage.getItem("shoppingList"));function z(t){const o=document.getElementById("bookModal"),e=t.description||"Description will be added later";o.innerHTML="";const s=document.createElement("div");s.classList.add("modal-content"),s.innerHTML=`
        <button id="closeModal">
            <svg width="24" height="24" class="close-modal-icon">
                <use href="${N}#x-close"></use>
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
                        <img src="${P}" srcset="${R} 2x"  alt="Amazon link">
                    </a>
                    
                    <a href="${t.buy_links[1].url}" target="_blank" class="book-link">
                        <img src="${H}" srcset="${U} 2x" alt="Apple Book link">
                    </a>
                </div>
            </div>
        </div>

        <button id="addToShoppingList" class="add-shopping-button">Add to Shopping List</button>

        <p id="congratulationsMessage" style="display: none;">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </p>
    `,o.appendChild(s),o.style.display="block",document.body.style.overflow="hidden",document.getElementById("closeModal").addEventListener("click",()=>{m()});const a=document.getElementById("addToShoppingList");a.addEventListener("click",w),T(),document.addEventListener("keydown",n=>{n.key==="Escape"&&m()}),o.addEventListener("click",n=>{n.target===o&&m()});function m(){o.style.display="none",document.body.style.overflow="auto"}function w(){const n=JSON.parse(localStorage.getItem("shoppingList"))||[];if(!n.some(c=>c.title===t.title))n.push(t),localStorage.setItem("shoppingList",JSON.stringify(n)),I(n),i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:L=>{L.onmouseenter=i.stopTimer,L.onmouseleave=i.resumeTimer}}).fire({icon:"success",title:"Book was ADDED to Shopping list!"});else{const c=n.filter(g=>g.title!==t.title);localStorage.setItem("shoppingList",JSON.stringify(c)),I(c),i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:g=>{g.onmouseenter=i.stopTimer,g.onmouseleave=i.resumeTimer}}).fire({icon:"success",title:"Book was REMOVED from Shopping list!"})}T()}function T(){(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(c=>c.title===t.title)?(a.innerText="Remove from Shopping List",document.getElementById("congratulationsMessage").style.display="block"):(a.innerText="Add to Shopping List",document.getElementById("congratulationsMessage").style.display="none")}}var d,k,b,B;class E{constructor(){u(this,d,"https://books-backend.p.goit.global/books");u(this,k,"/top-books");u(this,b,"/category-list");u(this,B,"/category?category=")}async getBooks(){return(await y.get(`${l(this,d)}${l(this,k)}`)).data}async getAllCategories(){return(await y.get(`${l(this,d)}${l(this,b)}`)).data}async getBookById(o){return(await y.get(`${l(this,d)}/${o}`)).data}async getBooksFromCategory(o){return(await y.get(`${l(this,d)}${l(this,B)}${o}`)).data}}d=new WeakMap,k=new WeakMap,b=new WeakMap,B=new WeakMap;const S=document.querySelector(".loader-backdrop");function p(){S==null||S.classList.toggle("is-hidden")}const h=document.querySelector(".book-block-list");function O(t){return`<li class="book-card" id="${t._id}">
        <div class="book-card-box" data-book-info='${JSON.stringify(t)}'>
            <img class="book-card-img" src="${t.book_image}" alt="Book cover ${t.title}" loading="lazy" />
            <p class="book-card-overlay">quick view</p>
        </div>
        <h3 class="book-card-title">${t.title}</h3>
        <p class="book-card-text">${t.author}</p>
    </li>`}function J(t){const o=[];for(let e=0;e<t.length;e+=1){const s=t[e].books.map((a,m)=>{if(m<5)return O(a)}).join(""),r=`<h2 class="best-category-title">${t[e].list_name}</h2>
    <ul class="best-category-list">${s}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${t[e].list_name}" type="button">See more</button></div>`;o.push(r)}h.innerHTML=o.join("")}const M=new E;async function _(){p();try{const t=await M.getBooks();t.length===0&&i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:e=>{e.onmouseenter=i.stopTimer,e.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"}),J(t)}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:e=>{e.onmouseenter=i.stopTimer,e.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{p()}}_();let x=null;const v=document.querySelector(".modal");h==null||h.addEventListener("click",F);async function F(t){try{p();let o=t.target.closest("li");o&&(x=o.id,await j(x))}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{p()}}async function j(t){try{const o=await M.getBookById(t);return z(o),v==null||v.classList.remove("is-hidden"),o}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}}const G=(t,o)=>{const e=document.createElement("li");e.classList.add("categories-item");const s=`categoryRadio${o+1}`,r=document.createElement("input");r.setAttribute("type","radio"),r.setAttribute("name","category"),r.setAttribute("id",s),r.classList.add("categories-button");const a=document.createElement("label");return a.textContent=t.list_name,a.setAttribute("for",s),a.classList.add("categories-label"),e.appendChild(r),e.appendChild(a),e};async function W(){try{const t=await new E().getAllCategories();t.sort((e,s)=>e.list_name.localeCompare(s.list_name));const o=document.querySelector(".categories-list");t.forEach((e,s)=>{const r=G(e,s);o==null||o.appendChild(r)})}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:e=>{e.onmouseenter=i.stopTimer,e.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}}W();const Y=new E,f=document.querySelector(".book-block-list"),$=document.querySelector(".book-block-title"),C=document.querySelector(".categories-list");f==null||f.addEventListener("click",K);function K(t){t.preventDefault(),window.innerWidth>=1440?window.scrollTo(window.innerHeight,0):window.innerWidth>=768&&window.innerWidth<1440?window.scrollTo(window.innerHeight,500):window.scrollTo(window.innerHeight,820),t.target.nodeName==="BUTTON"&&($.style.display="none",q(t.target.name),document.querySelectorAll("label").forEach(e=>{e.textContent===t.target.name?e.classList.add("active"):e.classList.remove("active")}))}C==null||C.addEventListener("click",V);function V(t){t.preventDefault(),document.querySelectorAll("label").forEach(s=>{s===t.target&&s.classList.add("active"),s.classList.remove("active")});const e=t.target;if(e.nodeName==="LABEL"&&e.textContent!=="All Categories")e.classList.add("active"),$.style.display="none",q(e.textContent);else if(e.textContent==="All Categories")$.style.display="block",e.classList.add("active"),_();else return}async function q(t){try{p();const o=await Y.getBooksFromCategory(t);Q(o,t)}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{p()}}function Q(t,o){const e=t.map(n=>O(n)).join(""),s=o.split(" ");let r=s.length-1,a=s[r];const w=`<h2 class="book-block-title">${s.splice(0,r).join(" ")}&nbsp;<span class="book-block-title-accent">${a}</span>
    </h2>
    <ul class="category-books-wrapper">${e}</ul>`;f.innerHTML=w,document.querySelectorAll(".book-card").forEach(n=>n.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
