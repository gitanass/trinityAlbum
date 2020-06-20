const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const concertList = document.querySelector('.concert');

// setup Concert
const setupConcert = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const concert = doc.data();
      const li = `
   
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>${concert.title}</td>
                        <td>${concert.content}</td>
                        <td>
                        
                            <button onclick="myFunction5()" data-id="${doc.id}" id="delt" data-cmd="delete" class="delete" title="Delete" data-toggle="tooltip" ><i class="material-icons"></i></button>
							              <button onclick="myFunction6()" data-id="${doc.id}" id="edit"class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></button>
                            <button class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></button>
                            
                        </td>
                    </tr>
                  </tr>
                 </tr>      
                </tbody>
      `;
      
      html += li;
    });
    concertList.innerHTML = html
    
  }
};

function myFunction5() {
  const button = document.getElementById('delt');

  const id = button.getAttribute('data-id');

  db.collection("concert").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

function myFunction6() {
  const button = document.getElementById('edit');

  const id = button.getAttribute('data-id');

  db.collection("concert").doc(id).update({
    title:'${concert.title}',
    content: '${concert.content}',
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

}

// create concert
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('concert').add({
    title: createForm.title.value,
    content: createForm.content.value
  }).then(() => {
    // close the create modal & reset form
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  });
});



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    
      var modals = document.querySelectorAll('.modal');
      M.Modal.init(modals);
    
      var items = document.querySelectorAll('.collapsible');
      M.Collapsible.init(items);
    
    });
