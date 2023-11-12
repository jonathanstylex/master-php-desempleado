

$( document ).ready(function() {
  $('#modalFormLogin').modal('toggle')
});


$.ajax({
  url: BASE_URL+'/countrys',   
  dataType: 'json'    
})
.done(function(result) {



 $.each(result, function(index, val) {

   
    $("#country").append('<option value="'+ val.id_country + '">' + val.country + '</option>')

  });
});



$.ajax({
  url: BASE_URL+'/states',   
  dataType: 'json'    
})
.done(function(result) {



 $.each(result, function(index, val) {

   $("#state").append('<option value="'+ val.id_state + '">' + val.state + '</option>')
   
 });
});




$('#country').change(function(event) {

  let countryVal = $("#country").val();

  $.get(BASE_URL + '/select',{countryVal: countryVal}, function(data){

    console.log(data);



    $("#state").html('<option value="'+ data[0].id_state + '">' + data[0].state + '</option>');


     
      $("#option").remove();


    });



});

function pdfLeads(){

  window.location=BASE_URL + '/leads/pdf';
}

function excelLeads(){

  window.location=BASE_URL + '/leads/excel';
}





