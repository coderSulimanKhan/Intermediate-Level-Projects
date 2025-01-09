const catsAPI = "https://api.thecatapi.com/v1/breeds";
const container = document.querySelector(".container");
//use async await to fetch data
fetch(catsAPI)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const catNames = data.map((item) => {
            return item.name;
        });
        if (catNames) {
            container.innerText = "";
            for (const item of catNames) {
                const card = document.createElement("div");
                card.classList.add("card");
                const h3 = document.createElement("h3");
                h3.innerHTML = item;
                card.append(h3);
                container.append(card);
            }
            document
                .querySelector("#searchBtn")
                .addEventListener("click", () => {
                    container.innerText = "<p>Searching...</p>";
                    const value = document.querySelector("#searchBox").value;
                    const filteredCatNames = catNames.filter((item) => {
                        return item.includes(value);
                    });
                    if (filteredCatNames.length > 0) {
                        container.innerText = "";
                    }
                    for (const item of filteredCatNames) {
                        {
                            const card = document.createElement("div");
                            card.classList.add("card");
                            const h3 = document.createElement("h3");
                            h3.innerHTML = item;
                            card.append(h3);
                            container.append(card);
                        }
                    }
                    if (filteredCatNames.length < 1) {
                        container.innerHTML = "<p>Cat not found...</p>";
                    }
                });
        }
    })
    .catch((err) => {
        container.innerHTML = "<p>Error fetching data...</p>";
        console.log("Error in cat api", err.message);
    })
    .finally(() => {
        console.log("Cat api fetching completed");
    });
