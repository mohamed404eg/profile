/* contact  */
let name = document.querySelector(".name");
let subject = document.querySelector(".subject");

 let namefalse = false;
    let subjectfalse = false;




    // function check
function check(){


  // check vild
    if(name.value !== "" && name.value.length <= 10){
        namefalse = true;
  }

  if(subject.value !== "" && subject.value.length <= 500){
    subjectfalse = true;
}



    // check submit
    if(namefalse === false || subjectfalse === false) {
        let submit = document.querySelector(".submit").onclick = function (e) {
            e.preventDefault()
        };

    }
   
}

/* contact  */

