import{a as m,b as u,c as h,d as g,i as k}from"./assets/dark-light-switcher-40fd72c4.js";import{S as n}from"./assets/vendor-4589f348.js";const l=document.querySelector(".books-list"),c=document.querySelector(".no-books"),b=JSON.parse(localStorage.getItem("shoppingList"))??[];l.insertAdjacentHTML("beforeend",y(b));function f(o){const t=o.currentTarget.dataset.bookId,i=JSON.parse(localStorage.getItem("shoppingList"))||[],e=[];i.forEach(s=>{s._id!==t&&e.push(s)}),localStorage.setItem("shoppingList",JSON.stringify(e)),n.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=n.stopTimer,s.onmouseleave=n.resumeTimer}}).fire({icon:"success",title:"Book was deleted successfully"}),localStorage.setItem("shoppingList",JSON.stringify(e)),setTimeout(()=>{location.reload()},1500)}const $=[...l.children];$.forEach(o=>{o.children[2].addEventListener("click",f)});l.children.length===0?c.classList.remove("hidden"):c.classList.add("hidden");function y(o){const t="Description will be added sooner";return o.map(({_id:i,book_image:e,title:a,list_name:s,description:p,author:d,buy_links:r})=>`
      <li class="shopping-element">
        <img
          src="${e}"
          alt="${a}"
          class="book-image"
        />
        <div class="text-content">
          <h2 class="book-title">${a}</h2>
          <p class="book-category">${s}</p>
          <p class="book-description">
            ${p||t}
          </p>
          <div class="author-buy">
            <p class="author-name">${d}</p>
            <ul class="buy-links">
              <li class="buy-link">
                <a href="${r[0].url}" class="amazon-link book-link ">
                  <img
                    src="${m}"
                    srcset="${u} 2x"
                    alt="Amazon"
                    width="32"
                    height="11"
                    class="buy-amazon"
                  />
                </a>
              </li>
              <li class="buy-link">
                <a href="${r[1].url}" class="apple-book-link book-link ">
                  <img
                    src="${h}"
                    srcset="${g} 2x"
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
            <use href="${k}#trash"></use>
          </svg>
        </button>
      </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
