const supportArray = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: saveTheChildren,
      img2x: saveTheChildren2x,
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: projectHope,
      img2x: projectHope2x,
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: internationalMedicalCorps,
      img2x: internationalMedicalCorps2x,
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: razom,
      img2x: razom2x,
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: actionAgainstHunger,
      img2x: actionAgainstHunger2x,
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: serhiyPrytulaCharityFoundation,
      img2x: serhiyPrytulaCharityFoundation2x,
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: united,
      img2x: united2x,
    },
    {
      title: 'Medecins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: medecinsSansFrontieres,
      img2x: medecinsSansFrontieres2x,
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: worldVision,
      img2x: worldVision2x,
    },
  ];
  
  import saveTheChildren from '../img/foundations/save-the-children@1x-min.png';
  import projectHope from '../img/foundations/project-hope@1x-min.png';
  import internationalMedicalCorps from '../img/foundations/medical-corp@1x-min.png';
  import razom from '../img/foundations/razom@1x-min.png';
  import actionAgainstHunger from '../img/foundations/action-against@1x-min.png';
  import serhiyPrytulaCharityFoundation from '../img/foundations/prytula-found@1x-min.png';
  import united from '../img/foundations/united24@1x-min.png';
  import medecinsSansFrontieres from '../img/foundations/medecins-sans@1x-min.png';
  import worldVision from '../img/foundations/world-vision@1x-min.png';
  import saveTheChildren2x from '../img/foundations/save-the-children@2x-min.png';
  import projectHope2x from '../img/foundations/project-hope@2x-min.png';
  import internationalMedicalCorps2x from '../img/foundations/medical-corp@2x-min.png';
  import razom2x from '../img/foundations/razom@2x-min.png';
  import actionAgainstHunger2x from '../img/foundations/action-against@2x-min.png';
  import serhiyPrytulaCharityFoundation2x from '../img/foundations/prytula-found@2x-min.png';
  import united2x from '../img/foundations/united24@2x-min.png';
  import medecinsSansFrontieres2x from '../img/foundations/medecins-sans@2x-min.png';
  import worldVision2x from '../img/foundations/world-vision@2x-min.png';
  
  const supportList = document.querySelector('.js-support');
  const markup = createImageCardMarkup(supportArray);
  
  supportList.insertAdjacentHTML('beforeend', markup);
  supportList.addEventListener('click', onClick);
  
  function createImageCardMarkup(supportArray) {

    return supportArray
      .map(({ title, url, img, img2x }, ind) => {
        let num = String(ind + 1).padStart(2, '0');
        return `<li class="support-link js-support">
          <a class="js-target" href="${url}" target="_blank">
            <span class="support-number">${num}
            <img class="support-img" srcset="${img} 1x, ${img2x} 2x"
            src="${img}" alt="${title}"/></span>
          </a>
        </li>`;
      })
      .join('');
  }
  
  function onClick(evt) {
    if (!evt.target.classList.contains('js-support')) {
      return;
    }
  }
  
  let position = 0;
  let slidesToShow = 6;
  let slidesToScroll = 4;
  
  const list = document.querySelector('.support-list');
  const sliderButton = document.querySelector('.slider-button');
  const itemsSupport = document.querySelectorAll('.support-link');
  let itemsCount = itemsSupport.length;
  const sliderItemHeight = 32;
  const movePosition = slidesToScroll * sliderItemHeight;
  
  itemsSupport.forEach((item) => {
    item.style.minHeight = `${sliderItemHeight}px`;
  });
  
   function handleSliderButtonClick() {
    const itemsBottom = getItemsBottom();
    const arrowDown = document.querySelector('.arrow-down');
    const arrowUp = document.querySelector('.arrow-up');
  
    if (itemsBottom >= slidesToScroll) {
      position -= movePosition;
  
      if (itemsBottom - slidesToScroll < 4) {
        if (arrowUp) {
          arrowUp.classList.remove('hidden');
        }
        if (arrowDown) {
          arrowDown.classList.add('hidden');
        }
      } else {
        if (arrowUp) {
          arrowUp.classList.add('hidden');
        }
        if (arrowDown) {
          arrowDown.classList.remove('hidden');
        }
      }
    } else {
      if (arrowUp) {
        arrowUp.classList.add('hidden');
      }
      if (arrowDown) {
        arrowDown.classList.remove('hidden');
      }
      position = 0;
    }
  
    list.style.transition = 'var(--transition)';
    setPosition();
  
    setTimeout(() => {
      list.style.transition = '';
    }, 300);
  }

  sliderButton.addEventListener('click', handleSliderButtonClick);
  
  window.addEventListener('resize', () => {
    itemsCount = itemsSupport.length;
    setPosition();
  });
  
  const setPosition = () => {
    list.style.transform = `translateY(${position}px)`;
  };
  
  function getItemsBottom() {
    const windowWidth = window.innerWidth;
  
    if (windowWidth >= 1440) {
      return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 40;
    } else if (windowWidth >= 768) {
      return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 40;
    } else {
      return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 42;
    }
  }

  // For shopping-list hidden
 const support = document.querySelector('.support');
  const currentPage = window.location.pathname;

  if (currentPage.endsWith('/shopping.html')) {
    support.classList.add('support-for-shopping');
  } else {
    support.classList.remove('support-for-shopping');
  }