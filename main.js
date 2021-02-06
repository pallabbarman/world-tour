// all countries api call 
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

// display all country 
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <img src="${country.flag}">
        <p class="capital-name">Capital: ${country.capital}</p>
        <button class="button" onclick="displayCountryDetail('${country.name}')">Details</button>`;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

// display country details 
const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}

// country detail info 
const renderCountryInfo = country => {
    document.getElementById('countries').style.display = "none";
    document.getElementById('countryDetail').style.display = "block";
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <img src="${country.flag}"><br>
    <h1 class="country-name">Country: ${country.name}</h1>
    <h1 class="country-name">Native Name: ${country.nativeName}</h1>
    <p class="capital-name">Population: ${country.population}</p>
    <p class="capital-name">Area: ${country.area}</p>
    <p class="capital-name">Region: ${country.region}</p>
    <p class="capital-name">Subregion: ${country.subregion}</p>
    <button class="button" id="back">Back</button>`;
    document.getElementById("back").addEventListener("click", () => {
        window.location.reload();
    });
}