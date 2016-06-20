$(document).ready(function(){
   //Just to test jquery is working 
   $('header').hide().show("slow");
    var submitbutton = $('#commentform button');
    

submitbutton.click(function(){
    //.val(); works in this scope but not outside this scope, I have no clue why 
    //this is user text
    var text = $('#commentform textarea').val();
    var username = $(".comment-box-username").val();
    
    clearForm();
    checkForEmptyFormValues(username,text);
    
    });
    
});//end ready

//I gave the function two arguements since I decided to move it to the global scope
//I can't believe I was able to do this on my own without the help of the internet :)
function checkForEmptyFormValues(username,text){
    if(username.length && text.length > 0){
        console.log('username: ' + username);
        console.log('comment-text: ' + text);
    }else{ if(text.length == 0){
        $(".comment-box-textarea").css('border', 'solid red');
        console.log("Text area is empty");
    }else{ if(username.length == 0){
        $(".comment-box-username").css('border', 'solid red');
        console.log("username is empty");
    }else{if(username.length && text.length == 0){
        $(".comment-box-username").css('border', 'solid red');
        $(".comment-box-textarea").css('border', 'solid red');
        console.log("Both textarea and username fields are empty");
    }
        
    }
    }   
    }       
 }

function clearForm(){
        $('#commentform textarea').val("");
        $(".comment-box-username").val("");
        $(".comment-box-textarea").css('border', 'none');
        $(".comment-box-username").css('border', 'none');
    }








