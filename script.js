const accessKey = "XVS2iulDwigeH2_i_yEH9Ojs6GD6cdsEUfBf_yz4XGw";

const formEl = document.querySelector('form');
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-mode-buton');

let inputData = ""

let page = 1;

async function searchImages(){
    inputData = inputEl.ariaValueMax;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}$client_id=${accessKey}`

    const response = await fetch(url)
    const data =await response.json()

    const results = data.results

    if (page === 1){
        searchResults.innerHTML = ""
    }
    results.map((result) => {
        const imageWraper = document.createElement('div');
        imageWraper.classList.add("search-result")
    })
}