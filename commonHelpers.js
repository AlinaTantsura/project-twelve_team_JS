var I=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var c=(t,o,e)=>(I(t,o,"read from private field"),e?e.call(t):o.get(t)),p=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};import"./assets/mobile-menu-5b3e2d05.js";import{a as u,N as w,n as T}from"./assets/vendor-83fc1255.js";function _(t){const o=document.getElementById("bookModal");o.innerHTML="";const e=document.createElement("div");e.classList.add("modal-content"),e.innerHTML=`
            <button id="closeModal">
    <svg width="24" height="24">
      <use href="./img/InlineSprite.svg#x-close"></use>
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
          <img src="/img/amazon@1x-min.png" srcset="/img/amazon@2x-min.png 2x" alt="Amazon link">
        </a>
        
        <a href="${t.buy_links[1].url}" target="_blank" class="book-link">
          <img src="/img/appleBook@1x-min.png" srcset="/img/appleBook@2x-min.png 2x" alt="Apple Book link">
        </a>
      </div>
    </div>
  </div>

  <button id="addToShoppingList">Add to Shopping List</button>

  <p id="congratulationsMessage" style="display: none;">
    Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
  </p>
    `,o.appendChild(e),o.style.display="block",document.getElementById("closeModal").addEventListener("click",()=>{i()});const n=document.getElementById("addToShoppingList");n.addEventListener("click",d),m(),document.addEventListener("keydown",a=>{a.key==="Escape"&&i()});function i(){o.style.display="none"}function d(){const a=JSON.parse(localStorage.getItem("shoppingList"))||[],l=a.some(g=>g.title===t.title);if(console.log("Existing Shopping List:",a),console.log("Is Book in Shopping List?",l),!l)a.push(t),localStorage.setItem("shoppingList",JSON.stringify(a));else{const g=a.filter(A=>A.title!==t.title);localStorage.setItem("shoppingList",JSON.stringify(g))}m()}function m(){const l=(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(g=>g.title===t.title);l?(n.innerText="Remove from Shopping List",document.getElementById("congratulationsMessage").style.display="block"):(n.innerText="Add to Shopping List",document.getElementById("congratulationsMessage").style.display="none"),console.log("Updated Button Text:",n.innerText),console.log("Is Book in Shopping List?",l)}}var r,b,f,L;class h{constructor(){p(this,r,"https://books-backend.p.goit.global/books");p(this,b,"/top-books");p(this,f,"/category-list");p(this,L,"/category?category=")}async getBooks(){return(await u.get(`${c(this,r)}${c(this,b)}`)).data}async getAllCategories(){return(await u.get(`${c(this,r)}${c(this,f)}`)).data}async getBookById(o){return(await u.get(`${c(this,r)}/${o}`)).data}async getBooksFromCategory(o){return(await u.get(`${c(this,r)}${c(this,L)}${o}`)).data}}r=new WeakMap,b=new WeakMap,f=new WeakMap,L=new WeakMap;const B=document.querySelector(".loader-backdrop");function k(){B==null||B.classList.toggle("is-hidden")}const M=document.querySelector(".book-block-list");function v(t){return`<li class="book-card" id="${t._id}">
        <div class="book-card-box" data-book-info='${JSON.stringify(t)}'>
            <img class="book-card-img" src="${t.book_image}" alt="Book cover ${t.title}" loading="lazy" />
        </div>
        <h3 class="book-card-title">${t.title}</h3>
        <p class="book-card-text">${t.author}</p>
    </li>`}function N(t){const o=[];for(let e=0;e<t.length;e+=1){const s=t[e].books.map((i,d)=>{if(d<5)return v(i)}).join(""),n=`<h2 class="best-category-title">${t[e].list_name}</h2>
    <ul class="best-category-list">${s}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${t[e].list_name}" type="button">See more</button></div>`;o.push(n)}M.innerHTML=o.join("")}const O=new h;async function $(){k();try{const t=await O.getBooks();t.length===0&&w.Notify.warning("Sorry, there are no bestsellers books yet"),N(t),document.querySelectorAll(".book-card-box").forEach(e=>{e.addEventListener("click",()=>{const s=JSON.parse(e.dataset.bookInfo);_(s)})})}catch{w.Notify.failure("Something went wrong!")}finally{k()}}$();const C=(t,o)=>{const e=document.createElement("li");e.classList.add("categories-item");const s=`categoryRadio${o+1}`,n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","category"),n.setAttribute("id",s),n.classList.add("categories-button");const i=document.createElement("label");return i.textContent=t.list_name,i.setAttribute("for",s),i.classList.add("categories-label"),e.appendChild(n),e.appendChild(i),e};async function q(){const t=await new h().getAllCategories();t.sort((e,s)=>e.list_name.localeCompare(s.list_name));const o=document.querySelector(".categories-list");t.forEach((e,s)=>{const n=C(e,s);o.appendChild(n)});try{const e=await new h().getAllCategories();e.sort((n,i)=>n.list_name.localeCompare(i.list_name));const s=document.querySelector(".categories-list");e.forEach((n,i)=>{const d=C(n,i);s.appendChild(d)})}catch{T.Notify.failure("Something went wrong!")}}q();const R=new h,y=document.querySelector(".book-block-list"),E=document.querySelector(".book-block-title"),S=document.querySelector(".categories-list");y==null||y.addEventListener("click",H);function H(t){t.preventDefault(),window.innerWidth>=1440?window.scrollTo(window.innerHeight,0):window.innerWidth>=768&&window.innerWidth<1440?window.scrollTo(window.innerHeight,500):window.scrollTo(window.innerHeight,820),document.querySelectorAll("label").forEach(e=>{e.textContent===t.target.name?e.classList.add("active"):e.classList.remove("active")}),t.target.nodeName==="BUTTON"&&(E.style.display="none",x(t.target.name))}S==null||S.addEventListener("click",J);function J(t){t.preventDefault(),document.querySelectorAll("label").forEach(s=>{s===t.target&&s.classList.add("active"),s.classList.remove("active")});const e=t.target;e.nodeName==="LABEL"&&e.textContent!=="All Categories"?(e.classList.add("active"),E.style.display="none",x(e.textContent)):e.textContent==="All Categories"&&(E.style.display="block",e.classList.add("active"),$())}async function x(t){try{k();const o=await R.getBooksFromCategory(t);z(o,t)}catch{w.Notify.failure("Sorry, no books in this category")}finally{k()}}function z(t,o){const e=t.map(l=>v(l)).join(""),s=o.split(" ");let n=s.length-1,i=s[n];const m=`<h2 class="book-block-title">${s.splice(0,n).join(" ")}&nbsp;<span class="book-block-title-accent">${i}</span>
    </h2>
    <ul class="category-books-wrapper">${e}</ul>`;y.innerHTML=m,document.querySelectorAll(".book-card").forEach(l=>l.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
