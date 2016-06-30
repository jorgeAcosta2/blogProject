$(document).ready(function(){
   //Just to test jquery is working 
   $('header').hide().show("slow");
    var commentForm = $('#commentform');
    var url = $(this).attr('action');

    
commentForm.submit(function(e){
    e.preventDefault();
    var text = $('.comment-box-textarea').val();
    var username = $(".comment-box-username").val();
    var formData = commentForm.serialize();
    
    checkForEmptyFormValues(username,text);
    
    $.post(url,formData,function(data){
        var response = data;
        var user = response.user,
            comment = response.comment;
            uglyHtml(user,comment);     
        },"json");
        clearForm();              
});//end submit    

$('.comment-holder-ul').on('click','.deletebutton-holder',function(e){
    var $id = $(this).parent().attr('id');
    $.ajax({
        url: url,
        type: 'DELETE',
        data: {'id': $id},
        success: function(id){
            $("#"+id).remove();
            console.log(id + ' was removed');
            } 
        });//end ajax delete request
    });//end on click event
});//end load

function uglyHtml(user,comment){
    var commentHtml="";
    commentHtml += "<li class=\"comment-holder\" form=\"commentform\">";
    commentHtml += "<button class=\"deletebutton-holder\">X<\/button>";
    commentHtml += "<h3 class=\"username-field\"><img src=\"commentavatar.png\" class=\"user-img\"\/>"+" "+user+"<\/h3>";
    commentHtml += "<div class=\"comment-text\">"+comment+"<\/div>";
    commentHtml += "<\/li>";
    $('.comment-holder').each(function(i,element){element.id = 'comment' + i;});
    $('.comment-holder-ul').prepend(commentHtml);
    $('.comment-holder').each(function(i,element){element.id = 'comment' + i;});    
}    

function clearForm(){
        $('.comment-box-textarea').val("");
        $(".comment-box-username").val("");
        $(".comment-box-textarea").css('border', 'none');
        $(".comment-box-username").css('border', 'none');
    };

function checkForEmptyFormValues(username,text){
    if(username.length && text.length > 0){
        console.log('Form is completely filled.');
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













