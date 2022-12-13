const { body } = document;

async function itemToHTML(iName) {
        let response = await fetch(`./items/${iName}/${iName}.json`, {cache: "reload"})
        let item = await response.json()
        let html = `<a><img id="image" src="items/${iName}/${item.img}" alt="${item.name}" width="50px" height="50px"></a><a>${item.name}</a><a>${item.price}&#8364</a><br>`
        let child = document.createElement('li');
        child.innerHTML = html;
        
        body.querySelector("main").querySelector("ul").appendChild(child)
}
await itemToHTML("apple")
await itemToHTML("banana")