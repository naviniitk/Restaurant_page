const myMenu = (content) => {
    const container = document.createElement("div");
    const list = document.createElement("li");
    list.innerText = "Ice Cream";
    container.appendChild(list);
    content.appendChild(container);
};

export {myMenu}