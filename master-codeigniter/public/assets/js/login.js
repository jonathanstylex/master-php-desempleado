$( document ).ready(function() {
  $('#modalFormLogin').modal('toggle')
});


$("#logForm").submit(function(event) {
  event.preventDefault();

  let email = $("#email").val();
  let password = $("#password").val();

  let csrfHash = $('#tokenN').val();

  let formData = $('#logForm').serialize();

 

  $.post(BASE_URL + '/logearse',
  {       
    email: email,
    password: password
    // csrf_test_name:csrfHash   
  }, function(data) {  


    console.log(csrfHash);

   

    $("#msg_errors").html(data);

    if (data.access == 1) {

      window.location = '/dashboard';

    }

     if (data.access == 2) {

      window.location = '/panel';

    }

    if (data.access == 3) {

      $("#msg_errors").html('<p>Credentials do not match</p>');

    }      

  })
  .fail(function(data, textStatus, xhr) {
    

    $("#msg_errors").html('<p>Request failed, Error Status'+ data.status +'</p>');

  });




});
