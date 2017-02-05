// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
    <script>
//      console.log($("#btn1"))
//      $("body").append("<b>Hello</b>");
//      $("body").append("<b>Hello</b>").append("<b>World</b>").css("color","red");
//      var btn1 = document.getElementById('btn1');
//      $("#btn1").click(function(){console.log("click start")});

      var callbackFunc = function(jsonData){
        console.log("callbackFunc start");

        if(jsonData.results != null){
          console.log("Get Zipcode data");
          console.log(jsonData.results);
          console.log(jsonData.results[0].address1);
          console.log(jsonData.results[0].address2);

          var combine_address_results = jsonData.results[0].address1 + jsonData.results[0].address2 + jsonData.results[0].address3;
          var combine_kana_results = jsonData.results[0].kana1 + jsonData.results[0].kana2 + jsonData.results[0].kana3;

          $("#search-result1").val(combine_address_results).css("color","black");
          $("#search-result2").val(combine_kana_results).css("color","black");
          $("#output-zipcode-errmsg").html("");

        }else{
          var errorMsg="そのような郵便番号は存在しません";
          $("#search-result1").val(errorMsg).css("color","red");
          $("#search-result2").val(errorMsg).css("color","red");
          $("#output-zipcode-errmsg").html("郵便番号を再入力してください").css("color","red");
        }
      };

      $(function() {
        $("#jquery-ui-datepicker").datepicker({
          minDate: new Date( 2015, 12, 1  ),
          maxDate: new Date( 2016, 12, 1 )
        });

     
        function deleteString(string_obj, find_string, replace_string){
          string_obj = string_obj.replace(find_string, replace_string);
          return string_obj
        };


        $("#search-result1").click(function(){
          var zipcode_value = $("#input-zipcode-num").val();
          console.log("outputText1 onclick");
          zipcode_value = deleteString(zipcode_value, /-/g, '');
          console.log(zipcode_value);
          $("#input-zipcode-num").val(zipcode_value);
          $("#output-zipcode-errmsg").html("");
        });


        $("#search-result2").click(function(){
          var zipcode_value = $("#input-zipcode-num").val();
          console.log("outputText2 onclick");
          zipcode_value = deleteString(zipcode_value, /-/g, '');
          console.log(zipcode_value);
          $("#input-zipcode-num").val(zipcode_value);
          $("#output-zipcode-errmsg").html(""); 
        });


        $("#input-zipcode-num").click(function(){
          var zipcode_value = $("#input-zipcode-num").val();
          console.log("input-zipcode-num onclick");
          zipcode_value = deleteString(zipcode_value, /-/g, '');
          console.log(zipcode_value);
          $("#input-zipcode-num").val(zipcode_value);
          $("#output-zipcode-errmsg").html("");
        });

        $("#btn2").click(function(){
          console.log("btn2 click");
          
          var zipcode_value = $("#input-zipcode-num").val();
 
          console.log($("#input-zipcode-num").val()); 
          console.log(zipcode_value.length);   

          zipcode_value = deleteString(zipcode_value, /-/g, '');      
          $("#input-zipcode-num").val(zipcode_value);
              
          if(zipcode_value.length != 7){
            $("#output-zipcode-errmsg").html("Zipcode is ERROR!").css("color","#f00");
            $("#search-result1").val("");
            $("#search-result2").val("");
          }else{
            console.log("ajax start");

            $.ajax({
              type: "GET",
              url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode="+zipcode_value,
              dataType: "jsonp",
              jsonp:"callback",
              jsonpCallback:"callbackFunc",
/*
            }).done(function(data){
              console.log(data.results);
              console.log("aaaa");
*/
            });
          }
        });

        $("#btn3").click(function(){
          console.log("btn2 click");
          
          var zipcode_value = $("#input-zipcode-num").val();
 
          console.log($("#input-zipcode-num").val()); 
          console.log(zipcode_value.length);   

          zipcode_value = deleteString(zipcode_value, /-/g, '');      
          $("#input-zipcode-num").val(zipcode_value);
              
          if(zipcode_value.length != 7){
            $("#output-zipcode-errmsg").html("Zipcode is ERROR!").css("color","#f00");
            $("#search-result1").val("");
            $("#search-result2").val("");
          }else{
            console.log("ajax start");

            $.ajax({
              type: "GET",
              url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode="+zipcode_value,
              dataType: "jsonp",
              jsonp:"callback",
              jsonpCallback:"callbackFunc",
/*
            }).done(function(data){
              console.log(data.results);
              console.log("aaaa");
*/
            });
          }
        });

      });
    </script>