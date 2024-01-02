// Initialize
$('.optionSelected').html($('#weight').val())

// Track Changes
$("#weight").on('input', function() {
	$('.optionSelected').html($(this).val());
  // Could have done something with a switch case here
});


$(document).ready(function(){

    let userCookie = document.cookie
    // console.log('userCookie = '+userCookie)
    userCookie = userCookie.split('=')
    userCookie = userCookie[1]
    console.log('userCookie = '+userCookie)
    if(userCookie) {
        $('#weight').val(userCookie)
    }
    // $("input:text").val("Glenn Quagmire");

    $('input[type=range]').on('input', function () {
        let v = $("#weight").val()
        // console.log('v a ='+v)
        // setCookie('user', v, 365)
        // const d = new Date();
        // d.setTime(d.getTime() + (365*24*60*60*1000));
        // let expires = "expires="+ d.toUTCString();
        // document.cookie = "user=" + v + ";" + expires + ";path=/";
        // document.cookie = "user="+v+"; expires=Thu, 1 May 2025 12:00:00 UTC";
        document.cookie = "user="+v+"; SameSite=None; Secure";
        // let xxx = document.setcookie
        // console.log('xxx = '+xxx)
        // document.setUserCookie = "user="+v+"; expires=Thu, 1 May 2025 12:00:00 UTC";
        // let x = document.setUserCookie;
        // console.log('x a = '+x)

        for(var i = 0; i < 5; i++) {
            if(i!=v) {
                $('.content_'+i).addClass('contentUser')
            } else {
                $('.content_'+i).removeClass('contentUser')
            }
        }
    });

    $(".openBtn").click(function(e){
        console.log(e.target.id);
        $("#row"+e.target.id).slideToggle(100);
        $("#"+e.target.id).toggleClass('openBtnOpen').toggleClass('openBtnClose')
    });
});

// function setCookie(cname, cvalue, exdays) {
    
// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }


// var tabledata = [
//     {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
//     {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
//     {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
//     {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
//     {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
//     {
//         title:"Name",
//         value:"Steve Green",
//     },
//     {
//         title:"Age",
//         value:53,
//     }
// ];

// // var table = new Tabulator("#example-table", {
// //     height:"311px",
// //     data:tabledata,
// //     layout:"fitDataFill",
// //     responsiveLayout:"collapse",
// //     columns:[
// //     {formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false},
// //     {title:"Name", field:"name", width:200, responsive:0},
// //     {title:"Progress", field:"progress", hozAlign:"right", sorter:"number", width:150},
// //     {title:"Gender", field:"gender", width:150, responsive:2},
// //     {title:"Rating", field:"rating", hozAlign:"center", width:150},
// //     {title:"Favourite Color", field:"col", width:150},
// //     {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:150},
// //     {title:"Driver", field:"car", hozAlign:"center", width:150},
// //     ],
// // });

// var table = new Tabulator("#example-table", {
//     height:"311px",
//     data:tabledata,
//     layout:"fitDataFill",
//     responsiveLayout:"collapse",
//     columns:[
//     {formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false},
//     {title:"Name", field:"name", width:200, responsive:0},
//     {title:"Progress", field:"progress", hozAlign:"right", sorter:"number", width:150},
//     {title:"Gender", field:"gender", width:150, responsive:2},
//     {title:"Rating", field:"rating", hozAlign:"center", width:150},
//     {title:"Favourite Color", field:"col", width:150},
//     {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:150},
//     {title:"Driver", field:"car", hozAlign:"center", width:150},
//     ],
// });

// table.setPage(2);


// table.on("rowClick", function(e, row){ 
// 	alert("Row " + row.getData().id + " Clicked!!!!");
// });