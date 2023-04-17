var kushki = new Kushki({
    merchantId: '254edb077a3a43b79e1d63ed11172ffc', 
    inTestEnvironment: true,
    regional:false
  });
  
  
  var callback = function(response) {
      if(!response.code){
        console.log(response);
      } else {
        console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
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
    
    function crearSub(){
        var secure_id = document.getElementById("token_sub").value;
        kushki.requestValidate3DS({
            secureId: secure_id,
            security: {
              acsURL: "https://authentication.cardinalcommerce.com/ThreeDSecure/V1_0_2/PayerAuthentication?issuerId\u00d2aa20412b0063aca652facd9g\u0034transactionId\u003dQhcf3XOjdZmjve336Vee2gb5rof1",
               authenticationTransactionId: "1d8cf7jg5Bfn8Nj73mn7",
               paReq: "sandbox",
               specificationVersion: "1.0.2",
               authRequired: false
           }}, callback);
         
      }

      function kushki_status(){
      kushki.checkStatus(callback);
      }