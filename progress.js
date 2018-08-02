// /*STICKY HEADER*/
// window.onscroll = function() {sticky()};
//
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
//
// function sticky() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

/*SLIDER*/
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;}

/*SLIDER*/
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function myFunction(x) {
    document.getElementById("mySidenav").style.width = "250px";

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// ---------------------------------------------------------------------------------------- //
var assignments = [
   {
    assignment_name: "Terms and People: Chapter 12",
    assignmnet_dueDate: "8/7/2018",
    assignments_class:"Psychology"
  },
  {
    assignment_name: "Chemistry Exercises 1-15",
    assignmnet_dueDate: "8/9/2018",
    assignments_class:"Chemistry"
  },
  {
    assignment_name: "Study for Math Test",
    assignmnet_dueDate: "8/12/2018",
    assignments_class: "Calculus"
  },
  {
    assignment_name: "Write Technology Essay",
    assignmnet_dueDate: "8/12/2018",
    assignments_class: "English"
  },
  {
    assignment_name: "Formulate Proof for Logic Problems 1-18",
    assignmnet_dueDate: "8/17/2018",
    assignments_class: "Logic"
  },
  {
    assignment_name: "Research Newton's Laws & Prepare for Presentation",
    assignmnet_dueDate: "8/23/2018",
    assignments_class: "Physics"
  }
];

var text = [ ]
var date = [ ]
var course = [ ]
for (i = 0 ; i < assignments.length; i++) {
  text.push(assignments[i]['assignment_name']);
  date.push(assignments[i]['assignmnet_dueDate']);
  course.push(assignments[i]['assignments_class']);
};

document.getElementById("name1").innerHTML = text[1];
document.getElementById("name4").innerHTML = text[4];
document.getElementById("name3").innerHTML = text[3];
document.getElementById("name5").innerHTML = text[5];
