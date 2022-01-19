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
        restaurantHeadline.innerHTML = 'The sweetest of greens for our beloved customers'
        mainContent.appendChild(restaurantHeadline);

        // restaurant IMAGE
        const restaurantImage = document.createElement('img');
        restaurantImage.src = Image;
        restaurantImage.classList.add('img');
        mainContent.appendChild(restaurantImage);

        const restaurantAction = document.createElement('div');
        restaurantAction.classList.add('headline');
        restaurantAction.innerHTML = 'Check out our menu for more information';
        mainContent.appendChild(restaurantAction);
    };

    return {
        createPage
    };

})();

export const menu = (() => {

    const createPage = () => {

        // Menu div
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        mainContent.appendChild(menuDiv);

        const saladItems = [
            {
                name: 'SPICY SABZI',
                price: '$8.75',
                description: 'organic baby spinach, shredded kale, roasted sesame tofu, spicy broccoli, raw beets, carrots, spicy quinoa, bean sprouts, basil, dried chiles, carrot chili vinaigrette',
                calories: '440 CAL'
            },
            {
                name: 'KALE CAESAR',
                price: '$8.95',
                description: 'shredded kale, chopped romaine, parmesan crisps, shaved parmesan, roasted chicken, tomatoes, fresh lime squeeze, caesar dressing',
                calories: '420 CAL'
            },
            {
                name: 'GUACAMOLE GREENS',
                price: '$9.85',
                description: 'organic mesclun, avocado, roasted chicken, red onion, tomatoes, tortilla chips, fresh lime squeeze, lime cilantro jalapeno vinaigrette',
                calories: '530 CAL'
            },
            {
                name: 'HUMMUS TAHINA',
                price: '$10.85',
                description: "chopped romaine, shredded kale, herb falafel, local feta, tomatoes, red onion, cucumbers, za'atar breadcrumbs, housemade hummus, cucumber tahini yogurt dressing",
                calories: '525 CAL'
            },
            {
                name: 'OMG OMEGA',
                price: '$12.15',
                description: 'organic arugula, baby spinach, cucumbers, tomatoes, basil, avocado, roasted steelhead, nori furikake, miso sesame ginger vinaigrette',
                calories: '555 CAL'
            },
            {
                name: 'RAD THAI',
                price: '$10.85',
                description: "organic arugula, organic mesclun, bean sprouts, shredded cabbage, spicy sunflower seeds, carrots, cucumbers, basil, citrus shrimp, spicy cashew dressing",
                calories: '365 CAL'
            }
        ];

        // Salads column
        const saladsColumn = document.createElement('div');
        saladsColumn.classList.add('salads', 'menu-column');
        menuDiv.appendChild(saladsColumn);

        const saladsTitle = document.createElement('div');
        saladsTitle.classList.add('menu-section-title');
        saladsTitle.innerHTML = 'SALADS';
        saladsColumn.appendChild(saladsTitle);

        // All Salads
        for (let i = 0; i < saladItems.length; i++) {
            const entreeMainDiv = document.createElement('div');
            entreeMainDiv.classList.add('entree-section');
            saladsColumn.appendChild(entreeMainDiv);

            const nameAndPriceDiv = document.createElement('div');
            nameAndPriceDiv.classList.add('name-and-price');
            entreeMainDiv.appendChild(nameAndPriceDiv);

            // Spicy Sabzi Name
            const entreeName = document.createElement('div');
            entreeName.classList.add('entree-name');
            entreeName.innerHTML = saladItems[i].name;
            nameAndPriceDiv.appendChild(entreeName);

            // Spicy Sabzi Price
            const entreePrice = document.createElement('div');
            entreePrice.classList.add('entree-price');
            entreePrice.innerHTML = saladItems[i].price;
            nameAndPriceDiv.appendChild(entreePrice);

            // Spicy Sabzi Description
            const descriptionAndPriceDiv = document.createElement('div');
            descriptionAndPriceDiv.classList.add('description-price');
            entreeMainDiv.appendChild(descriptionAndPriceDiv);

            const entreeDescription = document.createElement('div');
            entreeDescription.classList.add('description');
            entreeDescription.innerHTML = saladItems[i].description;
            descriptionAndPriceDiv.appendChild(entreeDescription);

            //Spicy Sabzi Calories
            const entreeCalories = document.createElement('div');
            entreeCalories.classList.add('calories');
            entreeCalories.innerHTML = saladItems[i].calories;
            descriptionAndPriceDiv.appendChild(entreeCalories);
        };

        const warmBowlsItems = [
            {
                name: 'PESTO PORTOBELLO',
                price: '$11.15',
                description: 'warm quinoa, organic arugula, roasted chicken, raw corn, hot chickpeas, warm portobello mix, spicy broccoli, pesto vinaigrette',
                calories: '775 CAL'
            },
            {
                name: 'HARVEST BOWL',
                price: '$9.85',
                description: 'organic wild rice, shredded kale, apples, sweet potatoes, roasted chicken, local goat cheese, toasted almonds, balsamic vinaigrette',
                calories: '705 CAL'
            },
            {
                name: 'SHROOMAMI',
                price: '$10.35',
                description: 'organic wild rice, shredded kale, raw beets, bean sprouts, basil, spicy sunflower seeds, roasted sesame tofu, warm portobello mix, miso sesame ginger vinaigrette',
                calories: '540 CAL'
            }
        ];

        // Warm Bowls Column
        const warmBowlsColumn = document.createElement('div');
        warmBowlsColumn.classList.add('warm-bowls', 'menu-column');
        menuDiv.appendChild(warmBowlsColumn);

        const warmBowlsTitle = document.createElement('div');
        warmBowlsTitle.classList.add('menu-section-title');
        warmBowlsTitle.innerHTML = 'WARM BOWLS';
        warmBowlsColumn.appendChild(warmBowlsTitle);

        // All Warm Bowls
        for (let i = 0; i < warmBowlsItems.length; i++) {
            const entreeMainDiv = document.createElement('div');
            entreeMainDiv.classList.add('entree-section');
            warmBowlsColumn.appendChild(entreeMainDiv);

            const nameAndPriceDiv = document.createElement('div');
            nameAndPriceDiv.classList.add('name-and-price');
            entreeMainDiv.appendChild(nameAndPriceDiv);

            // Spicy Sabzi Name
            const entreeName = document.createElement('div');
            entreeName.classList.add('entree-name');
            entreeName.innerHTML = warmBowlsItems[i].name;
            nameAndPriceDiv.appendChild(entreeName);

            // Spicy Sabzi Price
            const entreePrice = document.createElement('div');
            entreePrice.classList.add('entree-price');
            entreePrice.innerHTML = warmBowlsItems[i].price;
            nameAndPriceDiv.appendChild(entreePrice);

            // Spicy Sabzi Description
            const descriptionAndPriceDiv = document.createElement('div');
            descriptionAndPriceDiv.classList.add('description-price');
            entreeMainDiv.appendChild(descriptionAndPriceDiv);

            const entreeDescription = document.createElement('div');
            entreeDescription.classList.add('description');
            entreeDescription.innerHTML = warmBowlsItems[i].description;
            descriptionAndPriceDiv.appendChild(entreeDescription);

            //Spicy Sabzi Calories
            const entreeCalories = document.createElement('div');
            entreeCalories.classList.add('calories');
            entreeCalories.innerHTML = warmBowlsItems[i].calories;
            descriptionAndPriceDiv.appendChild(entreeCalories);
        };

        const seasonalItems = [
            {
                name: 'SPICY GREENS',
                price: '$10.35',
                description: 'organic arugula, organic wild rice, tomatoes, raw corn, spicy green beans, roasted chicken, carrot chili vinaigrette',
                calories: '530 CAL'
            },
            {
                name: 'PEACH + GOAT CHEESE',
                price: '$9.35',
                description: 'organic mesclun, organic baby spinach, basil, toasted almonds, local peaches, local goat cheese, balsalmic vinaigrette',
                calories: '360 CAL'
            },
            {
                name: 'JALAPENO BUSINESS',
                price: '$11.35',
                description: 'organic arugula, shredded kale, sungold tomatoes, cilantro, spicy sunflower seeds, roasted corn + zucchini, local feta, warm portobello mix, lime cilantro jalapeno vinaigrette',
                calories: '365 CAL'
            }
        ];

        // Seasonals Column
        const seasonalsColumn = document.createElement('div');
        seasonalsColumn.classList.add('seasonals', 'menu-column');
        menuDiv.appendChild(seasonalsColumn);

        const seasonsalsTitle = document.createElement('div');
        seasonsalsTitle.classList.add('menu-section-title');
        seasonsalsTitle.innerHTML = 'SEASONALS';
        seasonalsColumn.appendChild(seasonsalsTitle);

        // All Warm Bowls
        for (let i = 0; i < seasonalItems.length; i++) {
            const entreeMainDiv = document.createElement('div');
            entreeMainDiv.classList.add('entree-section');
            seasonalsColumn.appendChild(entreeMainDiv);

            const nameAndPriceDiv = document.createElement('div');
            nameAndPriceDiv.classList.add('name-and-price');
            entreeMainDiv.appendChild(nameAndPriceDiv);

            // Spicy Sabzi Name
            const entreeName = document.createElement('div');
            entreeName.classList.add('entree-name');
            entreeName.innerHTML = seasonalItems[i].name;
            nameAndPriceDiv.appendChild(entreeName);

            // Spicy Sabzi Price
            const entreePrice = document.createElement('div');
            entreePrice.classList.add('entree-price');
            entreePrice.innerHTML = seasonalItems[i].price;
            nameAndPriceDiv.appendChild(entreePrice);

            // Spicy Sabzi Description
            const descriptionAndPriceDiv = document.createElement('div');
            descriptionAndPriceDiv.classList.add('description-price');
            entreeMainDiv.appendChild(descriptionAndPriceDiv);

            const entreeDescription = document.createElement('div');
            entreeDescription.classList.add('description');
            entreeDescription.innerHTML = seasonalItems[i].description;
            descriptionAndPriceDiv.appendChild(entreeDescription);

            //Spicy Sabzi Calories
            const entreeCalories = document.createElement('div');
            entreeCalories.classList.add('calories');
            entreeCalories.innerHTML = seasonalItems[i].calories;
            descriptionAndPriceDiv.appendChild(entreeCalories);
        };
    };

    return {
        createPage
    };

})();

export const contact = (() => {

    const createPage = () => {
        const contactAction = document.createElement('div');
        contactAction.classList.add('contact-action');
        contactAction.innerHTML = 'Reach out to us via our channels below for any questions you may have!'
        mainContent.appendChild(contactAction);
        
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        mainContent.appendChild(contactInfo);
        
        const phoneNumber = document.createElement('div');
        phoneNumber.classList.add('phone', 'contact');
        phoneNumber.innerHTML = 'Phone: 999-999-9999';
        contactInfo.appendChild(phoneNumber);

        const email = document.createElement('div');
        email.classList.add('email', 'contact');
        email.innerHTML = 'Email: customerservice@sweetgreens.com';
        contactInfo.appendChild(email);
    };

    return {
        createPage
    };

})();