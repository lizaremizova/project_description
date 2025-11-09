document.getElementById("toggle").onclick = () =>
    document.body.classList.toggle("dark");

const content = [
    { title: "progress", text: "Seko saviem mērķiem, redzi progresu un atzīmē sasniegumus.", img: "src/goal.png" },
    { title: "iedvesma", text: "Personalizēta lapa ar bildēm un citātiem motivācijai.", img: "src/Group.png" },
    { title: "mindmap", text: "Vizuāli veido mērķu karti un sasaisti idejas savā starpā.", img: "src/map.png" }
];

const container = document.getElementById("cardsContainer");
const search = document.getElementById("search");
const sortAZ = document.getElementById("sortAZ");
const sortZA = document.getElementById("sortZA");

function generateCard(cards){
    container.innerHTML = '';
    cards.forEach(feature => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<h2>${feature.title}</h2> 
                         <p>${feature.text}</p>
                         <img src="${feature.img}" class="icon">`;
        container.appendChild(card);
    })
}
generateCard(content);

search.addEventListener('input', (e) => {
    const query = e.target.value;
    const filteredCards = content.filter(feature => feature.title.includes(query));
    generateCard(filteredCards);
});

sortAZ.onclick = function() {
    content.sort(function(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });
    generateCard(content);
};

sortZA.onclick = function() {
    content.sort(function(a, b) {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
    });
    generateCard(content);
};