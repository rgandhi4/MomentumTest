if (!localStorage.eventList) {
      localStorage.eventList = JSON.stringify([]);
}
YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = JSON.parse(localStorage.eventList);

    for(var i = 0; i < events.length; i++){
      var sd = events[i].startDate;
      var ed = events[i].endDate;
      events[i].startDate = new Date(sd);
      events[i].endDate = new Date(ed);
    }

    console.log(events);
    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var eventRecorder = new Y.SchedulerEventRecorder();
    var monthView = new Y.SchedulerMonthView();
    var weekView = new Y.SchedulerWeekView();

    var eventRecorder = new Y.SchedulerEventRecorder({
    on: {
        save: function(event) {
            //create new object
            var myEvent = new Object();
            myEvent.content =  this.getUpdatedSchedulerEvent().get('content');
            myEvent.endDate = this.getUpdatedSchedulerEvent().get('endDate');
            myEvent.startDate = this.getUpdatedSchedulerEvent().get('startDate');
            //push object to event list
            events.push(myEvent);
            localStorage.eventList = JSON.stringify(events);
        },
    }
  });


    new Y.Scheduler(
      {
        activeView: monthView,
        boundingBox: '#myScheduler',
        date: new Date(2018, 7, 24),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [dayView, weekView, monthView, agendaView]
      }
    );
  }
);



// // Get the modal-from home.html
// var modal = document.getElementById('id01');
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function myFunction(x) {
    document.getElementById("mySidenav").style.width = "250px";

}
