// modals --- modals --- modals --- modals ---

const modalParents = document.querySelectorAll(".js-logo");
if (modalParents) {

  modalParents.forEach((modalParent) => {
    modalParent.addEventListener("click", function () {
      this.nextElementSibling.classList.add("show");
    });
  });
}

const modals = document.querySelectorAll(".js-modal");
if (modals) {
  modals.forEach((modal) => {
    modal.addEventListener('click', function () {
      this.classList.remove("show");
    })
  });
}




// const filterButtons = document.querySelectorAll(".filter-button");
// if (filterButtons) {
//   filterButtons.forEach((filterButton) => {
//     filterButton.addEventListener("click", () => {
//       console.log('addEventListener Fn 🏃🏻‍♂️');
//       // console.log('👻filter button clicked is..', filterButton);

//       // add active class to button remove active class from others in group
//       makeFilterActive(filterButton);

//       // find matching speakers in list
//       hideShowSpeakers();
//     });
//   });
// }

const progridItems = document.querySelectorAll(".progrid__item");

if (progridItems) {
  progridItems.forEach((progridItem) => {
    const progridItemInfo = progridItem.querySelector(".progrid__item-info");

    if (progridItemInfo) {
      const newMaxHeight = `${progridItem.offsetHeight}px`;

      progridItem.addEventListener("mouseenter", () => {
        // progridItemInfo.style.maxHeight = infoHeight + 30 + "px";

        progridItemInfo.style.maxHeight = newMaxHeight;
      });
      progridItem.addEventListener("mouseleave", () => {
        progridItemInfo.style.maxHeight = 0;
      });
    }
  });
}



// Carousel help fro multiple uses --- Carousel help fro multiple uses ---
// Carousel help fro multiple uses --- Carousel help fro multiple uses ---
// Carousel help fro multiple uses --- Carousel help fro multiple uses ---

// const carousel_all_in_one = document.querySelectorAll('.b-carousel--all-in-one')
// console.log('👻');
// carousel_all_in_one.forEach(carousel => {

//   console.log("yes");
//   var index = +1
//   var newClass = `b-carousel--all-in-one${index}`
//   carousel.classList.add(newClass)
//   console.log('newClass:', newClass);
// });


// Mega Grid Mobile Dropdowns
const megaGridMobileTitles = document.querySelectorAll(".mega-grid-mobile__title");
if (megaGridMobileTitles) {
  megaGridMobileTitles.forEach((megaGridMobileTitle) => {
    megaGridMobileTitle.addEventListener("click", () => {
      megaGridMobileTitle.classList.toggle('mega-grid-mobile__title--open')
      megaGridMobileTitle.nextElementSibling.classList.toggle('mega-grid-mobile__sessions--open');
    });
  });
}



// Mega Grid Filter  - Day Tabs
const megaGridTabs = document.querySelectorAll('.mega-grid__tab')
const megaGridTables = document.querySelectorAll('.mega-grid__table')
const megaGridMobileTables = document.querySelectorAll('.mega-grid__mobile-table')
const megaGridTitles = document.querySelectorAll('.mega-grid__title')
if (megaGridTabs) {

  megaGridTabs.forEach(megaGridTab => {

    megaGridTab.addEventListener('click', function () {

      [...megaGridTab.parentElement.children].forEach(sib => sib.classList.remove('mega-grid__tab--active'));

      megaGridTab.classList.add('mega-grid__tab--active')


      megaGridTables.forEach(megaGridTable => {
        megaGridTable.classList.toggle('mega-grid__table--show')
      });

      megaGridMobileTables.forEach(megaGridMobileTable => {
        megaGridMobileTable.classList.toggle('mega-grid__mobile-table--show')
      });


      megaGridTitles.forEach(megaGridTitle => {
        megaGridTitle.classList.toggle('mega-grid__title--show')
      });
    })


  });

}


// Speaker List filters

