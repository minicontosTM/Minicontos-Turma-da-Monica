document.addEventListener("DOMContentLoaded", function() {
  var redSlider = document.getElementById("redSlider");
  var greenSlider = document.getElementById("greenSlider");
  var blueSlider = document.getElementById("blueSlider");
  var redValue = document.getElementById("redValue");
  var greenValue = document.getElementById("greenValue");
  var blueValue = document.getElementById("blueValue");
  var okButton = document.getElementById("okButton");

  // Carregar a cor do Local Storage, se existir
  var storedColor = localStorage.getItem("backgroundColor");
  if (storedColor) {
    var colorValues = storedColor.split(",");
    redSlider.value = colorValues[0];
    greenSlider.value = colorValues[1];
    blueSlider.value = colorValues[2];
    updateBackgroundColor();
  }

  redSlider.addEventListener("input", updateBackgroundColor);
  greenSlider.addEventListener("input", updateBackgroundColor);
  blueSlider.addEventListener("input", updateBackgroundColor);
  okButton.addEventListener("click", saveAndRedirect);

  function updateBackgroundColor() {
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;

    var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgbColor;

    redValue.textContent = "Red: " + red;
    greenValue.textContent = "Green: " + green;
    blueValue.textContent = "Blue: " + blue;
  }

  function saveAndRedirect() {
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;

    // Salvar a cor no Local Storage
    var colorToStore = red + "," + green + "," + blue;
    localStorage.setItem("backgroundColor", colorToStore);

    if (red <= 50 && green <= 50 && blue <= 50) {
      window.open('2.html');
    } else if (red <= 21 && green >= 234 && blue <= 85) {
      window.open("1.html");
    } else if (red <= 42 && green >= 213 && blue <= 85) {
      window.open("3.html");
    } else if (red <= 63 && green >= 192 && blue <= 85) {
      window.open("4.html");
    } else if (red <= 84 && green >= 171 && blue <= 85) {
      window.open("5.html");
    } else if (red <= 105 && green >= 150 && blue <= 85) {
      window.open("6.html");
    } else if (red <= 126 && green >= 129 && blue <= 85) {
      window.open("7.html");
    } else if (red <= 147 && green >= 108 && blue <= 85) {
      window.open("8.html");
    } else if (red <= 168 && green >= 87 && blue <= 85) {
      window.open("9.html");
    } else if (red <= 189 && green >= 66 && blue <= 85) {
      window.open("10.html");
    } else if (red <= 210 && green >= 45 && blue <= 85) {
      window.open("11.html");
    } else if (red <= 231 && green >= 24 && blue <= 85) {
      window.open("38.html");
    } else if (red <= 255 && green >= 0 && blue <= 85) {
      window.open("13.html");
    }else if (red <= 21 && green >= 234 && blue <= 170) {
      window.open("14.html");
    } else if (red <= 42 && green >= 213 && blue <= 170) {
      window.open("15.html");
    } else if (red <= 63 && green >= 192 && blue <= 170) {
      window.open("16.html");
    } else if (red <= 84 && green >= 171 && blue <= 170) {
      window.open("17.html");
    } else if (red <= 105 && green >= 150 && blue <= 170) {
      window.open("18.html");
    } else if (red <= 126 && green >= 129 && blue <= 170) {
      window.open("19.html");
    } else if (red <= 147 && green >= 108 && blue <= 170) {
      window.open("20.html");
    } else if (red <= 168 && green >= 87 && blue <= 170) {
      window.open("21.html");
    } else if (red <= 189 && green >= 66 && blue <= 170) {
      window.open("22.html");
    } else if (red <= 210 && green >= 45 && blue <= 170) {
      window.open("23.html");
    } else if (red <= 231 && green >= 24 && blue <= 170) {
      window.open("24.html");
    } else if (red <= 255 && green >= 0 && blue <= 170) {
      window.open("25.html");
    }else if (red <= 21 && green >= 234 && blue <= 255) {
      window.open("26.html");
    } else if (red <= 42 && green >= 213 && blue <= 255) {
      window.open("27.html");
    } else if (red <= 63 && green >= 192 && blue <= 255) {
      window.open("28.html");
    } else if (red <= 84 && green >= 171 && blue <= 255) {
      window.open("29.html");
    } else if (red <= 105 && green >= 150 && blue <= 255) {
      window.open("30.html");
    } else if (red <= 126 && green >= 129 && blue <= 255) {
      window.open("31.html");
    } else if (red <= 147 && green >= 108 && blue <= 255) {
      window.open("32.html");
    } else if (red <= 168 && green >= 87 && blue <= 255) {
      window.open("33.html");
    } else if (red <= 189 && green >= 66 && blue <= 255) {
      window.open("34.html");
    } else if (red <= 210 && green >= 45 && blue <= 255) {
      window.open("35.html");
    } else if (red <= 231 && green >= 24 && blue <= 255) {
      window.open("36.html");
    } else if (red <= 255 && green >= 0 && blue <= 255) {
      window.open("37.html");
    } else{
      window.open("12.html");
    }
  }
    //window.location.href = "1.html";
  });