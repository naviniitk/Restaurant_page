import {myHome} from './home'
import {myMenu} from './menu'

const header = document.createElement("header")
const home = document.createElement("button");
const menu = document.createElement("button");
const contacts = document.createElement("button");

home.setAttribute("class", "tabs");
home.setAttribute("class", "tabs");
home.setAttribute("class", "tabs");

home.innerText = "Home";
menu.innerText = "Menu";
contacts.innerText = "Contacts";

header.appendChild(home);
header.appendChild(menu);
header.appendChild(contacts);

const content = document.getElementById("content");
content.appendChild(header);




home.onclick = myHome(content);
menu.onclick = myMenu(content);
