import{a as d,b as h,c as g,d as u,i as m}from"./assets/dark-light-switcher-4a551f72.js";const l=document.querySelector(".books-list");document.querySelector(".delete-form");const n=document.querySelector(".no-books"),k=JSON.parse(localStorage.getItem("shoppingList"));l.insertAdjacentHTML("beforeend",f(k));const b=[...l.children];b.forEach(s=>{s.children[2].addEventListener("click",$)});function $(s){const t=s.currentTarget.dataset.bookId,i=JSON.parse(localStorage.getItem("shoppingList"))||[],o=[];i.filter(e=>{e._id!==t&&o.push(e)}),console.log(o),localStorage.setItem("shoppingList",JSON.stringify(o))}l.children.length===0?n.classList.remove("hidden"):n.classList.add("hidden");function f(s){const t="Description will be added sooner";return s.map(({_id:i,book_image:o,title:e,list_name:c,description:r,author:p,buy_links:a})=>`
      <li class="shopping-element">
        <img
          src="${o}"
          alt="${e}"
          class="book-image"
        />
        <div class="text-content">
          <h2 class="book-title">${e}</h2>
          <p class="book-category">${c}</p>
          <p class="book-description">
            ${r||t}
          </p>
          <div class="author-buy">
            <p class="author-name">${p}</p>
            <ul class="buy-links">
              <li class="buy-link">
                <a href="${a[0].url}" class="amazon-link book-link ">
                  <img
                    src="${d}"
                    srcset="${h} 2x"
                    alt="Amazon"
                    width="32"
                    height="11"
                    class="buy-amazon"
                  />
                </a>
              </li>
              <li class="buy-link">
                <a href="${a[1].url}" class="apple-book-link book-link ">
                  <img
                    src="${g}"
                    srcset="${u} 2x"
                    alt="Apple Books"
                    width="16"
                    class="buy-apple"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button type="submit" class="delete-item" data-book-id="${i}">
          <svg class="remove-bin" width="16" height="16">
            <use href="${m}#trash"></use>
          </svg>
        </button>
      </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
