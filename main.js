let scrn = document.getElementById('view')
let nBtn = document.getElementsByClassName('btn')
let clear = document.getElementById('erase')
let equal = document.getElementById('result')

;[...nBtn].forEach(function(e){
	e.addEventListener('click',function(ta){
		let data = ta.target.dataset.act
		scrn.value += data
	})
})

equal.addEventListener('click', function(e){
	if(scrn.value == ''){
		scrn.value = ''
	}else{
		scrn.value = eval(scrn.value)
	}

})
clear.addEventListener('click', function(){
	scrn.value = ""
})