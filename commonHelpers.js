var q=(e,o,t)=>{if(!o.has(e))throw TypeError("Cannot "+t)};var l=(e,o,t)=>(q(e,o,"read from private field"),t?t.call(e):o.get(e)),p=(e,o,t)=>{if(o.has(e))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(e):o.set(e,t)};import{i as D,a as N,b as P,c as R,d as H}from"./assets/dark-light-switcher-c180d8ea.js";import{S as i,a as y}from"./assets/vendor-4589f348.js";JSON.parse(localStorage.getItem("shoppingList"));function z(e){const o=document.getElementById("bookModal"),t=e.description||"Description will be added later";o.innerHTML="";const s=document.createElement("div");s.classList.add("modal-content"),s.innerHTML=`
        <button id="closeModal">
            <svg width="24" height="24" class="close-modal-icon">
                <use href="${D}#x-close"></use>
            </svg>
        </button>

        <div class="book-modal-info">
            <img class="book-modal-img" src="${e.book_image}" alt="Book cover for ${e.title}" loading="lazy" />
            
            <div>
                <h3 class="book-modal-title">${e.title}</h3>
                <p class="book-modal-author">${e.author}</p>
                <p class="book-modal-description">${t}</p>
                
                <div class="book-link-wrap">
                    <a href="${e.buy_links[0].url}" target="_blank" class="book-link amazon-link">
                        <img src="${N}" srcset="${P} 2x"  alt="Amazon link">
                    </a>
                    
                    <a href="${e.buy_links[1].url}" target="_blank" class="book-link">
                        <img src="${R}" srcset="${H} 2x" alt="Apple Book link">
                    </a>
                </div>
            </div>
        </div>

        <button id="addToShoppingList">Add to Shopping List</button>

        <p id="congratulationsMessage" style="display: none;">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </p>
    `,o.appendChild(s),o.style.display="block",document.body.style.overflow="hidden",document.getElementById("closeModal").addEventListener("click",()=>{d()});const a=document.getElementById("addToShoppingList");a.addEventListener("click",w),T(),document.addEventListener("keydown",r=>{r.key==="Escape"&&d()}),o.addEventListener("click",r=>{r.target===o&&d()});function d(){o.style.display="none",document.body.style.overflow="auto"}function w(){const r=JSON.parse(localStorage.getItem("shoppingList"))||[];if(!r.some(m=>m.title===e.title))r.push(e),localStorage.setItem("shoppingList",JSON.stringify(r)),i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:L=>{L.onmouseenter=i.stopTimer,L.onmouseleave=i.resumeTimer}}).fire({icon:"success",title:"Book was ADDED to Shopping list!"});else{const m=r.filter(g=>g.title!==e.title);localStorage.setItem("shoppingList",JSON.stringify(m)),i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:g=>{g.onmouseenter=i.stopTimer,g.onmouseleave=i.resumeTimer}}).fire({icon:"success",title:"Book was REMOVED from Shopping list!"})}T()}function T(){(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(m=>m.title===e.title)?(a.innerText="Remove from Shopping List",document.getElementById("congratulationsMessage").style.display="block"):(a.innerText="Add to Shopping List",document.getElementById("congratulationsMessage").style.display="none")}}var c,k,B,b;class E{constructor(){p(this,c,"https://books-backend.p.goit.global/books");p(this,k,"/top-books");p(this,B,"/category-list");p(this,b,"/category?category=")}async getBooks(){return(await y.get(`${l(this,c)}${l(this,k)}`)).data}async getAllCategories(){return(await y.get(`${l(this,c)}${l(this,B)}`)).data}async getBookById(o){return(await y.get(`${l(this,c)}/${o}`)).data}async getBooksFromCategory(o){return(await y.get(`${l(this,c)}${l(this,b)}${o}`)).data}}c=new WeakMap,k=new WeakMap,B=new WeakMap,b=new WeakMap;const S=document.querySelector(".loader-backdrop");function u(){S==null||S.classList.toggle("is-hidden")}const h=document.querySelector(".book-block-list");function x(e){return`<li class="book-card" id="${e._id}">
        <div class="book-card-box" data-book-info='${JSON.stringify(e)}'>
            <img class="book-card-img" src="${e.book_image}" alt="Book cover ${e.title}" loading="lazy" />
            <p class="book-card-overlay">quick view</p>
        </div>
        <h3 class="book-card-title">${e.title}</h3>
        <p class="book-card-text">${e.author}</p>
    </li>`}function J(e){const o=[];for(let t=0;t<e.length;t+=1){const s=e[t].books.map((a,d)=>{if(d<5)return x(a)}).join(""),n=`<h2 class="best-category-title">${e[t].list_name}</h2>
    <ul class="best-category-list">${s}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${e[t].list_name}" type="button">See more</button></div>`;o.push(n)}h.innerHTML=o.join("")}const O=new E;async function M(){u();try{const e=await O.getBooks();e.length===0&&i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.onmouseenter=i.stopTimer,t.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"}),J(e)}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.onmouseenter=i.stopTimer,t.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{u()}}M();let I=null;const v=document.querySelector(".modal");h==null||h.addEventListener("click",U);async function U(e){try{u();let o=e.target.closest("li");o&&(I=o.id,await F(I))}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{u()}}async function F(e){try{const o=await O.getBookById(e);return z(o),v==null||v.classList.remove("is-hidden"),o}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}}const j=(e,o)=>{const t=document.createElement("li");t.classList.add("categories-item");const s=`categoryRadio${o+1}`,n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","category"),n.setAttribute("id",s),n.classList.add("categories-button");const a=document.createElement("label");return a.textContent=e.list_name,a.setAttribute("for",s),a.classList.add("categories-label"),t.appendChild(n),t.appendChild(a),t};async function G(){try{const e=await new E().getAllCategories();e.sort((t,s)=>t.list_name.localeCompare(s.list_name));const o=document.querySelector(".categories-list");e.forEach((t,s)=>{const n=j(t,s);o==null||o.appendChild(n)})}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.onmouseenter=i.stopTimer,t.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}}G();const W=new E,f=document.querySelector(".book-block-list"),$=document.querySelector(".book-block-title"),C=document.querySelector(".categories-list");f==null||f.addEventListener("click",Y);function Y(e){e.preventDefault(),window.innerWidth>=1440?window.scrollTo(window.innerHeight,0):window.innerWidth>=768&&window.innerWidth<1440?window.scrollTo(window.innerHeight,500):window.scrollTo(window.innerHeight,820),e.target.nodeName==="BUTTON"&&($.style.display="none",_(e.target.name),document.querySelectorAll("label").forEach(t=>{t.textContent===e.target.name?t.classList.add("active"):t.classList.remove("active")}))}C==null||C.addEventListener("click",K);function K(e){e.preventDefault(),document.querySelectorAll("label").forEach(s=>{s===e.target&&s.classList.add("active"),s.classList.remove("active")});const t=e.target;if(t.nodeName==="LABEL"&&t.textContent!=="All Categories")t.classList.add("active"),$.style.display="none",_(t.textContent);else if(t.textContent==="All Categories")$.style.display="block",t.classList.add("active"),M();else return}async function _(e){try{u();const o=await W.getBooksFromCategory(e);V(o,e)}catch{i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=i.stopTimer,s.onmouseleave=i.resumeTimer}}).fire({icon:"error",title:"Sorry, server not answer"})}finally{u()}}function V(e,o){const t=e.map(r=>x(r)).join(""),s=o.split(" ");let n=s.length-1,a=s[n];const w=`<h2 class="book-block-title">${s.splice(0,n).join(" ")}&nbsp;<span class="book-block-title-accent">${a}</span>
    </h2>
    <ul class="category-books-wrapper">${t}</ul>`;f.innerHTML=w,document.querySelectorAll(".book-card").forEach(r=>r.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
