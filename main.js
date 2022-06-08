'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
scrollIntoView(navbarMenu);

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
scrollIntoView(homeContactBtn);

// show "arrow up" button when scrolling down
const upBtn = document.querySelector('.up-btn');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    upBtn.classList.add('visible');
  } else {
    upBtn.classList.remove('visible');
  }
});
// Handle page up button when arrow-up clicked
scrollIntoView(upBtn);

// Home section fade out on scroll
const homeContents = document.querySelector('.home__container');
document.addEventListener('scroll', () => fadeOutOnScroll(homeContents));

function fadeOutOnScroll(el) {
  if (!el) {
    return;
  }

  const distanceToTop = window.pageYOffset + el.getBoundingClientRect().top;
  const elementHeight = el.offsetHeight;
  const scrollTop = document.documentElement.scrollTop;

  let opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    el.style.opacity = opacity;
  }
}

// Work Category filtering
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

// Set active state when it's clicked on NavBar sectioin
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');

navbarMenu.addEventListener('click', (event) => {
  activation(navbarMenuItems, event);
});

// Set active state when it's clicked on Work section
const workBtns = document.querySelectorAll('.category__btn');

workBtnContainer.addEventListener('click', (event) =>
  activation(workBtns, event)
);

// Reusable active method
function activation(items, event) {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  items.forEach((item) => {
    if (filter === item.dataset.filter) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Navbar toggle button
const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
// Close the menu item when menu item is clicked
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
});
// Close the menu item when document is scrolled
document.addEventListener('scroll', () => {
  navbarMenu.classList.remove('active');
});

// automatically choosed active state on navbar menu item when scrolled page arrive at specific section such as home, about
const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonials',
  '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link='${id}']`)
);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
  // console.log(selected, navItems);
}

// Reusable code for scrolling into section when click on the buttons
function scrollIntoView(selector) {
  selector.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
      return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
    // modify activation of menu item when arrow-up and contact me buttons are clicked
    selectNavItem(navItems[sectionIds.indexOf(link)]);
  });
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

// Active navbar menu item when viewport is located on top and bottom page
window.addEventListener('wheel', () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    Math.round(window.scrollY + window.innerHeight) >=
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});
