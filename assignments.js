// /*STICKY HEADER*/
// window.onscroll = function() {myFunction()};
//
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function myFunction(x) {
    document.getElementById("mySidenav").style.width = "250px";
}

// document.getElementById('first').innerHTML= assignments[0];

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

document.getElementById("name0").innerHTML = text[0];
document.getElementById("date0").innerHTML = date[0];
document.getElementById("course0").innerHTML = course[0];

document.getElementById("name1").innerHTML = text[1];
document.getElementById("date1").innerHTML = date[1];
document.getElementById("course1").innerHTML = course[1];

document.getElementById("name2").innerHTML = text[2];
document.getElementById("date2").innerHTML = date[2];
document.getElementById("course2").innerHTML = course[2];

document.getElementById("name3").innerHTML = text[3];
document.getElementById("date3").innerHTML = date[3];
document.getElementById("course3").innerHTML = course[3];

document.getElementById("name4").innerHTML = text[4];
document.getElementById("date4").innerHTML = date[4];
document.getElementById("course4").innerHTML = course[4];

document.getElementById("name5").innerHTML = text[5];
document.getElementById("date5").innerHTML = date[5];
document.getElementById("course5").innerHTML = course[5];

function formatDate(value)
{
  return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear();
}



// -----------------------------------------------------------------------------------------------------//
if (!localStorage.courseList) {
      localStorage.courseList = JSON.stringify([]);
}
var courses = JSON.parse(localStorage.courseList);
var mySelect1 = document.getElementById("mySelect1");
mySelect1.addEventListener('change', coursechange);
var mySelect2 = document.getElementById("mySelect2");
mySelect2.addEventListener('change', coursechange);
var mySelect3 = document.getElementById("mySelect3");
mySelect3.addEventListener('change', coursechange);

function coursechange() {
    console.log(event.target.id);
    courses.push(event.target.value);
    localStorage.courseList = JSON.stringify(courses);
    console.log('localStorage:' + localStorage.courseList);
  }
console.log('localStorage:' + localStorage.courseList);

var events = JSON.parse(localStorage.eventList);
document.getElementById('name6').innerHTML = events[6].content;
document.getElementById('date6').innerHTML = formatDate(new Date(events[6].endDate));
document.getElementById('course6').innerHTML = courses[0];
// var events = JSON.parse(localStorage.eventList);
document.getElementById('name7').innerHTML = events[7].content;
document.getElementById('date7').innerHTML = formatDate(new Date(events[7].endDate));
document.getElementById('course7').innerHTML = courses[1];
//
// var events = JSON.parse(localStorage.eventList);
document.getElementById('name8').innerHTML = events[8].content;
document.getElementById('date8').innerHTML = formatDate(new Date(events[8].endDate));
document.getElementById('course8').innerHTML = courses[2];

console.log(events);





// function print(list) {
//   var text = '';
//   var fLen, i;
//   fLen = list.length;
//   text = "<ul>";
//   for (i = 0; i < fLen; i++) {
//     for(var key in list[i]) {
//       text = list[key];
//     }
//   };
//   return text
// }
