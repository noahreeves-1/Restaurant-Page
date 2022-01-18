import { Home, header, tabs, menu, contact } from "./createHomePage.js";
import './style.css';

// initialize page at launch
header.createPage();
tabs.createTabs();
Home.createPage();

const mainContent = document.querySelector('#content');

// FUNCTION remove all children
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

// click "HOME" tab to go HOME
const homeTab = document.querySelector('.home-tab');
homeTab.addEventListener('click', e => {
    removeAllChildNodes(mainContent);
    Home.createPage();
    console.log('this was clicked');
});

// click "MENU" tab to see MENU
const menuTab = document.querySelector('.menu-tab');
menuTab.addEventListener('click', e => {
    removeAllChildNodes(mainContent);
    menu.createPage();
});

// click "CONTACT" tab to see contact information
const contactTab = document.querySelector('.contact-tab');
contactTab.addEventListener('click', e => {
    removeAllChildNodes(mainContent);
    contact.createPage();
});