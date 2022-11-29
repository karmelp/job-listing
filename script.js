import data from './data.json' assert {type: 'json'};

const buttonEl = document.querySelector(".filterBtnIcon")
const filterPanelEl = document.querySelector(".filtersPanel")

document.querySelector(".filterBtn").addEventListener('mouseenter', () => {
    if (filterPanelEl.style.visibility === "hidden") { 
        buttonEl.style.backgroundColor = "hsla(180, 28%, 50%, 1)";
        buttonEl.innerHTML = '<img src="images/icon-down-hover.svg" />';
    } else {
        buttonEl.style.backgroundColor = "hsla(180, 28%, 50%, 1)";
        buttonEl.innerHTML = '<img src="images/icon-up-hover.svg" />';
    }
})

document.querySelector(".filterBtn").addEventListener('mouseleave', () => {
    if (filterPanelEl.style.visibility === "hidden") { 
        buttonEl.style.backgroundColor = "hsla(180, 31%, 95%, 1)";
        buttonEl.innerHTML = '<img src="images/icon-down-active.svg" />';
    } else {
        buttonEl.style.backgroundColor = "hsla(180, 31%, 95%, 1)";
        buttonEl.innerHTML = '<img src="images/icon-up-active.svg" />';
    }
})

function toggleFilterBtn() {
    if (filterPanelEl.style.visibility === "hidden") {
        filterPanelEl.style.visibility = "visible";
        buttonEl.innerHTML = '<img src="images/icon-up-active.svg" />';
        buttonEl.style.backgroundColor = "hsla(180, 31%, 95%, 1)";
    } else {
        filterPanelEl.style.visibility = "hidden";
        buttonEl.innerHTML = '<img src="images/icon-down-active.svg" />';
        buttonEl.style.backgroundColor = "hsla(180, 31%, 95%, 1)";
    }
}
document.querySelector(".filterBtn").onclick = toggleFilterBtn;

function jobOfferContainer(job) {
    // võta HTMList tööpakkumiste konteinerelement
    const jobListingsEl = document.querySelector(".jobListingsContainer");
    // loo tööpakkumise kontainer
    const jobOfferEl = document.createElement("div")
    // lisa tööpakkumise konteinerile klass
    jobOfferEl.setAttribute("class", "jobOffer")
    // loo featuredLine konteiner
    const featuredLineEl = document.createElement("div")
    // loo logo ja töö infot koondav konteiner
    const logoAndJobInfoEl = document.createElement("div")
    // lisa logo ja töö infot koondavale konteinerile klass
    logoAndJobInfoEl.setAttribute("class", "logoAndJobInfo")
    // võta logo getCompanyLogo funktsioonist
    const logoEl = getCompanyLogo(job);
    // loo töö info konteiner
    const jobInfoEl = document.createElement("div")
    // lisa töö info konteinerile klass
    jobInfoEl.setAttribute("class", "jobInfo")
    // loo firma nime, featured & new tagi jaoks konteiner
    const companyNewFeaturedEl = document.createElement("div")
    // lisa firma nime, featured & new tagi konteinerile klass
    companyNewFeaturedEl.setAttribute("class", "companyNewFeatured")
    // võta firma nimi getCompanyName funktsioonist
    const companyNameEl = getCompanyName(job);
    // loo new tag konteiner
    const newTagEl = document.createElement("div")
    // võta featured tag konteiner
    const featuredTagEl = document.createElement("div")
    
    if (job.new === true) {
        getNewTag(newTagEl)
    }
    // kui featured string väärtus arrays on true
    if (job.featured === true) {
        // siis ava featured funktsioon
        featured(featuredLineEl, logoEl, featuredTagEl);
    }
    // võta positsiooni nimetus getPositionName funktsioonist
    const positionNameEl = getPositionName(job);
    // loo töö alaminfo jaoks eraldi konteiner 
    const subInfoEl = document.createElement("div")
    // lisa töö alaminfo konteinerile klass
    subInfoEl.setAttribute("class", "subInfo")
    // võta postituse aeg getPostedAt funktsioonist
    const postedAtEl = getPostedAt(job);
    // võta ring getsvgCircle funktsioonist
    const circleOne = getsvgCircle();
    // võta lepingu tüüp getContract funktsioonist
    const contractEl = getContract(job);
    // võta ring getsvgCircle funktsioonist
    const circleTwo = getsvgCircle()
    // võta töö asukoht getLocation funktsioonist
    const locationEl = getLocation(job);
    // loo tagide jaoks eraldi konteiner
    const jobDetailTagsEl = document.createElement("div")
    // lisa tagide konteinerile klass
    jobDetailTagsEl.setAttribute("class", "jobDetailTags")
    // võta role tag getRole funktsioonist
    const roleTagEl = getRole(job);
    // võta level tag getLevel funktsioonist
    const levelTagEl = getLevel(job);
    // võta keelte tag getLanguages funktsioonist
    const languagesTagEl = getLanguages(job)
    // võta tools tag getTools funktsioonist
    const toolsTagEl = getTools(job)
    // pane tagid töö detaili tagide konteineri sisse 
    jobDetailTagsEl.append(roleTagEl, levelTagEl, languagesTagEl, toolsTagEl)
    // pane postituse aeg, ring1, leping, ring2 ja asukoht alaminfo konteineri sisse
    subInfoEl.append(postedAtEl, circleOne, contractEl, circleTwo, locationEl)
    // pane firma nimi, new tag ja featured tag firma nime, featured & new tagi konteineri sisse
    companyNewFeaturedEl.append(companyNameEl, newTagEl, featuredTagEl)
    // pane firma nime, featured & new tagi konteiner, positsiooni nimetus ja alaminfo konteiner töö info konteineri sisse
    jobInfoEl.append(companyNewFeaturedEl,positionNameEl, subInfoEl)
    // pane featuredline konteiner, logo ja töö info konteiner logo ja töö info konteinerisse
    logoAndJobInfoEl.append(featuredLineEl,logoEl, jobInfoEl)
    // pane logo & töö info konteiner ja tagide konteiner tööpakkumise konteinerisse
    jobOfferEl.append(logoAndJobInfoEl, jobDetailTagsEl)
    // pane tööpakkumise konteiner tööpakkumiste konteineri sisse
    jobListingsEl.appendChild(jobOfferEl)
}

