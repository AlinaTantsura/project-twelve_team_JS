var L=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var l=(t,o,e)=>(L(t,o,"read from private field"),e?e.call(t):o.get(t)),f=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};import{i as Z,a as S}from"./assets/dark-light-switcher-3384f36e.js";import{a as y,N as C,n as F}from"./assets/vendor-83fc1255.js";const U="/project-twelve_team_JS/assets/InlineSprite-82bbc1f9.svg",D="data:image/png;base64,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",G="data:image/png;base64,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";function M(t){const o=document.getElementById("bookModal");o.innerHTML="";const e=document.createElement("div");e.classList.add("modal-content"),e.innerHTML=`
        <button id="closeModal">
            <svg width="24" height="24">
                <use href="${U}#x-close"></use>
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
                        <img src="${Z}" srcset="${G} 2x"  alt="Amazon link">
                    </a>
                    
                    <a href="${t.buy_links[1].url}" target="_blank" class="book-link">
                        <img src="${S}" srcset="${D} 2x" alt="Apple Book link">
                    </a>
                </div>
            </div>
        </div>

        <button id="addToShoppingList">Add to Shopping List</button>

        <p id="congratulationsMessage" style="display: none;">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </p>
    `,o.appendChild(e),o.style.display="block",document.body.style.overflow="hidden",document.getElementById("closeModal").addEventListener("click",()=>{n()});const s=document.getElementById("addToShoppingList");s.addEventListener("click",r),g(),document.addEventListener("keydown",A=>{A.key==="Escape"&&n()}),o.addEventListener("click",A=>{A.target===o&&n()});function n(){o.style.display="none",document.body.style.overflow="auto"}function r(){const A=JSON.parse(localStorage.getItem("shoppingList"))||[],a=A.some(d=>d.title===t.title);if(console.log("Existing Shopping List:",A),console.log("Is Book in Shopping List?",a),!a)A.push(t),localStorage.setItem("shoppingList",JSON.stringify(A));else{const d=A.filter(x=>x.title!==t.title);localStorage.setItem("shoppingList",JSON.stringify(d))}g()}function g(){const a=(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(d=>d.title===t.title);a?(s.innerText="Remove from Shopping List",document.getElementById("congratulationsMessage").style.display="block"):(s.innerText="Add to Shopping List",document.getElementById("congratulationsMessage").style.display="none"),console.log("Updated Button Text:",s.innerText),console.log("Is Book in Shopping List?",a)}}var c,m,P,H;class u{constructor(){f(this,c,"https://books-backend.p.goit.global/books");f(this,m,"/top-books");f(this,P,"/category-list");f(this,H,"/category?category=")}async getBooks(){return(await y.get(`${l(this,c)}${l(this,m)}`)).data}async getAllCategories(){return(await y.get(`${l(this,c)}${l(this,P)}`)).data}async getBookById(o){return(await y.get(`${l(this,c)}/${o}`)).data}async getBooksFromCategory(o){return(await y.get(`${l(this,c)}${l(this,H)}${o}`)).data}}c=new WeakMap,m=new WeakMap,P=new WeakMap,H=new WeakMap;const I=document.querySelector(".loader-backdrop");function E(){I==null||I.classList.toggle("is-hidden")}const O=document.querySelector(".book-block-list");function h(t){return`<li class="book-card" id="${t._id}">
        <div class="book-card-box" data-book-info='${JSON.stringify(t)}'>
            <img class="book-card-img" src="${t.book_image}" alt="Book cover ${t.title}" loading="lazy" />
            <p class="book-card-overlay">quick view</p>
        </div>
        <h3 class="book-card-title">${t.title}</h3>
        <p class="book-card-text">${t.author}</p>
    </li>`}function T(t){const o=[];for(let e=0;e<t.length;e+=1){const i=t[e].books.map((n,r)=>{if(r<5)return h(n)}).join(""),s=`<h2 class="best-category-title">${t[e].list_name}</h2>
    <ul class="best-category-list">${i}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${t[e].list_name}" type="button">See more</button></div>`;o.push(s)}O.innerHTML=o.join("")}const Y=new u;async function v(){E();try{const t=await Y.getBooks();t.length===0&&C.Notify.warning("Sorry, there are no bestsellers books yet"),T(t),document.querySelectorAll(".book-card-box").forEach(e=>{e.addEventListener("click",()=>{const i=JSON.parse(e.dataset.bookInfo);M(i)})})}catch{C.Notify.failure("Something went wrong!")}finally{E()}}v();const b=(t,o)=>{const e=document.createElement("li");e.classList.add("categories-item");const i=`categoryRadio${o+1}`,s=document.createElement("input");s.setAttribute("type","radio"),s.setAttribute("name","category"),s.setAttribute("id",i),s.classList.add("categories-button");const n=document.createElement("label");return n.textContent=t.list_name,n.setAttribute("for",i),n.classList.add("categories-label"),e.appendChild(s),e.appendChild(n),e};async function q(){const t=await new u().getAllCategories();t.sort((e,i)=>e.list_name.localeCompare(i.list_name));const o=document.querySelector(".categories-list");t.forEach((e,i)=>{const s=b(e,i);o.appendChild(s)});try{const e=await new u().getAllCategories();e.sort((s,n)=>s.list_name.localeCompare(n.list_name));const i=document.querySelector(".categories-list");e.forEach((s,n)=>{const r=b(s,n);i.appendChild(r)})}catch{F.Notify.failure("Something went wrong!")}}q();const Q=new u,p=document.querySelector(".book-block-list"),k=document.querySelector(".book-block-title"),B=document.querySelector(".categories-list");p==null||p.addEventListener("click",R);function R(t){t.preventDefault(),window.innerWidth>=1440?window.scrollTo(window.innerHeight,0):window.innerWidth>=768&&window.innerWidth<1440?window.scrollTo(window.innerHeight,500):window.scrollTo(window.innerHeight,820),document.querySelectorAll("label").forEach(e=>{e.textContent===t.target.name?e.classList.add("active"):e.classList.remove("active")}),t.target.nodeName==="BUTTON"&&(k.style.display="none",w(t.target.name))}B==null||B.addEventListener("click",N);function N(t){t.preventDefault(),document.querySelectorAll("label").forEach(i=>{i===t.target&&i.classList.add("active"),i.classList.remove("active")});const e=t.target;e.nodeName==="LABEL"&&e.textContent!=="All Categories"?(e.classList.add("active"),k.style.display="none",w(e.textContent)):e.textContent==="All Categories"&&(k.style.display="block",e.classList.add("active"),v())}async function w(t){try{E();const o=await Q.getBooksFromCategory(t);X(o,t)}catch{C.Notify.failure("Sorry, no books in this category")}finally{E()}}function X(t,o){const e=t.map(a=>h(a)).join(""),i=o.split(" ");let s=i.length-1,n=i[s];const g=`<h2 class="book-block-title">${i.splice(0,s).join(" ")}&nbsp;<span class="book-block-title-accent">${n}</span>
    </h2>
    <ul class="category-books-wrapper">${e}</ul>`;p.innerHTML=g,document.querySelectorAll(".book-card").forEach(a=>a.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
