// This is a JavaScript file

 $(document).on("click", "#salvar", function(){
   var parametros = {
     "nome" : $("#nome").val(),
     "senha" : $("#senha").val(),
     "email" : $("#email").val(),
   };
   $.ajax({
     type:"post", // como enviar
     url:""
     data:parametros, // o que quer 

     //se der certo 
     sucess: function(data){
       navigator.notification.alert(data);
       $("#nome").val("");
       $("#senha").val("");
       $("#email").val("");

     },
     //se der errado
     error: function(data){
       navigator.notification.alert("Erro ao cadastrar!");
     }
   });
 });
        