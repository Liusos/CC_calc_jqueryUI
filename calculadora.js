$(function(){
	sum = 0;
	space = 0;
	dragNum();
	
	
	


});

var dragNum = function(){
	
	$('.number').draggable({
		helper: 'clone',


	});

    $('#cardSlots').droppable({

	    drop: function (e, ui){
	       if (space < 10){
	  	     var value = ui.draggable.attr('value');		  
		     sum = sum + parseInt(value);
		     space += 1;
		     var html = ui.draggable.clone();
		     $(this).append(html);
		     $('#total_sum').text(sum);
	        }
	    }
    })

}