// Kasutaja näeb kõiki tööpakkumisi
function showAllJobOffers() {
    // joonista HTML element iga taski jaoks
    data.forEach((job) => {
        jobOfferContainer(job);
    });
}

function getCompanyLogo(job) {
    const logoEl = document.createElement("img");
    logoEl.className = "logo";
    logoEl.src = `${job.logo}`;
    return logoEl;
}

function getCompanyName(job) {
    // loo h2 element tööpakkuja jaoks
    const companyEl = document.createElement("h2");
    // lisa tööpakkuja elemendi sisse tööpakkuja väärtus json failist
    companyEl.innerHTML = `${job.company}`;
    // tagasta tööpakkuja element
    return companyEl;
}

function featured(featuredLineEl, logoEl, featuredTagEl) {
    logoEl.style.marginLeft = "35px";
    featuredLineEl.style.width = "5px";
    featuredLineEl.style.backgroundColor = "hsla(180, 28%, 50%, 1)";
    featuredLineEl.style.borderRadius = "5px 0 0px 5px";
    featuredTagEl.style.backgroundColor = "hsla(180, 14%, 20%, 1)";
    featuredTagEl.style.borderRadius = "15px";
    featuredTagEl.style.padding = "6px 6px 3px 8px";
    featuredTagEl.style.color = "#fff";
    featuredTagEl.innerHTML = "FEATURED";
}

function getNewTag(newTagEl) {
    newTagEl.style.backgroundColor = "hsla(180, 28%, 50%, 1)";
    newTagEl.style.borderRadius = "15px";
    newTagEl.style.marginRight = "10px";
    newTagEl.style.padding = "6px 6px 3px 8px";
    newTagEl.style.color = "#fff";
    newTagEl.innerHTML = "NEW!";
}

function getPositionName(job) {
    const positionEl = document.createElement("h1");
    positionEl.innerHTML = `${job.position}`;
    return positionEl;
}

function getPostedAt(job) {
    const postedEl = document.createElement("p");
    postedEl.className = "subInfoDetail"
    postedEl.innerHTML = `${job.postedAt}`;
    return postedEl;
}

function getContract(job) {
    const contractEl = document.createElement("p");
    contractEl.className = "subInfoDetail"
    contractEl.innerHTML = `${job.contract}`;
    return contractEl;
}

function getLocation(job) {
    const locationEl = document.createElement("p");
    locationEl.className = "subInfoDetail"
    locationEl.innerHTML = `${job.location}`;
    return locationEl;
}

