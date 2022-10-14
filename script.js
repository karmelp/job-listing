import data from './data.json' assert {type: 'json'};

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

function getRole(job) {
    const roleTagEl = document.createElement("div");
    roleTagEl.className = "jobDeatilTag"
    roleTagEl.innerHTML = `${job.role}`;
    return roleTagEl;
}
function getLevel(job) {
    const levelTagEl = document.createElement("div");
    levelTagEl.className = "jobDeatilTag"
    levelTagEl.innerHTML = `${job.level}`;
    return levelTagEl;

}
function getLanguages(job) {

    for (const [language, value] of Object.entries(job.languages)) {
        const languagesTagEl = document.createElement("div");
            languagesTagEl.className = "jobDeatilTag"
            languagesTagEl.innerHTML = `${value}`;
            return languagesTagEl;

      }

    // const language = job.languages.map(language => {
    //     job.languages.forEach((language) => {
    //         const languagesTagEl = document.createElement("div");
    //         languagesTagEl.className = "jobDeatilTag"
    //         languagesTagEl.innerHTML = `${language}`;
    //         return languagesTagEl;
    //     })
    // })
}

function getTools(job) {
    if (job.tools.length !== 0) {
        const toolsTagEl = document.createElement("div");
        toolsTagEl.className = "jobDeatilTag";
        toolsTagEl.innerHTML = `${job.tools}`;
        return toolsTagEl;
    } else {
        return '';
    }
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

showAllJobOffers();