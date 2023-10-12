document.addEventListener("DOMContentLoaded", function () {
  var sourceDiv = document.getElementById("variations");
  var targetDiv = document.getElementById("theme-page-wrapper");

  var sourceHeight = sourceDiv.clientHeight * (100 / window.innerHeight);

  targetDiv.style.minHeight =
    window.innerWidth > 700
      ? sourceHeight + sourceHeight / 4 + "vh"
      : (sourceHeight + sourceHeight / 4) * 2 + "vh";
  console.log(sourceHeight);
});
// Aluminum Base Changing
function aluminumBaseChange() {
  document.getElementById("baseImage").classList = "";
  document
    .getElementById("baseImage")
    .classList.add(
      document.getElementById("pa_cast-aluminum-base").value.toUpperCase()
    );
  document.getElementById("baseImage").src = `./Product photos/Bases/${document
    .getElementById("pa_cast-aluminum-base")
    .value.toUpperCase()}.png`;
}
const aluminumBaseElements = document.querySelectorAll(
  '[data-attribute="pa_cast-aluminum-base"]'
);

aluminumBaseElements.forEach(function (element) {
  element.addEventListener("click", changeBase);
});

function changeBase(e) {
  if (e.currentTarget.classList.contains("selected")) {
    e.currentTarget.classList.remove("selected");
  } else {
    aluminumBaseElements.forEach(function (element) {
      element.classList.remove("selected");
    });
    // console.log(e.currentTarget.dataset.value);
    document.getElementById("pa_cast-aluminum-base").value =
      e.currentTarget.dataset.value;
    aluminumBaseChange();

    e.currentTarget.classList.add("selected");
  }
}
// Finial Changing
function finialChange() {
  document.getElementById("finialImage").classList = "";
  document
    .getElementById("finialImage")
    .classList.add(
      document.getElementById("pa_cast-aluminum-finial").value.toUpperCase()
    );
  document.getElementById(
    "finialImage"
  ).src = `./Product photos/Finials/${document
    .getElementById("pa_cast-aluminum-finial")
    .value.toUpperCase()}.png`;
}
const finialElements = document.querySelectorAll(
  '[data-attribute="pa_cast-aluminum-finial"]'
);

finialElements.forEach(function (element) {
  element.addEventListener("click", changefinial);
});

function changefinial(e) {
  if (e.currentTarget.classList.contains("selected")) {
    e.currentTarget.classList.remove("selected");
  } else {
    finialElements.forEach(function (element) {
      element.classList.remove("selected");
    });
    // console.log(e.currentTarget.dataset.value);
    document.getElementById("pa_cast-aluminum-finial").value =
      e.currentTarget.dataset.value;
    finialChange();

    e.currentTarget.classList.add("selected");
  }
}

// Sign Board Changing

function signBoardChange() {
  document.getElementById("signBoardImage").classList = "";
  document
    .getElementById("signBoardImage")
    .classList.add(document.getElementById("pa_decorative-scroll").value);
  document.getElementById(
    "signBoardImage"
  ).src = `./Product photos/Sign Hardware/${
    document.getElementById("pa_decorative-scroll").value
  }.png`;
}
const signBoardElements = document.querySelectorAll(
  '[data-attribute="pa_decorative-scroll"]'
);

signBoardElements.forEach(function (element) {
  element.addEventListener("click", changeSignBoard);
});

function changeSignBoard(e) {
  if (e.currentTarget.classList.contains("selected")) {
    e.currentTarget.classList.remove("selected");
  } else {
    signBoardElements.forEach(function (element) {
      element.classList.remove("selected");
    });
    // console.log(e.currentTarget.dataset.value);
    document.getElementById("pa_decorative-scroll").value =
      e.currentTarget.dataset.value;
    signBoardChange();

    e.currentTarget.classList.add("selected");
  }
}

// Aluminum Post Change

