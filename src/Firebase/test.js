import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


//Method 1

    firestore.collection('users').doc('OUG1r3UfUTlXdSgiHNuF').collection('cart').doc('6QqiQDVnTirHsqplS7Z0');

//Method 2

    firestore.doc('/users/OUG1r3UfUTlXdSgiHNuF/cart/6QqiQDVnTirHsqplS7Z0');

//Method 3

    firestore.collection('/users/OUG1r3UfUTlXdSgiHNuF/cart');






    fetch('https://jsonlaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const firstUser = users[0];
            console.log(firstUser);
            return fetch(
                'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
            );
        })
        .then(response => response.json())
        .then(posts => console.log(posts));




        const myAsyncFunction = async () => {
            try {
                const userResponse = await fetch(
                    'https://jsonlaceholder.typicode.com/users'
                );
                const users = await userResponse.json();
                const secondUser = users[1];

                console.log(secondUser);

                const postResponse = await fetch(
                    'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
                );
                const posts = await postResponse.json();

                console.log(posts);
            } catch (err) {

                console.log('There was an error');

            }
        }