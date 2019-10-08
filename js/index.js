
// select nav elements

const nav = document.getElementsByClassName('nav-link').item(0);

const nav1 = document.getElementsByClassName('nav-link').item(1);

const nav2 = document.getElementsByClassName('nav-link').item(2);

const nav3 = document.getElementsByClassName('nav-link').item(3);

// change background color of a nav element

nav.addEventListener('click', (Event) => {
    Event.target.style.backgroundColor = 'green';
});

// select text area - logs selected text to the console

const textarea = document.querySelector('textarea');

textarea.onselect = (event) => {
    const selection = (event.target.value.substring(event.target.selectionStart, event.target.selectionEnd));
    let newSelection = `You selected: ${selection}!`;

    console.log(newSelection);
};

// onclick event that changes the background color of nav1

nav1.addEventListener('click', (Event) => {
    Event.target.style.backgroundColor = 'green';
    Event.stopPropagation();
    Event.preventDefault();

});

// onclick event that changes the font color of nav2

nav2.addEventListener('click', (Event) => {
    Event.target.style.color = 'green';
});

// mouseover event that changes the background color of nav3

nav3.addEventListener('onmouseover', (Event) => {
    Event.target.style.backgroundColor = 'green';
});

// mouseover event that changes the backgroundcolor of the first nav element

nav.addEventListener('onmouseover', (Event) => {
    Event.target.style.backgroundColor = 'red';
});

// same for nav1

nav1.addEventListener('onmouseover', (Event) => {
    Event.target.style.backgroundColor = 'red';
});

// on focus event that changes the background color of nav1

nav1.addEventListener('focus', (Event) => {
    Event.target.style.backgroundColor = 'blue';
});

// mouseover event for changing background color of nav2

nav2.addEventListener('onmouseover', (Event) => {
    Event.target.style.backgroundColor = 'red';
    Event.stopPropagation();
});

// another mouseover event for nav3

nav3.addEventListener('onmouseover', (Event) => {
    Event.target.style.backgroundColor = 'red';
    Event.stopPropagation();
});

// onload event that console logs 'Fun Bus Has Loaded' when the window object finishes loading

const windowObj = window;

const load = () => {
    console.log('Fun Bus has Loaded!');
};
window.onload = load;

const navAll = document.querySelectorAll('nav');

navAll.addEventListener('click', (Event) => {

    Event.preventDefault();
});
