var u=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var s=(t,o,e)=>(u(t,o,"read from private field"),e?e.call(t):o.get(t)),r=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};import"./assets/index-043558ef.js";import{a as i,N as g}from"./assets/vendor-77e6b4aa.js";var a,n,c,l;class B{constructor(){r(this,a,"https://books-backend.p.goit.global/books");r(this,n,"/top-books");r(this,c,"/category-list");r(this,l,"/category?category=")}async getBooks(){return(await i.get(`${s(this,a)}${s(this,n)}`)).data}async getAllCategories(){return(await i.get(`${s(this,a)}${s(this,c)}`)).data}async getBookById(o){return(await i.get(`${s(this,a)}/${o}`)).data}async getBooksFromCategory(o){return(await i.get(`${s(this,a)}${s(this,l)}${o}`)).data}}a=new WeakMap,n=new WeakMap,c=new WeakMap,l=new WeakMap;const h=document.querySelector(".book-block-list");function m(t){return`<li class="book-card" id="${t._id}">
    <div class="book-card-box">
    <img class="book-card-img" src="${t.book_image}" alt="Book cover ${t.title}" loading="lazy" />
    </div>
    <h3 class="book-card-title">${t.title}</h3>
    <p class="book-card-text">${t.author}</p>
    </li>`}function $(t){const o=[];for(let e=0;e<t.length;e+=1){const k=t[e].books.map((y,d)=>{if(d<5)return m(y)}).join(""),b=`<h2 class="best-category-title">${t[e].list_name}</h2>
    <ul class="best-category-list">${k}</ul>
    <div class="see-more-btn-box">
    <button class="see-more-btn" name="${t[e].list_name}" type="button">See more</button></div>`;o.push(b)}h.innerHTML=o.join("")}const p=new B;async function f(){try{const t=await p.getBooks();t.length===0&&g.Notify.warning("Sorry, there are no bestsellers books yet"),$(t)}catch{g.Notify.failure("Something went wrong!")}}f();
//# sourceMappingURL=commonHelpers.js.map
