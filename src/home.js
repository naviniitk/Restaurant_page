const myHome = () => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.textContent = "Celebrate your best moments with Ice-cream of your flavor.";
    
    content.replaceChild(container, content.childNodes[0]);
};

export {myHome}