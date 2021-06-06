import {myHome} from './home'
import {myMenu} from './menu'
import {myContacts} from './contacts'

const home = document.createElement("button");
const menu = document.createElement("button");
const contacts = document.createElement("button");

home.setAttribute("class", "btn");
menu.setAttribute("class", "btn");
contacts.setAttribute("class", "btn");

const content = document.getElementById("content");

const navbar = document.createElement("div");
navbar.setAttribute("class", "navbar");
document.body.insertBefore(navbar, document.body.children[0]);

navbar.append(home, menu, contacts);

home.textContent = "Home";
menu.textContent = "Menu";
contacts.textContent = "Contact Us";

home.onclick = myHome;
menu.onclick = myMenu;
contacts.onclick = myContacts;
home.click();