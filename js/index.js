requirejs.config({
  // By default load any module IDs from js dir
  baseUrl: 'js'
});

requirejs(["ie9classlist", "agave", "text!/templates/attendees.mustache", "text!/json/attendees.json", "ractive"], function(unused, agave, attendeesTemplate, attendees, Ractive) {
  agave.enable('av');
  var $ = function(selector) { return document.querySelector(selector) };
  var $all = function(selector) { return document.querySelectorAll(selector) };
  var log = console.log.bind(console)

  // Clicking ☰ button displays nav
  $('.nav-link').addEventListener('click', function (event) {
    $all('nav, body, .nav-link, .content').avforEach(function(element){
      element.avtoggleClass('menu-active');
    });
    event.preventDefault();
  });

  // Attendees
  attendees = JSON.parse(attendees)
  var attendeesBinding = new Ractive({
    el: $('.whoscoming'),
    data: attendees,
    template: attendeesTemplate
  })

  log('x', attendees)


})

