import{i as d,a as h}from"./assets/dark-light-switcher-3384f36e.js";const l=document.querySelector(".books-list");document.querySelector(".delete-form");const a=document.querySelector(".no-books"),g=JSON.parse(localStorage.getItem("shoppingList"));l.insertAdjacentHTML("beforeend",k(g));const u=[...l.children];u.forEach(s=>{s.children[2].addEventListener("click",m)});function m(s){const t=s.currentTarget.dataset.bookId,i=JSON.parse(localStorage.getItem("shoppingList"))||[],o=[];i.filter(e=>{e._id!==t&&o.push(e)}),console.log(o),localStorage.setItem("shoppingList",JSON.stringify(o))}l.children.length===0?a.classList.remove("hidden"):a.classList.add("hidden");function k(s){const t="Description will be added sooner";return s.map(({_id:i,book_image:o,title:e,list_name:c,description:r,author:p,buy_links:n})=>`
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
                <a href="${n[0].url}" class="amazon-link book-link ">
                  <img
                    src="${d}"
                    alt="Amazon"
                    width="32"
                    height="11"
                    class="buy-amazon"
                  />
                </a>
              </li>
              <li class="buy-link">
                <a href="${n[1].url}" class="apple-book-link book-link ">
                  <img
                    src="${h}"
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
            <use href="./img/InlineSprite.svg#trash-min"></use>
          </svg>
        </button>
      </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
