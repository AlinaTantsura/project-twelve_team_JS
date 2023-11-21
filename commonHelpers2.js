import{a as w,b as P,c as A,d as I,i as T,w as E}from"./assets/dark-light-switcher-2d277773.js";import{S as c,P as q}from"./assets/vendor-dacd7886.js";const v=document.querySelector(".books-list"),k=document.querySelector(".no-books"),d=document.querySelector(".loader-backdrop");let S="shoppingList";const m=JSON.parse(localStorage.getItem(S))||[];p(m);function p(o){const e="Description will be added sooner",s=o.map(({_id:n,book_image:u,title:i,list_name:y,description:B,author:$,buy_links:h})=>`
      <li class="shopping-element" data-book-id="${n}" id="${n}">
        <img
          src="${u}"
          alt="${i}"
          class="book-image"
        />
        <div class="text-content">
          <h2 class="book-title">${i}</h2>
          <p class="book-category">${y}</p>
          <p class="book-description">
            ${B||e}
          </p>
          <div class="author-buy">
            <p class="author-name">${$}</p>
            <ul class="buy-links">
              <li class="buy-link">
                <a href="${h[0].url}" target="_blank" class="amazon-link book-link ">
                  <img
                    src="${w}"
                    srcset="${P} 2x"
                    alt="Amazon"
                    width="32"
                    height="11"
                    class="buy-amazon"
                  />
                </a>
              </li>
              <li class="buy-link">
                <a href="${h[1].url}" target="_blank" class="apple-book-link book-link ">
                  <img
                    src="${A}"
                    srcset="${I} 2x"
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
            <use href="${T}#trash-last"></use>
          </svg>
        </button>
      </li>
    `).join("");v.innerHTML=s,x()}function x(){document.querySelectorAll(".delete-item").forEach(e=>e.addEventListener("click",O))}function O(o){b();const e=o.target.closest("li").id;let s=JSON.parse(localStorage.getItem("shoppingList"))||[];s=s.filter(i=>i._id!==e),localStorage.setItem(S,JSON.stringify(s)),E(s);const n=document.getElementById(e);n&&n.remove(),p(s),b(),c.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:i=>{i.onmouseenter=c.stopTimer,i.onmouseleave=c.resumeTimer}}).fire({icon:"success",title:"Book was deleted successfully"})}function b(){d==null||d.classList.toggle("is-hidden")}v.children.length===0||m.length===0||m===[]?k.classList.remove("hidden"):k.classList.add("hidden");let g=localStorage.getItem("shoppingList"),t=JSON.parse(g);const f=document.querySelector(".no-books");let L=2,l=4;window.innerWidth>=768&&(L=3,l=3);const z={totalItems:t.length,itemsPerPage:l,visiblePages:L},r=document.getElementById("tui-pagination-container"),a=new q(r,z);t.length<=3?r.classList.add("hidden"):r.classList.remove("hidden");a.on("beforeMove",o=>{const e=o.page;p(t.slice((e-1)*l,e*l)),J()});a.movePageTo(1);function J(){document.querySelectorAll(".delete-item").forEach(e=>e.addEventListener("click",N))}function N(){g=localStorage.getItem("shoppingList"),t=JSON.parse(g),t.length===0||t===[]?f.classList.remove("hidden"):f.classList.add("hidden");let o=a.getCurrentPage();a.reset(t.length),a.movePageTo(o),(t.length/l<=1||t.length<=3)&&r.classList.add("hidden")}
//# sourceMappingURL=commonHelpers2.js.map
