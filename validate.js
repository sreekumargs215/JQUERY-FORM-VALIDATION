// $(document).ready(function(){
//     // Letters only validation
//     jQuery.validator.addMethod("lettersonly", function(value, element) {
//         return this.optional(element) || /^[a-z]+$/i.test(value);
//         }, "Username Should contain Letters only "); 
//     // Age Validation 
//         jQuery.validator.addMethod(
// "validDOB",
// function(value, element) {              
//     var from = value.split(" "); 
//     var day = from[0];
//     var month = from[1];
//     var year = from[2];
//     var age = 18;
//     var mydate = new Date();
//     mydate.setFullYear(year, month-1, day);
//     var currdate = new Date();
//     var setDate = new Date();
//     setDate.setFullYear(mydate.getFullYear() + age, month-1, day);
//     if ((currdate - setDate) > 0){
//         return true;
//     }else{
//         return false;
//     }
// },
// "Sorry, you must be 18 years of age to apply"
// );
// // password alphanumeric validation 
// $.validator.addMethod("letters_numbers_special", function(value, element) {
// return this.optional(element) || /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]+$/i.test(value);
// //(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]
// }, "Enter atleast one Upper case ,one @ char, one number");

// $(function() {
// $("input[type=submit]").click(function() {
// var atLeastOneChecked = false;

// $("input[type=radio]").each(function() {
//     if ($(this).attr("checked") == "checked") {
//         atLeastOneChecked = true;
//     }
// });

// if (!atLeastOneChecked) {
//     $("#checked").text("Check one");
// } else {
//     $("#checked").text("One is checked");
// }
// });
// });​

//     $("#loginform").validate({
      
//         rules : {
//             uname1 : {
//                 required : true,
//                 minlength : 3,
//                 maxlength : 25,
//                 lettersonly : true,
//             },
//             psswd1 : {
//                 required : true,
//                 minlength : 3,
//                 maxlength : 25,
//                 letters_numbers_special : true,
//             },
//             date : {
//                 required : true,
//                 validDOB : true,
//             },
//             gender : {
//                 required : true,
                 
//             }


//         },
//         message : {
//             uname1 : {
//                 required : "This is a required field, Please fill this out",
//                 minlength : "Minimum Length of the user name must be atleast 3 characters",
//                 maxlength : "Minimum Length of the user name must be 25 characters only",
//             },
//             password : {
//                 required : "This is a required field please enter a valid password",
//                 minlength : "Minimum Length of the password must be atleast 3 characters",
//                 maxlength : "Minimum Length of the password must be 8 to 10 characters"
//             },
//             date : {
//                 required : "Please enter a valid DATE OF BIRTH"
//             }

//         }
//     })
// }