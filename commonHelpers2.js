import{a as h,b as k,c as b,d as f,i as L}from"./assets/dark-light-switcher-c180d8ea.js";import{S as a}from"./assets/vendor-4589f348.js";const n=document.querySelector(".books-list"),p=document.querySelector(".no-books"),$=JSON.parse(localStorage.getItem("shoppingList"))??[],o=document.querySelector(".loader-backdrop");o==null||o.classList.toggle("is-hidden");n.insertAdjacentHTML("beforeend",v($)||"");function y(e){const i=e.currentTarget.dataset.bookId,l=JSON.parse(localStorage.getItem("shoppingList"))||[],t=[];l.forEach(s=>{s._id!==i&&t.push(s)}),localStorage.setItem("shoppingList",JSON.stringify(t)),a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:s=>{s.onmouseenter=a.stopTimer,s.onmouseleave=a.resumeTimer}}).fire({icon:"success",title:"Book was deleted successfully"}),localStorage.setItem("shoppingList",JSON.stringify(t)),setTimeout(()=>{location.reload()},1500)}function d(){o==null||o.classList.toggle("is-hidden")}const S=[...n.children];S.forEach(e=>{e.children[2].addEventListener("click",y)});n.children.length===0?(p.classList.remove("hidden"),setTimeout(()=>{d()},1e3)):(p.classList.add("hidden"),setTimeout(()=>{d()},1e3));function v(e){const i="Description will be added sooner";return e.map(({_id:t,book_image:r,title:s,list_name:m,description:u,author:g,buy_links:c})=>`
      <li class="shopping-element">
        <img
          src="${r}"
          alt="${s}"
          class="book-image"
        />
        <div class="text-content">
          <h2 class="book-title">${s}</h2>
          <p class="book-category">${m}</p>
          <p class="book-description">
            ${u||i}
          </p>
          <div class="author-buy">
            <p class="author-name">${g}</p>
            <ul class="buy-links">
              <li class="buy-link">
                <a href="${c[0].url}" target="_blank" class="amazon-link book-link ">
                  <img
                    src="${h}"
                    srcset="${k} 2x"
                    alt="Amazon"
                    width="32"
                    height="11"
                    class="buy-amazon"
                  />
                </a>
              </li>
              <li class="buy-link">
                <a href="${c[1].url}" target="_blank" class="apple-book-link book-link ">
                  <img
                    src="${b}"
                    srcset="${f} 2x"
                    alt="Apple Books"
                    width="16"
                    class="buy-apple"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button type="submit" class="delete-item" data-book-id="${t}">
          <svg class="remove-bin" width="16" height="16">
            <use href="${L}#trash"></use>
          </svg>
        </button>
      </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
