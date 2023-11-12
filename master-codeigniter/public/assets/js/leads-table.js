
//use tamplates literals
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
var table_two;

var checkear;

$.ajax({
	url  : BASE_URL + '/leads/table',
  type: 'GET',
  cache: false,
  success :  function(result)
  {
    // alert(result);

    // console.log(result);
   // var par = JSON.parse(result);
   
   table_two = $('#leads').DataTable({			
     "bProcessing": true,			
     data: result,               
     columns: [
     // { "data": "id_country" },
     {"data": null,"render": function (data) { 
 // <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
 return `<input type="checkbox"  class="check" onclick="check(${data.id_lead})"  value="${data.id_lead}">`;
  // return '<input type="checkbox" class="check"  value="">';
}},
{"data": null,"render": function (data) { 

 return '<img height="70" width="70" src=" ' + BASE_URL + '/uploads/thumbnails/' + data.img + ' " class="img-responsive img-circle" />';
}},

{ "data": "first_name" },             
{ "data": "company" },
{ "data": "email" },
{ "data": "phone" },
{"data": null,"render": function (data) { 
 return '<a class="btn btn-info btn-lg"  href=" ' + BASE_URL + '/leads/' + data.id_lead +'"><span class="far fa-eye"></span></a>';
}},

],


            });//end table
   
   
 }
});

function check($params){


  // $('.check').click(function(event) {
    $('.check').change(function(event) {
     // $('.check').select(function(event) {

      $('.check').select();

  // let check = $(".check").val();

  checkear = $params;

  // alert(check);

  // console.log(check);

  // console.log($params);
});

  }


  function offertAll(){

    // alert("ok");

    if (checkear == null) {

    // alert("nulo");

  }else{

   // alert("no"+check);

   sendMail(checkear);
 }




 function sendMail($email){

   let emailVal = $email;

    // alert('send'+$email);

    $.ajax({
      url: BASE_URL+'/leads/email',   
      dataType: 'json',
      data: {emailVal: emailVal},    
    })
    .done(function(result) {


    // alert('send'.result);

    // console.log('send'+result);

    // console.log('send'+result.email);

      // console.log('send'+result[0].email);




    });

  }


}





//leads add
$("#leadsAdd").submit(function(event) {
  event.preventDefault();



  var first_name = $("#first_name").val();
  var last_name = $("#last_name").val();
  var company = $("#company").val();
  var email = $("#email").val();
  var street = $("#street").val();
  var country = $("#country").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var postal_code = $("#postal_code").val(); 
  var title = $("#title").val();
  var phone = $("#phone").val();
  var cell_phone = $("#cell_phone").val();
  var source = $("#source").val();
  var sector = $("#sector").val();
  var income = $("#income").val();
  var fax = $("#fax").val();
  var website = $("#website").val();
  var state_client = $("#state_client").val()
  var quantity_worker = $("#quantity_worker").val();
  var qualification = $("#qualification").val();
  var id_skype = $("#id_skype").val();
  var id_twiiter = $("#id_twiiter").val();
  var description = $("#description").val();

  // console.log(role);

  $.post(BASE_URL + '/leads/create',
  {
    first_name: first_name,
    last_name: last_name,
    email: email,
    company: company,
    street: street,   
    country: country,
    city: city,
    state: state,
    postal_code: postal_code,
    title: title,
    phone: phone,
    cell_phone: cell_phone,
    source: source,
    sector: sector,
    income: income,
    fax: fax,
    website: website,
    state_client: state_client,
    quantity_worker: quantity_worker,
    qualification: quantity_worker,
    id_skype: id_skype,
    id_twiiter: id_twiiter,
    description:description
    
  }, function(data) {
    /*optional stuff to do after success */

    var par = JSON.parse(data);

    // console.log(data);

    // console.log(par);

    // $("#msg_first_name").html(par.msg_first_name.first_name);
    // $("#msg_last_name").html(par.msg_last_name.last_name);

    if (par.msg_first_name || par.msg_last_name || par.msg_country || par.msg_state) {

       // $("#msg_first_name").empty();

       $("#msg_first_name").html(par.msg_first_name.first_name);
       $("#msg_last_name").html(par.msg_last_name.last_name);
       $("#msg_country").html(par.msg_country.country);
       $("#msg_state").html(par.msg_state.state);

        // $("#msg_first_name").empty();

       // $("#msg_first_name").remove();

    }




    if (par.msg_success == "Register success") { 

      $("#msg_success").html(par.msg_success);    
      // window.location=BASE_URL + 'leads';
       location.reload();
    }     

  });





});



