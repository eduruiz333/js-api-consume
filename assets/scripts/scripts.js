
$(document).ready(function () {
    $('#txtCep').focusout (function () {
        
        var cep = $('txtCep').val();
        // cep = cep.replace('-','');
        var urlStr = 'https://viacep.com.br/ws/' +cep+ '/json';

        $.ajax({
            url : urlStr,
            type : 'get',
            dataType : 'json',

            sucess : function (data) {
                console.log(data);
            },

            error : function (erro) { 
                console.log('Deu ruim');
                
             }
        });
        
    });
});