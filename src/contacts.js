const myContacts = () => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.textContent = "You might wanna contact us";
    content.replaceChild(container, content.childNodes[0]);
};

export {myContacts}