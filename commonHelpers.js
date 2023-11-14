var I=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var l=(t,o,e)=>(I(t,o,"read from private field"),e?e.call(t):o.get(t)),g=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};import{i as x,a as T,b as _,c as M,d as N}from"./assets/dark-light-switcher-15de1be2.js";import{a as u,N as S,n as O}from"./assets/vendor-83fc1255.js";function q(t){const o=document.getElementById("bookModal");o.innerHTML="";const e=document.createElement("div");e.classList.add("modal-content"),e.innerHTML=`
        <button id="closeModal">
            <svg width="24" height="24" class="close-modal-icon">
                <use href="${x}#x-close"></use>
            </svg>
        </button>

        <div class="book-modal-info">
            <img class="book-modal-img" src="${t.book_image}" alt="Book cover for ${t.title}" loading="lazy" />
            
            <div>
                <h3 class="book-modal-title">${t.title}</h3>
                <p class="book-modal-author">${t.author}</p>
                <p class="book-modal-description">${t.description}</p>
                
                <div class="book-link-wrap">
                    <a href="${t.buy_links[0].url}" target="_blank" class="book-link amazon-link">
                        <img src="${T}" srcset="${_} 2x"  alt="Amazon link">
                    </a>
                    
                    <a href="${t.buy_links[1].url}" target="_blank" class="book-link">
                        <img src="${M}" srcset="${N} 2x" alt="Apple Book link">
                    </a>
                </div>
            </div>
        </div>

        <button id="addToShoppingList">Add to Shopping List</button>

        <p id="congratulationsMessage" style="display: none;">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </p>
    `,o.appendChild(e),o.style.display="block",document.body.style.overflow="hidden",document.getElementById("closeModal").addEventListener("click",()=>{n()});const i=document.getElementById("addToShoppingList");i.addEventListener("click",p),m(),document.addEventListener("keydown",a=>{a.key==="Escape"&&n()}),o.addEventListener("click",a=>{a.target===o&&n()});function n(){o.style.display="none",document.body.style.overflow="auto"}function p(){const a=JSON.parse(localStorage.getItem("shoppingList"))||[];if(!a.some(r=>r.title===t.title))a.push(t),localStorage.setItem("shoppingList",JSON.stringify(a));else{const r=a.filter(A=>A.title!==t.title);localStorage.setItem("shoppingList",JSON.stringify(r))}m()}function m(){(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(r=>r.title===t.title)?(i.innerText="Remove from Shopping List",document.getElementById("congratulationsMessage").style.display="block"):(i.innerText="Add to Shopping List",document.getElementById("congratulationsMessage").style.display="none")}}var c,h,b,f;class ${constructor(){g(this,c,"https://books-backend.p.goit.global/books");g(this,h,"/top-books");g(this,b,"/category-list");g(this,f,"/category?category=")}async getBooks(){return(await u.get(`${l(this,c)}${l(this,h)}`)).data}async getAllCategories(){return(await u.get(`${l(this,c)}${l(this,b)}`)).data}async getBookById(o){return(await u.get(`${l(this,c)}/${o}`)).data}async getBooksFromCategory(o){return(await u.get(`${l(this,c)}${l(this,f)}${o}`)).data}}c=new WeakMap,h=new WeakMap,b=new WeakMap,f=new WeakMap;const L=document.querySelector(".loader-backdrop");function k(){L==null||L.classList.toggle("is-hidden")}const R=document.querySelector(".book-block-list");function v(t){return`<li class="book-card" id="${t._id}">
        <div class="book-card-box" data-book-info='${JSON.stringify(t)}'>
            <img class="book-card-img" src="${t.book_image}" alt="Book cover ${t.title}" loading="lazy" />
            <p class="book-card-overlay">quick view</p>
        </div>
        <h3 class="book-card-title">${t.title}</h3>
        <p class="book-card-text">${t.author}</p>
    </li>`}function H(t){const o=[];for(let e=0;e<t.length;e+=1){const s=t[e].books.map((n,p)=>{if(p<5)return v(n)}).join(""),i=`<h2 class="best-category-title">${t[e].list_name}</h2>
    <ul class="best-category-list">${s}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${t[e].list_name}" type="button">See more</button></div>`;o.push(i)}R.innerHTML=o.join("")}const z=new $;async function E(){k();try{const t=await z.getBooks();t.length===0&&S.Notify.warning("Sorry, there are no bestsellers books yet"),H(t),document.querySelectorAll(".book-card-box").forEach(e=>{e.addEventListener("click",()=>{const s=JSON.parse(e.dataset.bookInfo);q(s)})})}catch{S.Notify.failure("Something went wrong!")}finally{k()}}E();const J=(t,o)=>{const e=document.createElement("li");e.classList.add("categories-item");const s=`categoryRadio${o+1}`,i=document.createElement("input");i.setAttribute("type","radio"),i.setAttribute("name","category"),i.setAttribute("id",s),i.classList.add("categories-button");const n=document.createElement("label");return n.textContent=t.list_name,n.setAttribute("for",s),n.classList.add("categories-label"),e.appendChild(i),e.appendChild(n),e};async function U(){try{const t=await new $().getAllCategories();t.sort((e,s)=>e.list_name.localeCompare(s.list_name));const o=document.querySelector(".categories-list");t.forEach((e,s)=>{const i=J(e,s);o.appendChild(i)})}catch{O.Notify.failure("Something went wrong!")}}U();const F=new $,y=document.querySelector(".book-block-list"),w=document.querySelector(".book-block-title"),B=document.querySelector(".categories-list");y==null||y.addEventListener("click",j);function j(t){t.preventDefault(),window.innerWidth>=1440?window.scrollTo(window.innerHeight,0):window.innerWidth>=768&&window.innerWidth<1440?window.scrollTo(window.innerHeight,500):window.scrollTo(window.innerHeight,820),document.querySelectorAll("label").forEach(e=>{e.textContent===t.target.name?e.classList.add("active"):e.classList.remove("active")}),t.target.nodeName==="BUTTON"&&(w.style.display="none",C(t.target.name))}B==null||B.addEventListener("click",D);function D(t){t.preventDefault(),document.querySelectorAll("label").forEach(s=>{s===t.target&&s.classList.add("active"),s.classList.remove("active")});const e=t.target;e.nodeName==="LABEL"&&e.textContent!=="All Categories"?(e.classList.add("active"),w.style.display="none",C(e.textContent)):e.textContent==="All Categories"&&(w.style.display="block",e.classList.add("active"),E())}async function C(t){try{k();const o=await F.getBooksFromCategory(t);G(o,t)}catch{S.Notify.failure("Sorry, no books in this category")}finally{k()}}function G(t,o){const e=t.map(d=>v(d)).join(""),s=o.split(" ");let i=s.length-1,n=s[i];const m=`<h2 class="book-block-title">${s.splice(0,i).join(" ")}&nbsp;<span class="book-block-title-accent">${n}</span>
    </h2>
    <ul class="category-books-wrapper">${e}</ul>`;y.innerHTML=m,document.querySelectorAll(".book-card").forEach(d=>d.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
