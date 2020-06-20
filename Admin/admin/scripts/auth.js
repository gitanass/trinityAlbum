db.collection('concert').get().then(snapshot => {
  setupConcert(snapshot.docs);
});


// // create concert
// const createForm = document.querySelector('#create-form');
// createForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('concert').add({
//     title: createForm.title.value,
//     content: createForm.content.value
//   }).then(() => {
//     // close the create modal & reset form
//     createForm.reset();
//   }).catch(err => {
//     console.log(err.message);
//   });
// });







// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
    window.location = '../login/login.html';
  })
});




















