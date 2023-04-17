var kushki = new Kushki({
  merchantId: '254edb077a3a43b79e1d63ed11172ffc', 
  inTestEnvironment: true,
  regional:false
});


var callback = function(response) {
    if(!response.code){
      alert("Token de subscripcion: " + response.token);
    } else {
      alert("Error en solicitud: " + response.message);
    }
  }

  function generarToken(){
    kushki.requestSubscriptionToken({
      card: {
        name: "Arturo Palacios",
        number: "4456540000000063",
        cvc: "029",
        expiryMonth: "05",
        expiryYear: "31"
    },
      currency: "USD"
    }, callback);
  }
  
