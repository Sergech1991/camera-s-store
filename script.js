'use strict';

const productInfo = [{
    imgUrl: 'images/product.png',
    title: 'Canon EOS 5D Mark III Body',
    text: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
    price: '3 200,00 руб.',
    imgIcon: 'images/blue-cart.svg'
},
{
    imgUrl: 'images/product.png',
    title: 'Canon EOS 5D Mark III Body',
    text: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
    price: '3 200,00 руб.',
    imgIcon: 'images/blue-cart.svg'
},
{
    imgUrl: 'images/product.png',
    title: 'Canon EOS 5D Mark III Body',
    text: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
    price: '3 200,00 руб.',
    imgIcon: 'images/blue-cart.svg'
},
{
    imgUrl: 'images/product.png',
    title: 'Canon EOS 5D Mark III Body',
    text: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
    price: '3 200,00 руб.',
    imgIcon: 'images/blue-cart.svg'
},
{
    imgUrl: 'images/product.png',
    title: 'Canon EOS 5D Mark III Body',
    text: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
    price: '3 200,00 руб.',
    imgIcon: 'images/blue-cart.svg'
},
{
    imgUrl: 'images/product.png',
    title: 'Canon EOS 5D Mark III Body',
    text: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
    price: '3 200,00 руб.',
    imgIcon: 'images/blue-cart.svg'
},
{
    imgUrl: 'images/product.png',
    title: 'Canon EOS 5D Mark III Body',
    text: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
    price: '3 200,00 руб.',
    imgIcon: 'images/blue-cart.svg'
}]

document.addEventListener('DOMContentLoaded', () => {

    //Menu for mobile versions
    const burgerLink = document.querySelector('.burger-link');
    const menu = document.querySelector('.panel');

    burgerLink.addEventListener('click', () => {
        menu.classList.toggle('open');
    })



    //Search-field for mobile versions
    const magnifier = document.querySelector('.magnifier__link');
    const searchField = document.querySelector('.search');

    magnifier.addEventListener('click', () => {
        searchField.classList.toggle('open-search');
    })



    //Sorting popup
    const sortBtn = document.querySelector('.sort-link');
    const  modal = document.querySelector('.container');
    const closeBtn = document.querySelector('.close-btn');

    sortBtn.addEventListener('click', () => {
        modal.classList.add('open-modal');
    })

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open-modal');
    })    



    //Create card
    const cardList = document.querySelector('.products');


    function makeElement(tagName, className, text) {
        let element = document.createElement(tagName);
        element.classList.add(className);

        if (text) {
            element.textContent = text;
        }
        return element;
    }


    function createCard(product) {
        let listItem = makeElement('li', 'product');

        let picture = makeElement('img', 'product__img');
        picture.src = product.imgUrl;
        picture.alt = product.title;
        picture.title = product.title;
        listItem.appendChild(picture);

        let titleItem = makeElement('p', 'product__title', product.title);
        listItem.appendChild(titleItem);

        let textItem = makeElement('p', 'product__text', product.text);
        listItem.appendChild(textItem);

        let line = document.createElement('hr');
        listItem.appendChild(line);

        let priceInfo = makeElement('div', 'price-info');
        listItem.appendChild(priceInfo);

        let priceItem = makeElement('p', 'product__price', product.price);
        priceInfo.appendChild(priceItem);

        let basket = makeElement('img', 'blue-cart');
        basket.src = product.imgIcon;
        basket.alt = 'Корзина';
        basket.title = 'Корзина';

        priceInfo.appendChild(basket);

        return listItem;
    }


    for (let i = 0; i < productInfo.length; i++) {
        let cardItem = createCard(productInfo[i]);
        cardList.appendChild(cardItem);
    }


});