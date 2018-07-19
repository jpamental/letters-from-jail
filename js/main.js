/* Widowtamer */
wt.fix({
	elements: 'p',
	chars: 15,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'blockquote',
	chars: 2,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'h1',
	chars: 6,
	method: 'nbsp',
	event: 'resize'
});

window.onload = function(){
  console.log('test onload');
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  console.log(style_value);  
}

window.onresize = function(){
  console.log("test onresize");
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  console.log(style_value);  
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// example use
var div = document.querySelector('div');
var divOffset = offset(div);
console.log(divOffset.left, divOffset.top);

$(function () {
    var intViewportWidth = window.innerWidth;
    var $pane = $("#pane");
    var $animate = $("#animate");
    $("#scroll_left").click(function (ev) {
        var new_left;
        if (ev.target.id === "abs")
            new_left = 100;
        else
            new_left = $pane.scrollLeft() - intViewportWidth;
        
        $pane.delay(100).animate({scrollLeft: new_left});
    });
    $("#scroll_right").click(function (ev) {
        var new_left;
        if (ev.target.id === "abs")
            new_left = 100;
        else
            new_left = $pane.scrollLeft() + intViewportWidth;
        
        $pane.delay(100).animate({scrollLeft: new_left});
    });
});
