//function GetURLParameter(sParam){
//    var sPageURL = window.location.search.substring(1);
//    var sURLVariables = sPageURL.split('&');
//    for (var i = 0; i < sURLVariables.length; i++) {
//        var sParameterName = sURLVariables[i].split('=');
//        if (sParameterName[0] == sParam) {
//            return sParameterName[1];
//        }
//    }
//}​
function urlTest {
  const params = new URLSearchParams(document.location.search);
  var lang = params.get("lang");
  document.getElementById("langid").innerHTML = lang;
}
