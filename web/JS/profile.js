let currentStep = 1;

const progressBar = document.querySelector(".progress");
const progressTextElement = document.getElementById("progress-text");

function nextStep() {
  let value;
  switch (currentStep) {
    case 1:
      const fname = document.getElementById("fname").value.trim();
      const lname = document.getElementById("lname").value.trim();
      const age = document.getElementById("age").value.trim();
    
      // Validation: Checking if all the fields are filled
      if (fname === "" || lname === "" || age === "") {
        alert("Please fill in all fields");
        return;
      }

      // Validation: Check if names contain digits
      if (/\d/.test(fname) || /\d/.test(lname)) {
        alert("First and last names should not contain numbers");
        return;
      }

      document.getElementById("profile-name").textContent = `${fname} ${lname}`;
      document.getElementById("profile-last-name").textContent = lname;
      document.getElementById("profile-age").textContent = age;
      break;
    case 2:
      value = document.getElementById("fields").value.trim();
      document.getElementById("profile-fields").textContent = value;
      break;
    case 3:
      value = document.getElementById("checkups").value.trim();
      document.getElementById("profile-checkups").textContent = value;
      break;
    case 4:
      value = document.getElementById("history").value.trim();
      document.getElementById("profile-history").textContent = value;
      break;
    case 5:
      value = document.getElementById("activities").value.trim();
      document.getElementById("profile-activities").textContent = value;
      break;
    case 6:
      value = document.getElementById("physical").value.trim();
      document.getElementById("profile-physical").textContent = value;
      break;
    case 7:
      value = document.getElementById("goals").value.trim();
      document.getElementById("profile-goals").textContent = value;
      break;
    case 8:
      value = document.getElementById("scale").value.trim();
      document.getElementById("profile-scale").textContent = value;
      break;
    default:
      break;
  }

  document.getElementById(`step${currentStep}`).classList.add("hidden");
  currentStep++;
  if (currentStep <= 8) {
    document.getElementById(`step${currentStep}`).classList.remove("hidden");
  } else {
    document.getElementById("profile").classList.remove("hidden");
    progressBar.style.width = "100%";
    progressTextElement.textContent = "Profile Completed 100%";
  }

  // Update progress bar width
  progressBar.style.width = `${(currentStep / 8) * 100}%`;
  // Update progress text
  progressTextElement.textContent = `Profile Completed ${(currentStep / 8) * 100}%`;
}

function skipStep() {
  if (currentStep === 2) {
    const fname = document.getElementById("fname").value;
    if (/\d/.test(fname)) {
      alert("First name should not contain numbers");
      return;
    }
    if (fname.trim() === "") {
      alert("You should enter your first name to progress");
      return;
    }
    document.getElementById("profile-name").textContent = fname;
  }
  document.getElementById(`step${currentStep}`).classList.add("hidden");
  currentStep++;
  if (currentStep <= 8) {
    document.getElementById(`step${currentStep}`).classList.remove("hidden");
  } else {
    document.getElementById("profile").classList.remove("hidden");
    progressBar.style.width = "100%";
    progressTextElement.textContent = "Profile Completed 100%";
  }
  // Update progress bar width
  progressBar.style.width = `${(currentStep / 8) * 100}%`;
  // Update progress text
  progressTextElement.textContent = `Profile Completed ${(currentStep / 8) * 100}%`;
}
