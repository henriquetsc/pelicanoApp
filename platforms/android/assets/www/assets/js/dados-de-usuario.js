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
			url      : 'http://172.16.15.165/workspace/HackathonAmbev/index.php',
			jsonp    : "callback",
			dataType : 'JSONP',
			type     : 'POST',
			data     : data,
			timeout  : 90000,
			success  : function(result){
				if(acao == 'INSERT_USER'){
		          	// Next step the application porra!
		          }
		          $('#teste').text('1 '+JSON.stringify(result));
		      },
		      error :  function(result){
			        // Ih, deu dick
			        $('#teste').text('2 '+JSON.stringify(result));
			    }
			});
	}

	$('#iniciar').click(function() {
		
		insertUser();
	});
});