const experienceDetails = [
  {
    id: 'dev',
    position: 'Web Developer',
    company: 'Removals &amp; Selfstorage Ltd.',
    location: 'Isligton, UK',
    jobType: 'contract',
    startDate: 'Feb. 2023',
    endDate: 'Date'
  },
  {
    id: 'it',
    position: 'IT Support',
    company: 'ABOLTECH',
    location: 'Lagos, Nigeria',
    jobType: 'contract',
    startDate: 'Sep. 2022',
    endDate: 'Oct. 2022'
  },
  {
    id: 'intern',
    position: 'Engineer Intern',
    company: 'Joe-Akins Computers Technologies Limited',
    location: 'Lagos, Nigeria',
    jobType: 'contract',
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