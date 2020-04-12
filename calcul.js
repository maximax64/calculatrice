function touche(num){
	document.form.textview.value=document.form.textview.value+num;
}


function calcul(){
	var expr = document.form.textview.value;
	if(expr){
		document.form.textview.value=eval(expr);
	}	
}

function clean(){
	document.form.textview.value = "";
}

function back(){
	var expr = document.form.textview.value;

	document.form.textview.value = expr.substring(0,expr.length-1);

}