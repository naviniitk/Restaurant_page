const myHome = (content) => {
    
    const container = document.createElement("div");
    const para = document.createElement("p");
    para.innerText = "Welcome to our Restaurant";

    container.style.backgroundColor = "white";
    container.appendChild(para);
    content.appendChild(container);
};

export {myHome}