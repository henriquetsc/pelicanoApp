function scan() {
    
    console.log("clicked");
    cordova.plugins.barcodeScanner.scan(function(result){
        return result;
        //success callback

    },function(error){
        //error callback
        return result;

    },
    {
        "preferFrontCamera" : false, // iOS and Android
        "showFlipCameraButton" : true, // iOS and Android
        "prompt" : "Place a barcode inside the scan area", // supported on Android only */
       /* "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED */
        "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
    });

    return localStorage.getItem('teste');
 }

 function openScanner(event) {
     event.preventDefault();
     scan();
     document.getElementById("spanValor").innerHTML = "R$" + Math.floor(Math.random() * 49 + 11) + ",00";
 }