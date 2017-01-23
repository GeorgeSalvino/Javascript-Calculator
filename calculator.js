// ON/OFF

$(".on-off").on("click",function(){
	if($(".body").hasClass("on")){
		$(".count,#currentNum").text("")
	}
	else{
		$(".count,#currentNum").text(0)
	}
	$(".body").toggleClass("on")
})

/////////////////////////////////////////////////////////////////////////////////
//								     NUMBERS								   //
/////////////////////////////////////////////////////////////////////////////////

$(".number,.dot").on("click",function(){
	if($(".body").hasClass("on")){
		if($(".count").text()==0){
			$(".count,#currentNum").text("")
		}
		if($("#currentNum").text()==="+"||$("#currentNum").text()==="-"||$("#currentNum").text()==="/"||$("#currentNum").text()==="x"){
			$("#currentNum").text(" ")
		}
		$(".count").text($(".count").text()+$(this).text())
		$("#currentNum").text($("#currentNum").text()+$(this).text())
		if($("#currentNum").text().length>13||$(".count").text().length>20){
			$(".count,#currentNum").text("Digit limit met")
		}
	}
})


/////////////////////////////////////////////////////////////////////////////////
// 									OPERATORS								   //
/////////////////////////////////////////////////////////////////////////////////

$(".ac").on("click",function(){
	if($(".body").hasClass("on")){
		$(".count,#currentNum").text(0)
	}
})

$(".operator").on("click",function(){
	if($(".body").hasClass("on")){
		if($("#currentNum").text()===0||$("#currentNum").text()==="*"||$("#currentNum").text()==="-"||$("#currentNum").text()==="+"||$("#currentNum").text()==="/"){
			return false
		}
		else{
			$("#currentNum").text($(this).text())
			$(".count").text($(".count").text()+$(this).text());
		}
		if($("#currentNum").text().length>13||$(".count").text().length>20){
			$(".count,#currentNum").text("Digit limit met")
		}
	}
})

///////////////////////////////////////////////////////////////////////////////////
//								COUNTING PROCESS                                 //
///////////////////////////////////////////////////////////////////////////////////

$(".equal").on("click",function(){
	if($(".body").hasClass("on")){
		var count = eval($(".count").text())
		console.log(count)
		if($(".count").text()===0){
			return
		}
		else{
			$("#currentNum").text(count)
			$(".count").text($(".count").text()+" = " + count)
		}
		if($("#currentNum").text().length>13||$(".count").text().length>20){
			$(".count,#currentNum").text("Digit limit met")
		}
	}
})