const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    
      var modals = document.querySelectorAll('.modal');
      M.Modal.init(modals);
    
      var items = document.querySelectorAll('.collapsible');
      M.Collapsible.init(items);
    
    });
