//Pure JS to get GET parameter from URL
var getUrlParameter = function getUrlParameter(sParam) { 
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

//Call and inject sndReq function to host page like charm !
location.href="javascript:sndReq('action=say_thanks&id="+getUrlParameter('id')+"','saythanks'); void 0";

 
