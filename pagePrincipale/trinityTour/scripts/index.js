const concertList = document.querySelector('.concert');



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    
      var modals = document.querySelectorAll('.modal');
      M.Modal.init(modals);
    
      var items = document.querySelectorAll('.collapsible');
      M.Collapsible.init(items);
    
    });


// setup Concert
const setupConcert = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const concert = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${concert.title} </div>
          <div class="collapsible-body white"> ${concert.content} </div>
        </li>
      `;
      html += li;
    });
    concertList.innerHTML = html
  } else {
    concertList.innerHTML = '<h5 class="center-align">Login to view Concert</h5>';
  }
  

};