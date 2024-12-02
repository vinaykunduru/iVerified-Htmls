const form = document.getElementById("form");
const fullname = document.getElementById("name");
const companyname = document.getElementById("companyname");
const designation = document.getElementById("designation");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
//const result = document.getElementById("result");
const resultiLearn = document.getElementById("resultiLearn");
const heading = document.getElementById("exampleModalLabel");
const exampleModal = document.getElementById("exampleModal");

const skills = document.getElementById("skills");
const description = document.getElementById("description");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  var raw =  JSON.stringify({
    name:fullname.value,
    email:email.value,
    phone:phone.value,
    skills:skills.value,
    description:description.value

    //companyname:companyname.value,
    //designation:designation.value,
   // message:message.value
  })

  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

        fetch(
        "https://prod-api.iverified.live/api/v1/landingPage/booking-demo",
        requestOptions
        )
      .then(async(response) => {
        if (response.status == 200) {
           // result.innerHTML = "Thanks for being awesome! We will be in touch with you shortly.";
            resultiLearn.innerHTML = "We have received your request! We will be in touch with you shortly.";
            heading.innerHTML = "Awesome!";
            form.style.display = "none"; 
            //result.classList.remove("text-gray-500");
            //result.classList.add("text-green-500");
            //form.style.display='none';
        } else {
            resultiLearn.innerHTML = "Please check all fields you filled.";
            resultiLearn.classList.remove("text-gray-500");
            resultiLearn.classList.add("text-red-500");
        }
        form.reset();
        setTimeout(() => {
            //result.style.display = "none";
            //exampleModal.modal('hide');
        }, 5000);
      })
      .catch((error) => {
        console.log("error: ",error);
        resultiLearn.innerHTML = "Something went wrong!";
      })
     
    });

  
//   formData.forEach((value, key) => {
//     object[key] = value;
//   });
//   var requestBody = JSON.stringify(object);
//   result.innerHTML = "Please wait...";

//   axios.post(`https://interviews.iverified.live/api/v1/landingPage/booking-demo`,{
//     ...requestBody
//   }).then(async (response) => {
//       let json = response.data;
//       if (response.status == 200) {
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-green-500");
//       } else {
//         console.log(response);
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-red-500");
//       }
//     })
//     .catch(async(error) => {
//         let json = await error;
//       console.log("MyError",json);
//       result.innerHTML = "Something went wrong!";
//     })
//     .then(function () {
//     //   form.reset();
//       setTimeout(() => {
//         result.style.display = "none";
//       }, 5000);
//     });