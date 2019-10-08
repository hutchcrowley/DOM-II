const nav = document.getElementsByClassName('nav-link').item(0);

const nav1 = document.getElementsByClassName('nav-link').item(1);

const nav2 = document.getElementsByClassName('nav-link').item(2);

const nav3 = document.getElementsByClassName('nav-link').item(3);

nav.addEventListener('click', (Event) => {
    Event.target.style.backgroundColor = 'green';
});

nav1.addEventListener('click', (Event) => {
    Event.target.style.backgroundColor = 'green';
});

nav2.addEventListener('click', (Event) => {
    Event.target.style.backgroundColor = 'green';
});

nav3.addEventListener('click', (Event) => {
    Event.target.style.backgroundColor = 'green';
});

nav.addEventListener('mouseover', (Event) => {
    Event.target.style.backgroundColor = 'red';
    });

    nav1.addEventListener('mouseover', (Event) => {
        Event.target.style.backgroundColor = 'red';
        });

nav1.addEventListener('focus', (Event) => {
Event.target.style.backgroundColor = 'blue';
});

nav2.addEventListener('mouseover', (Event) => {
    Event.target.style.backgroundColor = 'red';
    });

    nav3.addEventListener('mouseover', (Event) => {
        Event.target.style.backgroundColor = 'red';
        });


const windowObj = window;

const load = () => {
    alert('Fun Bus has Loaded!');
};
window.onload = load;
