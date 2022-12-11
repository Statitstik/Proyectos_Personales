/*! jQuery v2.2.1 | (c) jQuery Foundation | jquery.org/license */
$(document).ready(function () {
    var interval = 1;   //number of mili seconds between each call
    var refresh = function() {
    $.getJSON("http://mcapi.ca/query/mc.hardblock.me/players",function(json){
          if (json.status !== true) {
            // error
            $("#players .p1").text('Servidor Offline').addClass('server-error');
        } else {
            // success
            $("#players .p1");
            $("#players .p2");
            $(".player-count-network").html(json.players.online);
            setTimeout(function(){ $('.player-count-network').removeClass('zoomIn').addClass('zoomOut') }, 14350); 
            setTimeout(function(){ $('.player-count-network').removeClass('zoomOut').addClass('zoomIn') }, 0);
        }
    });
    setTimeout(function() {
        refresh();
            },
        interval);
            }
        refresh();
});