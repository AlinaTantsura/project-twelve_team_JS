import{a as b,b as k,c as m,d as u,i as f}from"./assets/dark-light-switcher-15de1be2.js";const t=document.querySelector(".books-list"),c=document.querySelector(".no-books"),l=JSON.parse(localStorage.getItem("shoppingList"))??[];t.insertAdjacentHTML("beforeend",p(l));const r=l.length;let $=r;function L(s){location.reload();const i=s.currentTarget.dataset.bookId,n=JSON.parse(localStorage.getItem("shoppingList"))||[],e=[];n.forEach(o=>{o._id!==i&&e.push(o)}),localStorage.setItem("shoppingList",JSON.stringify(e))}r!==$&&t.insertAdjacentHTML("beforeend",p(l));const y=[...t.children];y.forEach(s=>{s.children[2].addEventListener("click",L)});t.children.length===0?c.classList.remove("hidden"):c.classList.add("hidden");function p(s){const i="Description will be added sooner";return s.map(({_id:n,book_image:e,title:o,list_name:d,description:h,author:g,buy_links:a})=>`
      <li class="shopping-element">
        <img
          src="${e}"
          alt="${o}"
          class="book-image"
        />
        <div class="text-content">
          <h2 class="book-title">${o}</h2>
          <p class="book-category">${d}</p>
          <p class="book-description">
            ${h||i}
          </p>
          <div class="author-buy">
            <p class="author-name">${g}</p>
            <ul class="buy-links">
              <li class="buy-link">
                <a href="${a[0].url}" class="amazon-link book-link ">
                  <img
                    src="${b}"
                    srcset="${k} 2x"
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
                    src="${m}"
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
        <button type="submit" class="delete-item" data-book-id="${n}">
          <svg class="remove-bin" width="16" height="16">
            <use href="${f}#trash"></use>
          </svg>
        </button>
      </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
