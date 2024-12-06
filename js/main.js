document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal1');
    const closeBtn = document.querySelector('.close-btn1');
  
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
  
    const doors = document.querySelectorAll('.day');
  
    doors.forEach(door => {
      const doorDay = parseInt(door.getAttribute('data-day'));
  
      if (doorDay > currentDay) {
        const doorLabel = door.querySelector('label');
        const checkbox = doorLabel.querySelector('input[type="checkbox"]');
        checkbox.disabled = true;
        door.classList.add('disabled');
  
        door.addEventListener('click', function(event) {
          if (checkbox.disabled) {
            event.preventDefault();
            modal.style.display = 'block';
          }
        });
      }
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.querySelector('.modal-content h2');
    const modalDescription = document.querySelector('.modal-content p');
  
    const links = document.querySelectorAll('.open-modal-link');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const title = link.getAttribute('data-title');
        const description = link.getAttribute('data-description');
        
        modalTitle.innerText = title;
        modalDescription.innerText = description;
        
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  