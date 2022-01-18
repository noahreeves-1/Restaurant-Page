// INITIAL LOAD MODULE
import Image from './salad.png';

const mainContent = document.querySelector('#content');

export const header = (() => {

    const createPage = () => {
        const body = document.querySelector('body');

        // restaurant HEADER & NAME
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = 'Sweet Greens';
        body.insertBefore(header, body.firstChild);
    };

    return {
        createPage
    };

})();

export const tabs = (() => {

    const createTabs = () => {
        const headerDiv = document.querySelector('.header');
        const navigationTabs = document.createElement('div');
        navigationTabs.classList.add('navigation-items');
        headerDiv.appendChild(navigationTabs);

        // create HOME tab
        const homeTab = document.createElement('div');
        homeTab.classList.add('tabs', 'home-tab');
        homeTab.innerHTML = 'Home';
        navigationTabs.appendChild(homeTab);

        // create MENU tab
        const menuTab = document.createElement('div');
        menuTab.classList.add('tabs', 'menu-tab');
        menuTab.innerHTML = 'Menu';
        navigationTabs.appendChild(menuTab);

        // create CONTACT tab
        const contactTab = document.createElement('div');
        contactTab.classList.add('tabs', 'contact-tab');
        contactTab.innerHTML = 'Contact';
        navigationTabs.appendChild(contactTab);
    }
    
    return {
        createTabs
    }
})();

export const Home = (() => {

    const createPage = () => {
        
        // restaurant HEADLINE
        const restaurantHeadline = document.createElement('div');
        restaurantHeadline.classList.add('headline');
        restaurantHeadline.innerHTML = 'The sweetest of greens at your service.'
        mainContent.appendChild(restaurantHeadline);

        // restaurant IMAGE
        const restaurantImage = document.createElement('img');
        restaurantImage.src = Image;
        restaurantImage.classList.add('img');
        mainContent.appendChild(restaurantImage);
    }

    return {
        createPage
    }

})();

export const menu = (() => {

    const createPage = () => {

        // menu list
        const menuHeadline = document.createElement('div');
        menuHeadline.classList.add('menu-headline');
        menuHeadline.innerHTML = 'Salad exactly the way you want it';
        mainContent.appendChild(menuHeadline);

        const menuInstructions = document.createElement('div');
        menuInstructions.classList.add('menu-instructions');
        menuInstructions.innerHTML = 'Choose from our assortment of ingredients to make your perfect salad. As easy and one two green';
        mainContent.appendChild(menuInstructions);
    }

    return {
        createPage
    }
})();

export const contact = () => {

    const createPage = () => {
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        contactInfo.innerHTML = 'Phone: ';
        mainContent.appendChild(contactInfo);
    }

    return {
        createPage
    }
}