const speakerFilters = document.querySelector('#rt-speakers-list');
if (speakerFilters) {
  const params = new URLSearchParams(window.location.search)
  // const url = window.location.pathname
  const param_day = params.get('day')
  const param_location = params.get('location')
  const theatreFilters = speakerFilters.querySelectorAll('.location-filter')
  const dayFilters = speakerFilters.querySelectorAll('.day-filter')
  const speakerListMobilelButton = document.querySelector('.rt-mobile-button')

  theatreFilters.forEach(theatreFilter => {

    const theatreName = theatreFilter.dataset.theatre

    // JS for css classes
    theatreFilter.classList.remove('filter-button--active')

    if (!param_location && (theatreName === "keynote")) {

      theatreFilter.classList.add('filter-button--active')

    } else if (theatreName === param_location) {
      theatreFilter.classList.add('filter-button--active')
    }

    // if (theatreName === param_location) {
    //   theatreFilter.classList.add('filter-button--active')
    // }

    theatreFilter.addEventListener('click', () => {
      if (theatreName !== "all") {
        params.set('location', theatreName)
        window.history.replaceState({}, '', `${location.pathname}?${params}`); // eslint-disable-line
        location.reload(); // eslint-disable-line
      } else {
        params.delete('location')
        window.history.replaceState({}, '', `${location.pathname}?${params}`); // eslint-disable-line
        location.reload(); // eslint-disable-line
      }
    })
  });

  dayFilters.forEach(dayFilter => {

    const { day } = dayFilter.dataset
    dayFilter.classList.remove('filter-button--active')
    if (!param_day && (day === "day1")) {
      dayFilter.classList.add('filter-button--active')
    } else if (day === param_day) {
      dayFilter.classList.add('filter-button--active')
    }


    dayFilter.addEventListener('click', () => {
      params.set('day', day)
      window.history.replaceState({}, '', `${location.pathname}?${params}`); // eslint-disable-line
      location.reload(); // eslint-disable-line


    })
  });


  // Speaker List Mobiel Drop Down
  speakerListMobilelButton.addEventListener('click', () => {
    theatreFilters.forEach(dayFilter => {
      dayFilter.classList.add('location-filter--mobile-show')
      console.log('dayFilter.classList:', dayFilter.classList);
    });
  })

}




// Anchor Links in page scroll --- Anchor Links in page scroll ---
// Anchor Links in page scroll --- Anchor Links in page scroll ---
// Anchor Links in page scroll --- Anchor Links in page scroll ---

const tabLinks = document.querySelectorAll('.rt-tab');
if (tabLinks) {
  tabLinks.forEach(tab => {
    const target = tab.getAttribute("href");
    tab.addEventListener('click', (event) => {
      event.preventDefault()
      const el = document.querySelector(target);
      console.log('el :', el);

      const y = el.getBoundingClientRect().top + window.pageYOffset + -1;
      // offset is being created by .rt-jump-link-target
      // const y = el.getBoundingClientRect().top + 0;

      console.log('y:', y);

      window.scrollTo({ top: y, behavior: "smooth" });
    })
  });
}

const nav = document.querySelector('.rt-navigation')
const navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add('rt-navigation--shadow');
  } else {
    nav.classList.remove('rt-navigation--shadow');
  }
}

window.addEventListener('scroll', fixedNav);


// / programme accordion

const accordItemButtons = document.querySelectorAll(
  ".rt-programme-session__top-bar"
);

accordItemButtons.forEach((button) => {

  button.addEventListener("click", function () {

    const content = this.nextElementSibling;

    const contentHeight = `${content.scrollHeight}px`;

    const chevron = this.querySelector(
      ".rt-programme-session__top-bar__chevron"
    );

    if (content.classList.contains("rt-programme-session__content--show")) {
      this.nextElementSibling.style.maxHeight = "0px";
      this.nextElementSibling.classList.remove(
        "rt-programme-session__content--show"
      );
      chevron.classList.remove(
        "rt-programme-session__top-bar__chevron--rotate"
      );
    } else {
      this.nextElementSibling.style.maxHeight = contentHeight;
      this.nextElementSibling.classList.add(
        "rt-programme-session__content--show"
      );
      chevron.classList.add("rt-programme-session__top-bar__chevron--rotate");
    }
  });
});
