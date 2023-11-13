import"./assets/dark-light-switcher-b7703df8.js";const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAYAAABH/4KQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVESURBVHgB7VhNaFxVFD7nzc+bNB0b48SIGaTEYEkWVrHFLkqNmpWKP5Tgxi4r4sqNEjeGrFTwpxQaBYUi4qJkZQlWNyEE8YdotaBUSEmtTZumpjrN70zee/d4zvuZeW/mvcmNZFV64Mx999xzz/3uOef+DcBt+n+Euor0mfkAKPsgIBaAwOSe2n1Zn/jXAoVXmafx6MZ5nW6bDkCfm3vIUqfY/F7YNsJZVMYAHi1fbKrVrLFyItubydL3rLbLk1BCFwK9IET0bNuhfdlXrHNJ2kayIcBsBr8CYmDk2yWE2neYk+RN9dJpxFNEgESEWwGHayeyh5WC3aS4H3N9GXxTXVuSLFafcI/zkfkUIlIciHQcMNdrkHoclNcn6FlfhmkzGSW3Pc18hlmBBjghg13d7S7IequZPGD3M9yzlSsOwM2LQJcneDqhIHA37DoEkO8GSGUB1q4BXZ8GWJmP6IhtAtUFXgS1wEm3NLs8Vw8M9w8BPvQagHlHVL7wE6hvjgAsXQLYWQRj4FOA4qGoTqUENP0u0LnjjIiqk3YU5rlI+eAiAONyDovFIioLUxDKL9z9HOCjbzUAc6lzH+DASde08eyXDcBcMtsAD77NXj8MYbvMqQQc8WGdm5szgHZ4nQNqLUIzwnsPAO3qBWjvbaoHuXsidsl2IyXgUAucS443merORBr7WPuDm+tIRBUGKeeFOIESwZFvxLfnhmxzeOlNNdwtTbaRaj15q43NOfdXgFGYQWNg0FAK2ZbSQejs7IxVTSd09zpigJX0wqqlA9HJNplQg+cGBwe9D2X4jF6p6xUdnchqNcAwDO0TwgcH0STT8YrS1FHRcebn51EL3NjYmIcF5AysyXEbPUfhSTieedABV+uE0aDrDKw0dIKFEDUcaz12Hburh4xoboTCSmU+iubOAl35pXHg4NPe4PP0D6BLPwKt/xvFErKr/AlVcz1EDZ4TJTe0ToFPPKztwhKOK7+CGn8T6CqDIscT8rFkHHgZjCffqM5fTbwP6oePAQQUeoCx62EwXjhe25oC7zTJ07gWOetya0Md45kU9FdH3NnBt4sSj2xDXBSMJ4bYUzOAbfeB+vbD+GEkiXN8qa4sVVssR03teOcfuTatQ5CBgU1IIFK04t0T/BAsLcrFGiKycHgm3gNaWQQ1+UFMO3gsqbK+XBfWVIXTSH8rkZzjGV3LoMbWEJAkz4UpEMejqvm2eobW1YPSVurPhYWFoClCsZ4T5eur8HX0+NJhwy0pJKM6Haor52/SdzJmf38/aIETeuSLvyeVopm4EG4XOw5c7v3kxrj4vaOjg3TAuaff8jLg+KzzKk/RrubM9vLS6ZnKSzIWX25lh9AD19PTI6vGOXJm7fyxsxv9tgN/bT3Eyczp+dvJ38vPv3i6dKGtrc3hy63iN0sDuLiMF5ksFJO5Rdg0zfSxx3L377/b3LszA518Tc4EbxIFBhqhK5/hPtmC94o3d0RF/FawyopuTC1s/Pz6ZHm2UqlY3FQpFArri4uLso3YOuCEZK9jAJDzQZq+DIMRGTDxAEF/dwGyDFhWNSL1gETOdcWlu0hbW1ut1dVVAVUZHh7eGBkZUXEgYslfPapUKkEIgBhwQ57NZm0mJ6hLm+M4dktLixPIRadcLjtCUvdL12OWZcksKnwiWaOjozond414NuIhCW+OXS/PN/m/5M58Pn8Xly7zdyH41uR2Znm+yaM328w5OhSEMd3X1yfGqnkozKusJVTPheq5sDxUCmf8Sce+uOoH1wVZX4Y3ekiQN+jJqkTv5NlaKG/TrUL/AbpP0zjQaXTtAAAAAElFTkSuQmCC",a=document.querySelector(".books-list");document.querySelector(".delete-form");const c=document.querySelector(".no-books"),g=JSON.parse(localStorage.getItem("shoppingList"));a.insertAdjacentHTML("beforeend",u(g));const m=[...a.children];m.forEach(e=>{e.children[2].addEventListener("click",h)});function h(e){const t=e.currentTarget.dataset.bookId,i=JSON.parse(localStorage.getItem("shoppingList"))||[],s=[];i.filter(o=>{o._id!==t&&s.push(o)}),console.log(s),localStorage.setItem("shoppingList",JSON.stringify(s))}a.children.length===0?c.classList.remove("hidden"):c.classList.add("hidden");function u(e){const t="Description will be added sooner";return e.map(({_id:i,book_image:s,title:o,list_name:l,description:r,author:A,buy_links:n})=>`
      <li class="shopping-element">
        <img
          src="${s}"
          alt="${o}"
          class="book-image"
        />
        <div class="text-content">
          <h2 class="book-title">${o}</h2>
          <p class="book-category">${l}</p>
          <p class="book-description">
            ${r||t}
          </p>
          <div class="author-buy">
            <p class="author-name">${A}</p>
            <ul class="buy-links">
              <li class="buy-link">
                <a href="${n[0].url}" class="amazon-link book-link ">
                  <img
                    src="../img/amazon@1x-min.png"
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
                    src="${d}"
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
