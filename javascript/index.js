$(document).ready(function() {
    $('.progress-bar').waypoint(function() {
    $('.progress-bar').css({
    animation: "animate-positive 2s",
    opacity: "1"
    });
    }, { offset: '75%' });
})

// var $dipper = $('#dipper');

// $dipper.waypoint(function() {
//     console.log("waypoint!")}, {offset: '65%'
// });