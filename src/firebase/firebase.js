import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'First expense',
//   note: '',
//   amount: 12222,
//   createdAt: moment(0).subtract(2, 'days').valueOf() 
// });

// database.ref('notes/-MV7tS5Svs0NbGWFJ3BT').update({
//   body: 'Buy Basil'
// });

// database.ref('notes').push({
//   title: 'Course Topics!',
//   body: 'Angular, Python'
// });

// const notes = [{
//     id: '12', 
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//   id: '761ase', 
//   title: 'Another note!',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//       name: 'Paul Livak',
//       age: 26,
//       isSingle: false,
//       job: 'Software developer',
//       location: {
//           city: 'Great Barrington',
//           county: 'United States'
//       }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed', e);
//   });


//   database.ref().update({
//     name: 'Mike',
//     'location/city': 'Boston'
//   });

//   database.ref('isSingle').set(null);

// database.ref("isSingle")
//     .remove()
//     .then(() => {
//       console.log('Data was removed');
//     }).catch((e) => {
//       console.log('did not remove data', e);
// });