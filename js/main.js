'use strict';

const ul = document.querySelector('.list');

// Creazione array team con oggetti i membri del team
const team = [
    {
        firstName: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './img/wayne-barnett-founder-ceo.jpg',
    },
    {
        firstName: 'Angela Caroll',
        role: 'Chief Editor',
        image: './img/angela-caroll-chief-editor.jpg',
    },
    {
        firstName: 'Walter Gordon',
        role: 'Office Manager',
        image: './img/walter-gordon-office-manager.jpg',
    },
    {
        firstName: 'Angela Lopez',
        role: 'Social Media Manager',
        image: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        firstName: 'Scott Estrada',
        role: 'Developer',
        image: './img/scott-estrada-developer.jpg',
    },
    {
        firstName: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: './img/barbara-ramos-graphic-designer.jpg',
    },
]

// Ciclo for in per visualizzare dati degli oggetti in console
for (let key in team){
    // console.log(persone[key].firstName);
    // console.log(persone[key].role);
    // console.log(persone[key].image);
    console.log(team[key]);
}

// Ciclo for per gestire DOM
for (let i = 0; i < team.length; i++){
    const currentElement = team[i];
    // Creazione list item
    const li = document.createElement('li');

    // Creazione img e append su li
    const img = document.createElement('img');
    img.src = currentElement.image;
    li.append(img);

    // Creazione h2 e append su li
    const h2 = document.createElement('h2');
    h2.append(currentElement.firstName);
    li.append(h2);

    // Creazione p(role) e append su li
    const role = document.createElement('p');
    role.append(currentElement.role);
    li.append(role);

    ul.append(li);
}