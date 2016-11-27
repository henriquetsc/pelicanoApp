$(document).ready(function() {

	function insertUser(){
		var data = {
			'acao'                   : 'INSERT_USER',
			'email'                  :  $("#email").val(),
			'qtd_pessoas_residencia' :  $("#qtd_pessoas_residencia").val(),
			'data_venc_conta'        :  $("#data_venc_conta").val(),
			'cidade'                 :  $("#cidade").val(),
			'uf'                     :  $("#uf").val()
		};

		ajaxServer("INSERT_USER", data);
	}

	function ajaxServer(acao, data){
		$.ajax({
			url      : 'http://maglione.eti.br/hackathon/HackathonAmbev/index.php',
			jsonp    : "callback",
			dataType : 'text',
			type     : 'POST',
			data     : data,
			timeout  : 90000,
			success  : function(result){
				if(acao == 'INSERT_USER'){
		          	// Next step the application porra!
		          }
		          $('#teste').text('1 '+JSON.stringify(result));
		          console.log(result);
		      },
		      error :  function(result){
			        // Ih, deu dick
			        $('#teste').text('2 '+JSON.stringify(result));
			    }
			});
	}

	$('#iniciar').click(function() {
		insertUser();
		$(location).attr("href", 'opcoes.html' + '?email' + $("#email").val() + '&qtd_pessoas_residencia' + $("#qtd_pessoas_residencia").val() + '&data_venc_conta' + $("#data_venc_conta").val() + '&cidade' + $("#cidade").val() + '&uf'+ $("#uf").val());
	});
});