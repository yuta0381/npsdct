$(function() {
	var xyz=[[],[],[],[]],a,b,portal1=[];
	$("input#xyz0").focus(function(){
		$("img#player").animate({'top':'64px','left':'32px'},300);
	});
	$("input#xyz1").focus(function(){
		$("img#player").animate({'top':'64px','left':'64px'},300);
	});
	$("input#xyz2").focus(function(){
		$("img#player").animate({'top':'64px','left':32*7+'px'},300);
	});
	$("input#xyz3").focus(function(){
		$("img#player").animate({'top':'64px','left':32*8+'px'},300);
	});
	$("input#xyz0").eq(1).blur(function(){$("input#xyz1").eq(1).val($(this).val())});
	$("input#xyz2").eq(1).blur(function(){$("input#xyz3").eq(1).val($(this).val())});
	$("form").submit(function(e) {
		e.preventDefault();$("div#err").empty();
		for(a=0;a<4;a++){for(b=0;b<3;b++){xyz[a][b]=$("p#portal"+a+">input").eq(b).val();}}
		console.log("A:"+get(xyz[0],xyz[1],1));
		console.log("B:"+get(xyz[2],xyz[3],2));
	});
	function err(msg) {$("div#err").append("<p>"+msg+"</p>");return false}
	function sign(n) {return (n>0)?false:true;}
	function get(co1,co2,no) {var x1=co1[0],y1=co1[2],x2=co2[0],y2=co2[2];
		if (x1==x2) {
			if (sign(y1)&&sign(y2)) {
				if (Math.abs(y1)<Math.abs(y2)) {
					return [++y1,--y2];
				}else if (Math.abs(y1)>Math.abs(y2)){
					return [--y1,++y2];
				}else{err("ゲート"+no+"がゲートになっていません")}
			}else{
				if (Math.abs(y1)<Math.abs(y2)) {
					return [--y1,++y2];
				}else if (Math.abs(y1)>Math.abs(y2)){
					return [++y1,--y2];
				}else{err("ゲート"+no+"がゲートになっていません")}
			}
		}else if(y1==y2) {
			if (sign(x1)&&sign(x2)) {
				if (Math.abs(x1)<Math.abs(x2)) {
					return [++x1,--x2];
				}else if (Math.abs(x1)>Math.abs(x2)){
					return [--x1,++x2];
				}else{err("ゲート"+no+"がゲートになっていません")}
			}else{
				if (Math.abs(x1)<Math.abs(x2)) {
					return [--x1,++x2];
				}else if (Math.abs(x1)>Math.abs(x2)){
					return [++x1,--x2];
				}else{err("ゲート"+no+"がゲートになっていません")}
			}
		}else{err("ゲート"+no+"が斜めになっています")}
	}
});