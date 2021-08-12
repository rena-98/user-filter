let whiteBlock = document.querySelector(".white-block");
let inputSearch = document.getElementById("input-search");
let allPerson = [];


fetch('https://randomuser.me/api?results=50')
  .then(response => response.json())
  .then(data => {
      allPerson = data.results;
       fillWhiteBlock();
});


function fillWhiteBlock(filtertext) {
  whiteBlock.innerHTML = "";
  allPerson.filter(e=>!filtertext || e.name.first.toLowerCase().startsWith(filtertext.toLowerCase())).forEach(element => {
    const person = document.createElement("div");
    person.classList.add("person");
    whiteBlock.append (person);
    const personImg = document.createElement("img");
    personImg.classList.add("person-img");
    person.append (personImg);
    const personTextBlock = document.createElement("div");
    personTextBlock.classList.add("person-text-block");
    person.append (personTextBlock);
    const personName = document.createElement("h4");
    personName.classList.add("person-name");
    personTextBlock.append (personName);
    const personLocation = document.createElement("p");
    personLocation.classList.add("person-location");
    personTextBlock.append (personLocation);
    personImg.src = element.picture.large;
    personName.innerHTML = element.name.first +" "+ element.name.last ;
    personLocation.innerHTML = element.location.city +" , "+ element.location.country;
});

}



inputSearch.addEventListener("keyup",()=>{

fillWhiteBlock(inputSearch.value);
  
})