function getsvgCircle() {
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute("height",3);
    svg1.setAttribute("width",21.5);
    document.body.appendChild(svg1);
    const circles = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circles.setAttribute("cx",1.5);
    circles.setAttribute("cy",1.5);
    circles.setAttribute("r",1.5);
    circles.style.fill = "hsla(180, 8%, 52%, 1)";
    svg1.appendChild(circles);
    return svg1;
}

function getRole(job) {
    const roleTagEl = document.createElement("div");
    roleTagEl.className = "jobDetailTag"
    roleTagEl.setAttribute("tagTitle", `${job.role}`);
    roleTagEl.innerHTML = `${job.role}`;
    return roleTagEl;
}
function getLevel(job) {
    const levelTagEl = document.createElement("div");
    levelTagEl.className = "jobDetailTag"
    levelTagEl.setAttribute("tagTitle", `${job.level}`);
    levelTagEl.innerHTML = `${job.level}`;
    return levelTagEl;

}
function getLanguages(job) {
    const langagesWrapperEl = document.createElement("div");
    langagesWrapperEl.className = "wrapper"
    job.languages.forEach((language) => {
        const languagesTagEl = document.createElement("div");
        languagesTagEl.className = "jobDetailTag"
        languagesTagEl.setAttribute("tagTitle", `${language}`);
        languagesTagEl.innerHTML = `${language}`;
        langagesWrapperEl.append(languagesTagEl);
    })

    return langagesWrapperEl;
}


function getTools(job) {
    if (job.tools.length !== 0) {
        const toolsWrapperEl = document.createElement("div");
        toolsWrapperEl.className = "wrapper"

        job.tools.forEach((tool) => {
            const toolsTagEl = document.createElement("div");
            toolsTagEl.className = "jobDetailTag";
            toolsTagEl.setAttribute("tagTitle", `${tool}`);
            toolsTagEl.innerHTML = `${tool}`;
            toolsWrapperEl.append(toolsTagEl);
        })

        return toolsWrapperEl;
    } else {
        return '';
    }
}

function createFilterTag(filterTitleEl) {
    const chosenFilterTagsEl = document.querySelector(".chosenFilterTags")
    const filterTagEl = document.createElement("li")
    filterTagEl.className = "filterTag";
    filterTagEl.setAttribute("filterTitle", filterTitleEl);
    const filterTagTitleEl = document.createElement("h2")
    filterTagTitleEl.className = "filterTagTitle"
    filterTagTitleEl.innerHTML = filterTitleEl;
    const filterTagIconEl = document.createElement("div")
    filterTagIconEl.className = "filterTagIcon";
    filterTagIconEl.innerHTML = '<img src="images/icon-remove.svg"/>'
            
    filterTagEl.append(filterTagTitleEl, filterTagIconEl)
    chosenFilterTagsEl.append(filterTagEl)

    return filterTagEl;
}

// vali köik filtrid
const filters = document.querySelectorAll("#filter");
// pane igaühele...
filters.forEach(function (i) {
    // ...külge click funktsioon
    i.addEventListener('click', function filterClick(event) {
        // kui klikitud button on juba aktiivne...
        if (this.classList.contains("activeFilter")){
            // ...dektiveeri see
            this.classList.remove("activeFilter")
        // kui aga nupp pole aktiivne...
        } else {
            // ...siis aktiveeri see
            this.classList.add("activeFilter")
            // ja tekita filtriribale sellele vastav nupp
            const filterTitleEl = event.target.textContent;
            createFilterTag(filterTitleEl);
        }
    })
});


// function filterClick(event) {
//     const filterTitleEl = event.target.textContent;
//     return createFilterTag(filterTitleEl);

//     // job = job.languages.map((language) => {
//     //     if (filterTitleEl === `${language}`) {
//     //         return jobOfferContainer(`${language}`);
//     //     } else {
//     //         return jobOfferContainer;
//     //     }
//     // });
// }


// const filtersNodeListEl = document.querySelectorAll(".filter")

// filtersNodeListEl.forEach(filter => {
//     console.log('filter', filter)
// })


// const filters = Array.from(filtersNodeListEl);
// console.log(filters)

// const filter = Object.assign({}, filters)
// console.log(filter)

// filters.onclick = filterClick;

// console.log(document.querySelectorAll(".filter"))

showAllJobOffers();