const form = document.getElementById("form");
const fullname = document.getElementById("name");
const companyname = document.getElementById("companyname");
const designation = document.getElementById("designation");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const result = document.getElementById("result");
//const resultiLearn = document.getElementById("resultiLearn");
const heading = document.getElementById("exampleModalLabel");
const exampleModal = document.getElementById("exampleModal");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var raw = JSON.stringify({
    name: fullname.value,
    email: email.value,
    phone: phone.value,
    companyname: companyname.value,
    designation: designation.value,
    // message:message.value
  });

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
    .then(async (response) => {
      if (response.status == 200) {
        result.innerHTML =
          "Thanks for being awesome! We will be in touch with you shortly.";
        // resultiLearn.innerHTML = "We have received your request! We will be in touch with you shortly.";
        heading.innerHTML = "Awesome!";
        form.style.display = "none";
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
        //form.style.display='none';
      } else {
        result.innerHTML = "Please check all fields you filled.";
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
      form.reset();
      setTimeout(() => {
        //result.style.display = "none";
        //exampleModal.modal('hide');
      }, 5000);
    })
    .catch((error) => {
      console.log(`error:`, error);
      result.innerHTML = "Something went wrong!";
    });
});

const leadform = document.getElementById("leadForm");
const leadfullname = document.getElementById("leadname");
// const companyname = document.getElementById("companyname");
// const designation = document.getElementById("designation");
const leademail = document.getElementById("leademail");
const leadphone = document.getElementById("leadphone");
// const message = document.getElementById("message");
const leadresult = document.getElementById("leadresult");
//const resultiLearn = document.getElementById("resultiLearn");
const leadheading = document.getElementById("leadFormLabel");
const leadModal = document.getElementById("leadFormModal");

leadform.addEventListener("submit", function (e) {
  e.preventDefault();
  var raw = JSON.stringify({
    name: leadfullname.value,
    email: leademail.value,
    phone: leadphone.value,
    // companyname:companyname.value,
    // designation:designation.value,
    // message:message.value
  });

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
    .then(async (response) => {
      if (response.status == 200) {
        leadresult.innerHTML =
          "Thanks for being awesome! We will be in touch with you shortly.";
        // resultiLearn.innerHTML = "We have received your request! We will be in touch with you shortly.";
        leadheading.innerHTML = "Awesome!";
        leadform.style.display = "none";
        leadresult.classList.remove("text-gray-500");
        leadresult.classList.add("text-green-500");
        //form.style.display='none';
      } else {
        leadresult.innerHTML = "Please check all fields you filled.";
        leadresult.classList.remove("text-gray-500");
        leadresult.classList.add("text-red-500");
      }
      leadform.reset();
      setTimeout(() => {
        //result.style.display = "none";
        //exampleModal.modal('hide');
      }, 5000);
    })
    .catch((error) => {
      console.log(`error:`, error);
      leadresult.innerHTML = "Something went wrong!";
    });
});
