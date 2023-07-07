const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.forEach(function (link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.classList.contains('collapsed')) {
      // Navbar is already collapsed, do nothing
      return;
    }
    navbarToggler.click();
  });
});

window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll(".nav-link");

  sections.forEach(function (section, index) {
    var rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    }
  });
});



const experienceDetails = [
  {
    id: 'dev',
    position: 'Web Developer',
    company: 'Removals &amp; Selfstorage Ltd.',
    location: 'Isligton, UK',
    jobType: 'Contract',
    startDate: 'Feb. 2023',
    endDate: 'Date'
  },
  {
    id: 'it',
    position: 'IT Support',
    company: 'ABOLTECH',
    location: 'Lagos, Nigeria',
    jobType: 'Contract',
    startDate: 'Sep. 2022',
    endDate: 'Oct. 2022'
  },
  {
    id: 'intern',
    position: 'Engineer Intern',
    company: 'Joe-Akins Computers Technologies Limited',
    location: 'Lagos, Nigeria',
    jobType: 'Internship',
    startDate: 'Aug. 2019',
    endDate: 'Dec. 2019'
  }
]


const experienceWrap = document.querySelector('.experience-wrap')
if (experienceWrap) {
  for (let i = 0; i < experienceDetails.length; i++){
    const experienceItem = document.createElement('div')
    experienceItem.classList.add('experience-item')
    experienceItem.setAttribute('id', `${experienceDetails[i].id}`)
    experienceItem.innerHTML = `
      <div class="pos-loc">
        <h4>${experienceDetails[i].position}</h4>
        <p class="d-flex"><span class="org"><img src="img/mdi_office-building.svg" alt="Organization">${experienceDetails[i].company}</span><span class="loc"><img src="img/carbon_location.svg" alt="Location">${experienceDetails[i].location}</span></p>
      </div>
      <div class="type-date d-flex">
        <span class="type">${experienceDetails[i].jobType}</span>
        <p class="d-flex"><img src="img/gg_calendar-dates.svg" alt="Date"><span class="start-date">${experienceDetails[i].startDate}</span> - <span
            class="end-date">${experienceDetails[i].endDate}</span></p>
      </div>
    `
    experienceWrap.appendChild(experienceItem)
  }
}

const portfolioItems = [
  {
    id: 'portfolio1',
    title: 'React Portfolio',
    img: 'img/Capture.jpg',
    description: 'Discover the power of modern web development as you navigate through a collection of my projects. With a sleek design and seamless interactivity, this portfolio showcases my expertise in building engaging and responsive web experiences.',
    stack: 'HTML, CSS, React, Bootstrap',
    preview: 'https://ridalord.github.io/react-portfolio/',
    code: 'https://github.com/Ridalord/react-portfolio'
  },
  {
    id: 'businessId',
    title: 'My Buisness ID',
    img: 'img/portfolio2.jpg',
    description: "Welcome to my personal website, where I showcase my skills, experience, and interests as a frontend developer. Explore my expertise in HTML5, CSS, JavaScript, React.js, and SEO, along with my personal interests. Connect with me on social media.",
    stack: 'HTML, CSS, React',
    preview: 'https://ridalord.github.io/rolleyDicey/',
    code: 'https://github.com/Ridalord/rolleyDicey'
  },
  {
    id: 'rolleyDicey',
    title: 'Rolley Dicey',
    img: 'img/rolleyDicey.PNG',
    description: "Rolley Dicey is a dynamic and exciting dice game. It provides a user-friendly interface where two players compete to reach a target score by rolling the dice. With its intuitive design and engaging gameplay, Rolley Dicey offers an enjoyable experience for dice game enthusiasts.",
    stack: 'HTML, CSS, JavaScript',
    preview: 'https://ridalord.github.io/rolleyDicey/',
    code: 'https://github.com/Ridalord/rolleyDicey'
  },
  {
    id: 'lifestyle',
    title: 'The 360 Lifestyle',
    img: 'img/lifestyle.jpg',
    description: "Experience a lifestyle website that offers a captivating blog and seamless affiliate marketing. Discover inspiring content and conveniently explore recommended products in one place.",
    stack: 'HTML, CSS, JavaScript',
    preview: 'https://ridalord.github.io/the_360_lifestyle/index.html',
    code: 'https://github.com/Ridalord/the_360_lifestyle'
  },
  {
    id: 'yhwhtech',
    title: 'YHWH Tech',
    img: 'img/yhwhtech.jpg',
    description: "The stockbroker site is a user-friendly platform for seamless stock trading and investment. It provides advanced tools and personalized features to help users manage their portfolios effectively.",
    stack: 'HTML, CSS, JavaScript, Bootstrap',
    preview: 'https://ridalord.github.io/yhw-tech/',
    code: 'https://github.com/Ridalord/yhw-tech'
  }
]
const projectWrap = document.querySelector('.project-wrap')
if (projectWrap) {
  for (let i = 0; i < portfolioItems.length; i++){
    const portfolioItem = document.createElement('div')
    portfolioItem.classList.add('project-item')
    portfolioItem.setAttribute('div', `${portfolioItems[i].id}`)
    portfolioItem.innerHTML = `
      <div class="project-img">
        <img src="${portfolioItems[i].img}" alt="">
      </div>
      <div class="project-details">
        <h3>${portfolioItems[i].title}</h3>
        <p>${portfolioItems[i].description}</p>
        <p class="project-stack"><span>Tech stack:</span> ${portfolioItems[i].stack}</p>
        <div class="links d-flex">
          <a href="${portfolioItems[i].preview}" target="_blank"><img src="img/akar-icons_link-chain.svg" alt="" srcset="">Live Preview</a>
          <a href="${portfolioItems[i].code}" target="_blank"><img src="img/akar-icons_github-fill.svg" alt="" srcset="">View Code</a>
        </div>
      </div>
    `
    projectWrap.appendChild(portfolioItem)
  }
}

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}