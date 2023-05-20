const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredCharacter = hpCharacters.filter((character) => {
    return character.name.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacter);
});

const loadCharacters = async () => {
  try {
    let res = await fetch(
      "https://anapioficeandfire.com/api/books?page=1&pageSize=12"
    );
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (e) {
    console.log(e);
    console.log("this api is not valid");
  }
};

const displayCharacters = (charaters) => {
  const HtmlString = charaters
    .map((character) => {
      return `
        <li class="character">
          <h2>${character.name}</h2>
          <p>No.Of.Pages : ${character.numberOfPages}</p>
          <p>Isbn : ${character.isbn}</p>
          <p>Author : ${character.authors[0]}</p>
          <p>Publisher : ${character.publisher}</p>
          <p>Released Date : ${character.released}</p>
          <p>Country : ${character.country}</p>
        </li>
      `;
    })
    .join("");

  characterList.innerHTML = HtmlString;
};

loadCharacters();
