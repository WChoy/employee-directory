document.addEventListener("DOMContentLoaded", function() {
  var employees = document.querySelectorAll('li.employee');
  var i = 0;

  (function animateLoop() {
    setTimeout(function () {
      employees[i].classList.add('pop-in');
      i++;
      if (i < employees.length ) { animateLoop(i); }
    }, 150)
  })();

});
