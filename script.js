import data from './data.json' assert {type: 'json'};

function jobOfferContainer(job) {
    // võta HTMList tööpakkumiste konteinerelement
    const jobListingsEl = document.querySelector(".jobListingsContainer");
    // loo konteinerelemendi sisse tööpakkumise kontainer
    const jobOfferEl = document.createElement("div")
    //lisa tööpakkumise konteinerile klass
    jobOfferEl.setAttribute("class", "jobOffer")
    // kasuta getCompanyName funktsiooni jobOfferContainer funkstiooni sees
    const companyNameEl = getCompanyName(job);
    // kasuta getPositionName funktsiooni jobOfferContainer funkstiooni sees
    const positionNameEl = getPositionName(job);


    // pane firma nimi tööpakkumise konteineri sisse
    jobOfferEl.append(companyNameEl,positionNameEl)
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

function getCompanyName(job) {
    // võta json failist sisse firma nimi
    let companyName = `${job.company}`;
    // loo h2 element tööpakkuja jaoks
    const companyEl = document.createElement("h2");
    companyEl.innerHTML = companyName;
    // tagasta companyEl div element
    return companyEl;
}

function getPositionName(job) {
    // võta json failist sisse firma nimi
    let positionName = `${job.position}`;
    // loo h2 element tööpakkuja jaoks
    const positionEl = document.createElement("h1");
    positionEl.innerHTML = positionName;
    // tagasta companyEl div element
    return positionEl;
}



showAllJobOffers();