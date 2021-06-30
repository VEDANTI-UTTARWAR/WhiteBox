if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
        myInitCode();
    });
}

function myInitCode() {
var myElement = document.createElement("div");
myElement.style.width = "400px";
myElement.style.height = "200px";
myElement.style.background = "lightblue";
document.body.appendChild(myElement);
}
