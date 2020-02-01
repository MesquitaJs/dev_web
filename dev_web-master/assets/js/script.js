
//Abre os forms respectivos
function openForm(evt, formName) {
   
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //Valida Data
var datainicio = document.getElementById('dataInicio');
var dataTermino= document.getElementById('dataTermino');

datainicio.addEventListener('change', function() {
    if (datainicio.value)
        dataTermino.min = datainicio.value;
}, false);


