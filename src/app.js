"use-strict"
import User from './User.js';

const usersURL = "https://randomuser.me/api/?results=20";
fetch(usersURL).then((el) => el.json()).then((data) => {
    const users = [];
    data.results.forEach(el => {
        const user = {
            title: el.name.title,
            firstname: el.name.first,
            lastname: el.name.last,
            city: el.location.city,
            country: el.location.country,
            age: el.dob.age,
            email: el.email,
            picture: el.picture.large
        }
        const newUser = new User(user);
    })

})


