const presentations = [
    {
        title: "明治時代の女性教育",
        tags: ["女性たち", "教育", "近代", "日本", "論文"]
    },
    {
        title: "紫式部について",
        tags: ["人物", "文学", "中世", "日本", "本"]
    },
    {
        title: "女性と労働",
        tags: ["女性たち", "労働", "近代", "ヨーロッパ", "複数資料"]
    }
];

let filteredPresentations = presentations;

if (selectedTag) {
    filteredPresentations = presentations.filter(presentation =>
        presentation.tags.includes(selectedTag)
    );
}


const list = document.getElementById("presentation-list");

filteredPresentations.forEach(presentation => {
    const card = document.createElement("article");

    card.innerHTML = `
        <h3>${presentation.title}</h3>
        <p>${presentation.tags.map(tag => `#${tag}`).join(" ")}</p>
    `;

    list.appendChild(card);
});