function poleChange() {
  document.getElementById("poleImage").classList = "";
  document
    .getElementById("poleImage")
    .classList.add(document.getElementById("pa_aluminum-post").value);
  document.getElementById("poleImage").src = `./Product photos/Poles/${
    document.getElementById("pa_aluminum-post").value
  }.png`;
}
const poleElements = document.querySelectorAll(
  '[data-attribute="pa_aluminum-post"]'
);

poleElements.forEach(function (element) {
  element.addEventListener("click", changepole);
});

function changepole(e) {
  if (e.currentTarget.classList.contains("selected")) {
    e.currentTarget.classList.remove("selected");
  } else {
    poleElements.forEach(function (element) {
      element.classList.remove("selected");
    });
    // console.log(e.currentTarget.dataset.value);
    document.getElementById("pa_aluminum-post").value =
      e.currentTarget.dataset.value;
    poleChange();

    e.currentTarget.classList.add("selected");
  }
}

// Stop Sign Change

function stopSignChange() {
  document.getElementById("stopSignImage").classList = "";
  document
    .getElementById("stopSignImage")
    .classList.add(document.getElementById("pa_signature-stop-sign").value);
  document.getElementById("stopSignImage").src = `./Product photos/Stop Signs/${
    document.getElementById("pa_signature-stop-sign").value
  }.png`;
}
const stopSignElements = document.querySelectorAll(
  '[data-attribute="pa_signature-stop-sign"]'
);

stopSignElements.forEach(function (element) {
  element.addEventListener("click", changestopSign);
});

function changestopSign(e) {
  if (e.currentTarget.classList.contains("selected")) {
    e.currentTarget.classList.remove("selected");
  } else {
    stopSignElements.forEach(function (element) {
      element.classList.remove("selected");
    });
    // console.log(e.currentTarget.dataset.value);
    document.getElementById("pa_signature-stop-sign").value =
      e.currentTarget.dataset.value;
    stopSignChange();

    e.currentTarget.classList.add("selected");
  }
}

// screenshot

function captureScreenshot() {
  const divToCapture = document.getElementById("capture-div");

  // Set the scale option to improve image quality
  const options = {
    scale: 4, // Increase this value for higher quality (e.g., 2 for twice the resolution)
  };

  // Use html2canvas with the specified options
  html2canvas(divToCapture, options).then(function (canvas) {
    // Convert the canvas to an image
    const screenshot = canvas.toDataURL("image/png");

    // Create a new window or open a new tab to display the screenshot
    // const newWindow = window.open();
    // newWindow.document.write('<img src="' + screenshot + '" />');
    const urlElements = document.getElementsByName("url");

    for (const element of urlElements) {
      element.value = screenshot;
    }
  });
}

const loader = document.querySelector("#loader");

// Fetch API
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  loader.style.visibility = "visible";
  // Create a FormData object from the form
  const formData = new FormData(this);
  formData.forEach(function (value, key) {
    console.log(key, value);
  });
  fetch("sendMail.php", {
    method: "post",
    body: formData,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
      // toastr.success("Operation was successful", "Success");
      // Reset the form
      document.getElementById("myForm").reset();
      loader.style.visibility = "hidden";
    })
    .catch(function (error) {
      console.log(error);
      // toastr.error("An error occurred during the operation", "Error");
    });
});
function downloadAsPDF() {
  var loader = document.getElementById("loader"); // Get the loader element

  loader.style.visibility = "visible";

  document.getElementById("download-icon").classList.add("opacityZero");
  var node = document.getElementById("capture-div");
  var options = {
    quality: 1,
    bgcolor: "#ffffff", // Set the background color here
  };

  domtoimage.toPng(node, options).then(function (dataUrl) {
    var doc = new jsPDF("p", "mm", "a4"); // Create an A4-sized PDF
    var width = doc.internal.pageSize.width;
    var height = doc.internal.pageSize.height;

    // Add the image, making it fill the entire page
    doc.addImage(dataUrl, "PNG", 0, 0, width, height);

    doc.save("Signboard.pdf");

    // Hide the loader after the PDF is generated
    loader.style.visibility = "hidden";

    // Restore the download icon visibility
    document.getElementById("download-icon").classList.remove("opacityZero");
  });
}
