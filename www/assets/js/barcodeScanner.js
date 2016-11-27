function scan(event) {
    event.preventDefault();
    console.log("clicked");
    cordova.plugins.barcodeScanner.scan(function(result){
        localStorage.setItem('teste', JSON.stringify(result));
        //success callback

    },function(error){
        //error callback
        localStorage.setItem('teste', JSON.stringify(result));

    },
    {
        "preferFrontCamera" : false, // iOS and Android
        "showFlipCameraButton" : true, // iOS and Android
        "prompt" : "Place a barcode inside the scan area", // supported on Android only
       /* "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED */
        "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
    });

    document.getElementById("spanTeste").innerHTML = localStorage.getItem('teste');
    alert(localStorage.getItem('teste'));
 }