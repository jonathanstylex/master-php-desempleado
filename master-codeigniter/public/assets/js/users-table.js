
$.ajax({
	url  : BASE_URL + '/users/table',
	dataType: 'json',
	type: 'GET',
	cache: false,
	success :  function(result)
	{	
		

   table = $('#users').DataTable({		
			"bProcessing": true,		
			data: result,               
			columns: [
			    
                {"data": null,"render": function (data) { 

                 return '<img height="70" width="70" src=" ' + BASE_URL + '/uploads/thumbnails/' + data.img + ' " class="img-responsive img-circle" />';
               }},
                             
                { "data": "first_name" },              
                { "data": "last_name" },
                { "data": "email" },          
           
                {"data": null,"render": function (data) { 
                 return '<a class="btn btn-info" href=" ' + BASE_URL + '/users/' + data.id_user +'"><span class="far fa-eye"></span></a>';
               }},
               {"data": null,"render": function (data) { 

                 return '<a class="btn btn-success" href="' + BASE_URL + '/users/'+ data.id_user + '/edit' + '"><span class="fas fa-edit"></span></a>';
               }},
                   {"data": null,"render": function (data) { 

                     return '<a class="btn btn-danger" onclick="deleteUser('+ data.id_user +')" ><span class="fas fa-trash-alt"></span</a>';
                   }},
                   
                   ],


            });//end table   


 }
});


function deleteUser(params)
{

  swal({
   title: 'Are you sure to delete this record?',
   text: 'There is no way back!',
   type: 'warning',
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   confirmButtonText: 'You accept?',
   cancelButtonColor: '#d33'    

 }).then(function(result) {      

        
         if (result) {

         	confirmDelete(params);

         }

       }, function(error) { 

         console.log(error);  

       });

}

 
  function confirmDelete(params)
  {

    $.ajax({
    	url: BASE_URL + '/users/' + params,
      type: 'DELETE',   
      dataType: 'json'    
    })
    .done(function(result) {


         //  if (result.user == 'delete') {
          
         //   $("#user_delete").html('<p>'+ result.user+'<p>');
         // }


          if (result.user) {
          
           $("#user_delete").html('<p>'+ result.user+'<p>');
         }

         // location.reload();


       });



  }





$("#usersEdit").submit(function(event) {
  event.preventDefault();


  let id_user = $("#user_id").val();
  let first_name = $("#first_name").val();
  let last_name = $("#last_name").val();  
  // let email = $("#email").val(); 




  $.ajax({
    url: BASE_URL + '/users/' + user_id,  
    type: 'PUT',
    dataType: 'json',
    data: {
      first_name: first_name,
      last_name: last_name
      // email: email     
    },
  })
  .done(function(data) {
 

    // console.log(data); 



  if (data.user == "Update success") { 

   $("#user_update").html('<p>'+ data.user+'<p>');

    window.location=BASE_URL + '/users';

   // location.reload();
 }     





})
  .fail(function() {
    console.log("error");
  });

});


