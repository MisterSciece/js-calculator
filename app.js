const btnNums =  document.querySelectorAll('.btn-num');
const btnFunc = document.querySelectorAll('.btn-func');
const btnOpr = document.querySelectorAll('.btn-opr');
const screen =  document.querySelector('#screen-area');
const screenLimit = 14;
activeOpr = false;
previousInput = false;
isOperator = true;
result = 0;

//initialization
screen.innerText = 0;

for(i = 0; i < btnNums.length; i++){
	btnNums[i].addEventListener('click', inputNumber);
}
 
for(i = 0; i < btnFunc.length; i++){
	btnFunc[i].addEventListener('click', inputFunc);
}
 
 
for(i = 0; i < btnOpr.length; i++){
  btnOpr[i].addEventListener('click', function(){
		var data = this.innerText;
		getResult();
			switch (data){
				case '+':
						activeOpr = '+';
						isOperator = true;
						previousInput = screen.innerText;
				break;
				
				case '-':
						activeOpr = '-';
						isOperator = true;
						previousInput = screen.innerText;
				break;
				
				case '×':
						activeOpr = '*';
						isOperator = true;
						previousInput = screen.innerText;
				break;
				
				case 'MOD':
						activeOpr = 'MOD';
						isOperator = true;
						previousInput = screen.innerText;
				break;
									
				case 'POW':
					activeOpr = 'POW';
					isOperator = true;
					previousInput = screen.innerText;
				break;
				
				case '÷':
						activeOpr = '/';
						isOperator = true;
						previousInput = screen.innerText;
				break;
			}
  });
}
 
 
function inputFunc(){
	var data = this.innerText;
	switch (data){
		case 'BKSP':
				backspace();
		break;
		
		case '+/-':
			if(screen.innerText === 0){ return;}
			var a = screen.innerText.split('');
			if (a[0] == '-') {
				a[0] = '';
			} else {
				a[0] = -parseFloat(a[0]);
			}
			var num = a.join('');
			screen.innerText = parseFloat(num);
		break;
		
		case 'C':
			screen.innerText = 0;
			previousInput = 0;
			isOperator = true;
		break;
		
		case '√':
			var val = parseFloat(screen.innerText);
			screen.innerText= Math.sqrt(val);
		break;
		
		case 'X²':
			screen.innerText *= screen.innerText;
		break;
		
		case '=':
			getResult();
		break;
	}
 }
 
 
function inputNumber(){

 	if(screen.innerText === 0 && screen.innerText != '0.' || isOperator !== false){
			isOperator = false;
			if(this.innerText == '.' && screen.innerText === 0){
				screen.innerText += this.innerText;
			}
			else{
				screen.innerText = this.innerText;
			}
 				 
 	}else{
			if(this.innerText == '.' && screen.innerText.includes('.')){
							return;
			}
			
			if(screen.innerText.length < screenLimit){
					screen.innerText += this.innerText;
			}
			else{
					alert("Input length cant exceed fourteen");
			}
 	}
}
 
 function getResult(){
		if(activeOpr == '+'){
					result = parseFloat(previousInput);
					previousInput = screen.innerText;
					screen.innerText = result + parseFloat(screen.innerText);
		}
										
		if(activeOpr == '-'){
					result = parseFloat(previousInput);
					previousInput = screen.innerText;
					screen.innerText = result - parseFloat(screen.innerText);
		}
		
		if(activeOpr == '/'){
					result = parseFloat(previousInput);
					previousInput = screen.innerText;
					screen.innerText = result / parseFloat(screen.innerText);
		}
		
		if(activeOpr == '*'){
					result = parseFloat(previousInput);
					previousInput = screen.innerText;
					screen.innerText = result * parseFloat(screen.innerText);
		}
		
		if(activeOpr == 'MOD'){
					result = parseFloat(previousInput);
					previousInput = screen.innerText;
					screen.innerText = result % parseFloat(screen.innerText);
		}
		
		if(activeOpr == 'POW'){
					result = parseFloat(previousInput)
					previousInput = screen.innerText
					screen.innerText = Math.pow(result, parseFloat(screen.innerText));
		}
		
		activeOpr = false;
 }
 
 function backspace (){
     screenDataArray = screen.innerText.split('');
	   screenDataArray.pop();
	   screen.innerText = screenDataArray.join('');
	   if(screen.innerText.length == 0){
			 screen.innerText = 0;
		 }    
 }