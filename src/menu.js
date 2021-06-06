const myMenu = () => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const scoop = document.createElement("div");
    scoop.setAttribute("class", "show");
    const imgscp = document.createElement("img");
    imgscp.src = "scoop.png";
    const parascp = document.createElement("div");
    parascp.textContent = "Rich and luscious in nature with extraordinary inclusions, Treat scoops are our special range that are made so that you can indulge a bit more.";
    scoop.append(imgscp, parascp);

    const novelty = document.createElement("div");
    novelty.setAttribute("class", "show");
    const imgnvt = document.createElement("img");
    imgnvt.src = "nvlty.png";
    const paranvt = document.createElement("div");
    paranvt.textContent = "We try to add a special touch to your happiness with our specially prepared range of novelties.";
    novelty.append(imgnvt, paranvt);

    const bar = document.createElement("div");
    bar.setAttribute("class", "show");
    const imgbar = document.createElement("img");
    imgbar.src = "brs.png";
    const parabar = document.createElement("div");
    parabar.textContent = "With their tangy, tantalizing and yummy taste, they are relished by young as well as the old. Treat an impressive range of more than 10 lip-smacking flavours.";
    bar.append(imgbar, parabar);

    container.append(scoop, novelty, bar);
    content.replaceChild(container, content.childNodes[0]);
};

export {myMenu}