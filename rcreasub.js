
var kushki = new Kushki({
    merchantId: '254edb077a3a43b79e1d63ed11172ffc', 
    inTestEnvironment: true,
    regional:false
  });

  
  function pago(){
    var token_rec= document.getElementById("token_sub").value;
    fetch("https://api-uat.kushkipagos.com/subscriptions/v1/card",{
    method: 'POST',
    headers: {
    'Private-Merchant-Id':'0dc0bfaaddb24b0d9263138d5949b488',
    'Content-Type': 'application/json'
    },
    body: {
    token: token_rec,
    amount: {subtotalIva: 0, subtotalIva0: 10.99, ice: 0, iva: 0, currency: 'USD'},
    planName: 'Premium',
    periodicity: 'monthly',
    contactDetails: {firstName: 'Arturo', lastName: 'Palacios', email: 'reyarturo_palacios@hotmail.com', 
    DocumentType: "CC",
    documentNumber: "1234567890",
    phoneNumber: '+593991059366'},
    startDate: '2023-04-15', // Date of the first charge
    metadata: {contractID: '157AB'}
    }})
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
  }
