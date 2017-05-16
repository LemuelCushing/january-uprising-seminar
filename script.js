// // var opts = {
// //     lines: 7 // The number of lines to draw
// //         ,
// //     length: 0 // The length of each line
// //         ,
// //     width: 19 // The line thickness
// //         ,
// //     radius: 55 // The radius of the inner circle
// //         ,
// //     scale: 1.25 // Scales overall size of the spinner
// //         ,
// //     corners: 0.5 // Corner roundness (0..1)
// //         ,
// //     color: '#000' // #rgb or #rrggbb or array of colors
// //         ,
// //     opacity: 0 // Opacity of the lines
// //         ,
// //     rotate: 0 // The rotation offset
// //         ,
// //     direction: 1 // 1: clockwise, -1: counterclockwise
// //         ,
// //     speed: 0.8 // Rounds per second
// //         ,
// //     trail: 78 // Afterglow percentage
// //         ,
// //     fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
// //         ,
// //     zIndex: 2e9 // The z-index (defaults to 2000000000)
// //         ,
// //     className: 'spinner' // The CSS class to assign to the spinner
// //         ,
// //     top: '50%' // Top position relative to parent
// //         ,
// //     left: '50%' // Left position relative to parent
// //         ,
// //     shadow: false // Whether to render a shadow
// //         ,
// //     hwaccel: false // Whether to use hardware acceleration
// //         ,
// //     position: 'absolute' // Element positioning
// // }
// // var target = document.getElementsByClassName('loading')
// // var spinner = new Spinner(opts).spin(target[0]);

// $body = $("body");

// $(document).on({
//     ajaxStart: function() { $body.addClass("loading"); },
//     ajaxStop: function() { $body.removeClass("loading"); }
// });