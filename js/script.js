   function dropping_focus() {
        for(var i = 1; i <=9  ; i++){
            document.getElementById('flag_' + i).innerHTML = '0';
            document.getElementById('flag_up_' + i).innerHTML = '0';
        }
    };
   $(function() {
             var focusClick = 0;
    $('#form_1').focus(function() { focusClick = 1; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_2').focus(function() { focusClick = 2; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_3').focus(function() { focusClick = 3; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_4').focus(function() { focusClick = 4; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_5').focus(function() { focusClick = 5; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_6').focus(function() { focusClick = 6; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_7').focus(function() { focusClick = 7; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_8').focus(function() { focusClick = 8; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
    $('#form_9').focus(function() { focusClick = 9; document.getElementById('autofocus').innerHTML = focusClick; dropping_focus(); });           
   });
   // function for hiding checkboxes
   $(document).ready(function() {
    var arr = new Array(9);
    $('.delete').click(function(){
        var a;
        var link;
        for(var i = 1; i <= 9 ; i++){
            link = '#chose_' + i + ':checked';
            a = $(link).val();
            console.log(a);
                if(a !== undefined){ $('#string_' + i).hide(); }
        }
        }) ;
    });
    // function for handling keyboard events
function moveRect(e){
    $(function() {
    var result = 0;
        result = e.keyCode;
                        var count = 0;
                        var flag = new Array();
                        var flagUp = new Array();
                        var execut = new Array();
                        for(var i = 1; i <= 9 ; i++){
                            flag[i] = $("#flag_" + i).html();
                            flagUp[i] = $("#flag_up_" + i).html();
                        }
                        var autofocus = 1;
        function validation (){
                    var number =  $("#autofocus").html();
                        number = number*1;
                        for(var i = 1; i <= 9 ; i++){
                           execut[i] = $("#validator_" + i).html();
                            if(execut[i] == 0 && i == number){
                                $('#validator_'+i).text("Yes");
                                count = number + 1;
                                $("#form_" + count).focus(); break;
                            };
                        }
        };
        function focusStepDown() {
                        var startDown =  $("#autofocus").html();     
                            startDown = startDown*1;
                        
                        for(var i = 1; i <= 9 ; i++){
                            document.getElementById('flag_up_' + i).innerHTML = 0;                     
                        }
                        for(i = startDown + 1; i <= 9 ; i++){
                           if(flag[i] == 0) {count = i; 
                                             document.getElementById('flag_' + i).innerHTML = i;
                                             result = 0;
                                             break;
                            }
                        }
        };
        function focusStepUp() {
                        var startUp =  $("#autofocus").html();     
                            startUp = startUp*1;
                        for(var i = 1; i <= 9 ; i++){
                            document.getElementById('flag_' + i).innerHTML = 0;                     
                        }
                        for(var j = startUp - 1 ; j >= 1 ; j--){
                           if(flagUp[j] == 0) {count = j; 
                                             document.getElementById('flag_up_' + j).innerHTML = j;
                                             result = 0;
                                             break;
                            }
                        }
        };
        if(result == 40) focusStepDown(); 
        if(result == 38) focusStepUp(); 
        if(result == 13) validation();
    
        $("#form_" + count).focus(function() {
            autofocus = count;
           document.getElementById('autofocus').innerHTML = autofocus;
           //document.getElementById('type_autofocus').innerHTML = typeof(autofocus);
            
        }); 
        $("#form_" + count).focus(); 
    });
}
addEventListener("keydown", moveRect);
   