const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = (data) => {
    const countriesDiv = document.getElementById('desh');
    for (const country of data) {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h1> ${country.name.common}</h1>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        
        `;
        countriesDiv.appendChild(div);
        console.log(country);
    }
}
const loadCountryByName = (data) => {
    //const 
    fetch('https://restcountries.com/v3.1/name/name')
        .then(response => response.json())
        .then(data => displayCountriesDetail(data[0]));
}

const displayCountriesDetail = country => {
    const countryDivs = document.getElementById('country-detail');
    countryDivs.innerHTML = `
<h5>${country.name.common}</h5>
<p>Population: ${country.population}</p>
<img src="${country.flags.png}" alt="">
    `
}