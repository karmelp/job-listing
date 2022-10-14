import data from './data.json' assert {type: 'json'};

function jobOfferContainer(job) {
    // võta HTMList tööpakkumiste konteinerelement
    const jobListingsEl = document.querySelector(".jobListingsContainer");
    
    // loo konteinerelemendi sisse tööpakkumise kontainer
    const jobOfferEl = document.createElement("div")
    // lisa tööpakkumise konteinerile klass
    jobOfferEl.setAttribute("class", "jobOffer")

    // loo konteinerelemendi sisse logo ja töö infot koondav konteiner
    const logoAndJobInfoEl = document.createElement("div")
    // lisa tööpakkumise konteinerile klass
    logoAndJobInfoEl.setAttribute("class", "logoAndJobInfo")
    // kasuta getCompanyLogo funktsiooni jobOfferContainer funkstiooni sees
    const logoEl = getCompanyLogo(job);
    // loo konteinerelemendi sisse töö info konteiner
    const jobInfoEl = document.createElement("div")
    // lisa töö info konteinerile klass
    jobInfoEl.setAttribute("class", "jobInfo")
    // kasuta getCompanyName funktsiooni jobOfferContainer funkstiooni sees
    const companyNameEl = getCompanyName(job);
    // kasuta getPositionName funktsiooni jobOfferContainer funkstiooni sees
    const positionNameEl = getPositionName(job);

    // loo alaminfo jaoks eraldi konteiner 
    const subInfoEl = document.createElement("div")
    // lisa alaminfo jaoks klass
    subInfoEl.setAttribute("class", "subInfo")
    // kasuta getPostedAt funktsiooni jobOfferContainer funkstiooni sees
    const postedAtEl = getPostedAt(job);
    const circleOne = getsvgCircle();
    // kasuta getCompanyName funktsiooni jobOfferContainer funkstiooni sees
    const contractEl = getContract(job);
    const circleTwo = getsvgCircle()
    // kasuta getCompanyName funktsiooni jobOfferContainer funkstiooni sees
    const locationEl = getLocation(job);


    // loo tagide jaoks eraldi konteiner
    const jobDetailsEl = document.createElement("div")
    // lisa tagide konteinerile klass
    jobDetailsEl.setAttribute("class", "jobDetails")
    // lisa role tag tagide konkeinerisse
    const roleTagEl = getRole(job);
    // lisa level tag tagide konkeinerisse
    const levelTagEl = getLevel(job);
    // lisa language tag tagide konkeinerisse
    const languagesTagEl = getLanguages(job)
    // lisa tools tag tagide konkeinerisse
    const toolsTagEl = getTools(job)

    // pane tagid töö detailide info 
    jobDetailsEl.append(roleTagEl, levelTagEl, languagesTagEl, toolsTagEl)
    // pane postituse aja, lepingu ja asukoha info subInfo konteineri sisse
    subInfoEl.append(postedAtEl, circleOne, contractEl, circleTwo, locationEl)
    // pane firma nimi, positsioon ja subinfo jobinfo konteineri sisse
    jobInfoEl.append(companyNameEl,positionNameEl, subInfoEl)

    logoAndJobInfoEl.append(logoEl, jobInfoEl)
    // pane logo, töö info ja töö detailid tööpakkumise konteineri sisse
    jobOfferEl.append(logoAndJobInfoEl, jobDetailsEl)
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
    roleTagEl.className = "tag"
    roleTagEl.innerHTML = `${job.role}`;
    return roleTagEl;
}
function getLevel(job) {
    const levelTagEl = document.createElement("div");
    levelTagEl.className = "tag"
    levelTagEl.innerHTML = `${job.level}`;
    return levelTagEl;

}
function getLanguages(job) {
    job.forEach((language) => {
        const languagesTagEl = document.createElement("div");
        languagesTagEl.className = "tag"
        languagesTagEl.innerHTML = `${language}`;
        return languagesTagEl;
    })
}

function getTools(job) {
    const toolsTagEl = document.createElement("div");
    toolsTagEl.className = "tag"
    toolsTagEl.innerHTML = `${job.tools}`;
    return toolsTagEl;
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

    svg1.appendChild(circles);
    return svg1;
}

// function getFeatured() {
//     // loo konteiner element
//     const featuredEl = document.createElement("div");
//     // pane konteineri sisse kiri
//     featuredEl.innerHTML = "FEATURED";

// }


showAllJobOffers();