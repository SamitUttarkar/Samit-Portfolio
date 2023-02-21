/*----------------------------------------------
 form submit
----------------------------------------------*/
jQuery(".contact_form #send_message").on('click', function(){
		
    var name 		= jQuery(".contact_form #name").val();
    var email 		= jQuery(".contact_form #email").val();
    var message 	= jQuery(".contact_form #message").val();
    var number 	= jQuery(".contact_form #number").val();
    var success     = jQuery(".contact_form .returnmessage").data('success');

    jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
    //checking for blank fields	
    if(name===''||email===''||message===''||number===''){
        
        jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
    }
    else{
        // Returns successful data submission message when the entered information is stored in database.
        jQuery.post("contact.php",{ ajax_name: name, ajax_email: email, ajax_number: number, ajax_message:message}, function(data) {
            
            jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
            
            
            if(jQuery(".contact_form .returnmessage span.contact_error").length){
                jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
            }else{
                jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
                jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
            }
            
            if(data===""){
                jQuery("#contact_form")[0].reset();//To reset form fields on success
            }
            
        });
    }
    return false; 
});