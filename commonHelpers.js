var x=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var l=(t,o,e)=>(x(t,o,"read from private field"),e?e.call(t):o.get(t)),p=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};import{i as T,a as _,b as M,c as N,d as O}from"./assets/dark-light-switcher-4a551f72.js";import{a as u,N as w,n as q}from"./assets/vendor-83fc1255.js";function R(t){const o=document.getElementById("bookModal");o.innerHTML="";const e=document.createElement("div");e.classList.add("modal-content"),e.innerHTML=`
        <button id="closeModal">
            <svg width="24" height="24" class="close-modal-icon">
                <use href="${T}#x-close"></use>
            </svg>
        </button>

        <div class="book-modal-info">
            <img class="book-modal-img" src="${t.book_image}" alt="Book cover for ${t.title}" loading="lazy" />
            
            <div>
                <h3 class="book-modal-title">${t.title}</h3>
                <p class="book-modal-author">${t.author}</p>
                <p class="book-modal-description">${t.description}</p>
                
                <div class="book-link-wrap">
                    <a href="${t.buy_links[0].url}" target="_blank" class="book-link">
                        <img src="${_}" srcset="${M} 2x"  alt="Amazon link">
                    </a>
                    
                    <a href="${t.buy_links[1].url}" target="_blank" class="book-link">
                        <img src="${N}" srcset="${O} 2x" alt="Apple Book link">
                    </a>
                </div>
            </div>
        </div>

        <button id="addToShoppingList">Add to Shopping List</button>

        <p id="congratulationsMessage" style="display: none;">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </p>
    `,o.appendChild(e),o.style.display="block",document.body.style.overflow="hidden",document.getElementById("closeModal").addEventListener("click",()=>{n()});const i=document.getElementById("addToShoppingList");i.addEventListener("click",r),m(),document.addEventListener("keydown",a=>{a.key==="Escape"&&n()}),o.addEventListener("click",a=>{a.target===o&&n()});function n(){o.style.display="none",document.body.style.overflow="auto"}function r(){const a=JSON.parse(localStorage.getItem("shoppingList"))||[];if(!a.some(d=>d.title===t.title))a.push(t),localStorage.setItem("shoppingList",JSON.stringify(a));else{const d=a.filter(I=>I.title!==t.title);localStorage.setItem("shoppingList",JSON.stringify(d))}m()}function m(){(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(d=>d.title===t.title)?(i.innerText="Remove from Shopping List",document.getElementById("congratulationsMessage").style.display="block"):(i.innerText="Add to Shopping List",document.getElementById("congratulationsMessage").style.display="none")}}var c,b,f,L;class k{constructor(){p(this,c,"https://books-backend.p.goit.global/books");p(this,b,"/top-books");p(this,f,"/category-list");p(this,L,"/category?category=")}async getBooks(){return(await u.get(`${l(this,c)}${l(this,b)}`)).data}async getAllCategories(){return(await u.get(`${l(this,c)}${l(this,f)}`)).data}async getBookById(o){return(await u.get(`${l(this,c)}/${o}`)).data}async getBooksFromCategory(o){return(await u.get(`${l(this,c)}${l(this,L)}${o}`)).data}}c=new WeakMap,b=new WeakMap,f=new WeakMap,L=new WeakMap;const B=document.querySelector(".loader-backdrop");function h(){B==null||B.classList.toggle("is-hidden")}const H=document.querySelector(".book-block-list");function $(t){return`<li class="book-card" id="${t._id}">
        <div class="book-card-box" data-book-info='${JSON.stringify(t)}'>
            <img class="book-card-img" src="${t.book_image}" alt="Book cover ${t.title}" loading="lazy" />
            <p class="book-card-overlay">quick view</p>
        </div>
        <h3 class="book-card-title">${t.title}</h3>
        <p class="book-card-text">${t.author}</p>
    </li>`}function J(t){const o=[];for(let e=0;e<t.length;e+=1){const s=t[e].books.map((n,r)=>{if(r<5)return $(n)}).join(""),i=`<h2 class="best-category-title">${t[e].list_name}</h2>
    <ul class="best-category-list">${s}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${t[e].list_name}" type="button">See more</button></div>`;o.push(i)}H.innerHTML=o.join("")}const U=new k;async function v(){h();try{const t=await U.getBooks();t.length===0&&w.Notify.warning("Sorry, there are no bestsellers books yet"),J(t),document.querySelectorAll(".book-card-box").forEach(e=>{e.addEventListener("click",()=>{const s=JSON.parse(e.dataset.bookInfo);R(s)})})}catch{w.Notify.failure("Something went wrong!")}finally{h()}}v();const C=(t,o)=>{const e=document.createElement("li");e.classList.add("categories-item");const s=`categoryRadio${o+1}`,i=document.createElement("input");i.setAttribute("type","radio"),i.setAttribute("name","category"),i.setAttribute("id",s),i.classList.add("categories-button");const n=document.createElement("label");return n.textContent=t.list_name,n.setAttribute("for",s),n.classList.add("categories-label"),e.appendChild(i),e.appendChild(n),e};async function z(){const t=await new k().getAllCategories();t.sort((e,s)=>e.list_name.localeCompare(s.list_name));const o=document.querySelector(".categories-list");t.forEach((e,s)=>{const i=C(e,s);o.appendChild(i)});try{const e=await new k().getAllCategories();e.sort((i,n)=>i.list_name.localeCompare(n.list_name));const s=document.querySelector(".categories-list");e.forEach((i,n)=>{const r=C(i,n);s.appendChild(r)})}catch{q.Notify.failure("Something went wrong!")}}z();const F=new k,y=document.querySelector(".book-block-list"),E=document.querySelector(".book-block-title"),S=document.querySelector(".categories-list");y==null||y.addEventListener("click",j);function j(t){t.preventDefault(),window.innerWidth>=1440?window.scrollTo(window.innerHeight,0):window.innerWidth>=768&&window.innerWidth<1440?window.scrollTo(window.innerHeight,500):window.scrollTo(window.innerHeight,820),document.querySelectorAll("label").forEach(e=>{e.textContent===t.target.name?e.classList.add("active"):e.classList.remove("active")}),t.target.nodeName==="BUTTON"&&(E.style.display="none",A(t.target.name))}S==null||S.addEventListener("click",D);function D(t){t.preventDefault(),document.querySelectorAll("label").forEach(s=>{s===t.target&&s.classList.add("active"),s.classList.remove("active")});const e=t.target;e.nodeName==="LABEL"&&e.textContent!=="All Categories"?(e.classList.add("active"),E.style.display="none",A(e.textContent)):e.textContent==="All Categories"&&(E.style.display="block",e.classList.add("active"),v())}async function A(t){try{h();const o=await F.getBooksFromCategory(t);G(o,t)}catch{w.Notify.failure("Sorry, no books in this category")}finally{h()}}function G(t,o){const e=t.map(g=>$(g)).join(""),s=o.split(" ");let i=s.length-1,n=s[i];const m=`<h2 class="book-block-title">${s.splice(0,i).join(" ")}&nbsp;<span class="book-block-title-accent">${n}</span>
    </h2>
    <ul class="category-books-wrapper">${e}</ul>`;y.innerHTML=m,document.querySelectorAll(".book-card").forEach(g=>g.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
