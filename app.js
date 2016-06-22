$(document).ready(function(){
   //Just to test jquery is working 
   $('header').hide().show("slow");
    var commentForm = $('#commentform');
    

commentForm.submit(function(e){
    e.preventDefault();
    var text = $('.comment-box-textarea').val();
    var username = $(".comment-box-username").val();
    var url = $(this).attr('action');
    var formData = commentForm.serialize();
    
    checkForEmptyFormValues(username,text);
    
    $.post(url,formData,function(data){
       $('#page-data').html(data);
    });
    
    clearForm();
 });    
    
    

//I gave the function two arguements since I decided to move it to the global scope
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
 };

function clearForm(){
        $('.comment-box-textarea').val("");
        $(".comment-box-username").val("");
        $(".comment-box-textarea").css('border', 'none');
        $(".comment-box-username").css('border', 'none');
    };

});//end ready



