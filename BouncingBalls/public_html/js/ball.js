var Ball = (function(options) {	
var data = { 
		size: 10,
		color: "green",
		speed: {
			x: 10,
			y: -5
		},
		pos: {
			left: 250,
			top: 75
		},
		container: "body"
	};
	
	$.extend(data, options);
	
	var div = $("<div/>");
    div.css({
		"background-color": data.color,
		left: data.pos.left,
		top: data.pos.top,
		width: data.size,
		height: data.size
	});
   
	$(data.container).append(div);
	
	function move(balls) {
		data.pos.left += data.speed.x;
		data.pos.top += data.speed.y;
		
		// check of ball is past the left or right edge
		if (data.pos.left <= 0){
			data.speed.x = -data.speed.x;
			data.pos.left = -data.pos.left;
		} else if (data.pos.left + data.size >= $(data.container).width()){
			data.speed.x = -data.speed.x;
			var rightEdge = data.pos.left + data.size;
			var howManyPixelsTooFar = $(data.container).width() - rightEdge;
			var finalRight = $(data.container).width() + howManyPixelsTooFar; 
			var finalLeft = finalRight - data.size;
			data.pos.left = finalLeft;
		} 
		
		// check of ball is past top or bottom edge
		if (data.pos.top <= 0) {
			data.speed.y = -data.speed.y;
			data.pos.top = -data.pos.top;
		}
		else if (data.pos.top >= $(data.container).height() - data.size) {
			data.speed.y = -data.speed.y;
			
			var bottomEdge = data.pos.top + data.size;
			var howManyPixelsTooFar = $(data.container).height() - bottomEdge;
			var finalBottom = $(data.container).height() + howManyPixelsTooFar; 
			var finalTop = finalBottom - data.size;
			data.pos.top = finalTop;	
			
		} 
		div.css({
			left: data.pos.left,
			top: data.pos.top
		});
	}
	
	return {
		move: move
	};
	
});


