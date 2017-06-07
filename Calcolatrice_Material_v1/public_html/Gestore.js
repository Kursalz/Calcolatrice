Gestore = function () {
	function risultato() {
		event.preventDefault();
		event.stopPropagation();
		var formula = math.eval($('#display').val());
		$('#display:text').val(formula);
		operatoreInserito = false;
	}
	;
	var operatoreInserito = false;
	$(document).ready(function () {
		$('input[name="num1"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 1;
			$('#display:text').val(formula);
		});
		$('input[name="num2"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 2;
			$('#display:text').val(formula);
		});
		$('input[name="num3"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 3;
			$('#display:text').val(formula);
		});
		$('input[name="num4"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 4;
			$('#display:text').val(formula);
		});
		$('input[name="num5"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 5;
			$('#display:text').val(formula);
		});
		$('input[name="num6"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 6;
			$('#display:text').val(formula);
		});
		$('input[name="num7"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 7;
			$('#display:text').val(formula);
		});
		$('input[name="num8"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 8;
			$('#display:text').val(formula);
		});
		$('input[name="num9"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 9;
			$('#display:text').val(formula);
		});
		$('input[name="num0"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += 0;
			$('#display:text').val(formula);
			
		});
		$('input[name="addi"]').click(function (event) {
			if (!operatoreInserito) {
				event.preventDefault();
				event.stopPropagation();
				var formula = $('#display').val();
				formula += '+';
				$('#display:text').val(formula);
				operatoreInserito = true;
			} else {
				risultato();
			}
		});
		$('input[name="sott"]').click(function (event) {
			if (!operatoreInserito) {
				event.preventDefault();
				event.stopPropagation();
				var formula = $('#display').val();
				formula += '-';
				$('#display:text').val(formula);
				operatoreInserito = true;
			} else {
				risultato();
			}
		});
		$('input[name="molt"]').click(function (event) {
			if (!operatoreInserito) {
				event.preventDefault();
				event.stopPropagation();
				var formula = $('#display').val();
				formula += '*';
				$('#display:text').val(formula);
				operatoreInserito = true;
			} else {
				risultato();
			}
		});
		$('input[name="divi"]').click(function (event) {
			if (!operatoreInserito) {
				event.preventDefault();
				event.stopPropagation();
				var formula = $('#display').val();
				formula += '/';
				$('#display:text').val(formula);
				operatoreInserito = true;
			} else {
				risultato();
			}
		});
		$('input[name="virg"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = $('#display').val();
			formula += '.';
			$('#display:text').val(formula);
		});
		$('input[name="canc"]').click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			var formula = '';
			$('#display:text').val(formula);
		});
		$('.calcola').click(function (event) {
			risultato();
			});
	});
}


