"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		
			// kvt2 = document.getElementById('formVal2').value;
	

		
		if (error === 0) {
			
			var kvt = document.getElementById('formval').value;
			var rast = document.getElementById('formRast').value;
			var kvt2 = document.getElementById('formVal2').value;

			document.getElementById('resulttext').innerHTML= (kvt2*rast/kvt).toFixed(2);
			//Str(Number(kvt)-Number(kvt2));

		} else {
			//alert('Заполните обязательные поля');
			document.getElementById('resulttext').classList.add('_error');
			document.getElementById('resulttext').innerHTML= "---"
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		document.getElementById('resulttext').classList.remove('_error');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
			

			if (numberTest(input)) {
				
					formAddError(input);
					error++;
				
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
					

				}

			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
		//let restxt = document.getElementById('resulttext');
		
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
		

	}

	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	function numberTest(input) {
		return !/^[0-9]*[.]?[0-9]*$/.test(input.value);
	}

	//Получаем инпут file в переменную
	const formImage = document.getElementById('formImage');
	//Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview');

	
	
});