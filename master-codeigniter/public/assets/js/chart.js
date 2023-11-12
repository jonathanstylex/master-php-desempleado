getChart();


function getChart()
{ 

 
    $.ajax({
      url: BASE_URL + '/users/total',   
      dataType: 'json',
      type: 'GET'    
    })
    .done(function(result) {      

      // console.log(result);

      chartData(result);

    });

  }

  function chartData(resp){

    let data = resp;

        // console.log(data);

        Morris.Donut({
          element: 'myfirstchart',
          data: [    
          {label: "Total Users", value: data[0].totalUsers}         
          ]
        });

      }




 $("#mini").click(function(event) {

  $("#myfirstchart").hide('fast');

});


$("#maxi").click(function(event) {

  $("#myfirstchart").show('fast');

});



$("#closs").click(function(event) {

  $("#myfirstchart").hide('fast');
  
  $("#myfirstchart").remove("#myfirstchart");

});






