var guest_list_array=[];
function submit(){
   var guest_name=document.getElementById("guest_name").value;
   guest_list_array.push(guest_name);
   console.log(guest_list_array);

   document.getElementById("display_names").innerHTML=guest_list_array.toString();

 }
 function show(){
     var guest_list=[];
    for(var i=0;i<guest_list_array.length;i++ ){
        guest_list.push("<br>"+guest_list_array[i]);
    }
    remove_commas=guest_list.join(" ");
    document.getElementById("display_list_of_guest").innerHTML=remove_commas;


 }
 function sorting(){
     guest_list_array.sort();
     remove_commas=guest_list_array.join(" ");
     document.getElementById("display_sorted_list_of_guest").innerHTML=remove_commas;
 }
 function search(){
     var search=document.getElementById("search_name").value;
     var found=0;
     for(var j=0;j<guest_list_array.length;j++ ){
         if (search==guest_list_array[j]){
             found=found+1;
         }
     }
     document.getElementById("search_result").innerHTML="name found "+found+" times";
 }
 
 