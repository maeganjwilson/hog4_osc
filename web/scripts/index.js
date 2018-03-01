var port = new osc.WebSocketPort({
  url: "ws://localhost:8081"
});

port.open();

var goCL = function () {
  let num = getNum("cuelistSelect");
  var message = "/hog/playback/go/0/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};

var pauseCL = function () {
  let num = getNum("cuelistSelect");
  var message = "/hog/playback/halt/0/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};

var releaseCL = function () {
  let num = getNum("cuelistSelect");
  var message = "/hog/playback/release/0/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};

var goScene = function () {
  let num = getNum("sceneSelection");
  var message = "/hog/playback/go/1/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};
var pauseScene = function () {
  let num = getNum("sceneSelection");
  var message = "/hog/playback/halt/1/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};
var releaseScene = function () {
  let num = getNum("sceneSelection");
  var message = "/hog/playback/release/1/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};

var buttonPush = function (button) {
  var message = "/hog/hardware/" + button;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: 1
      }
    ]
  });
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: 0
      }
    ]
  });
  console.log("sending message: " + message);
};

var highlight = function () {
  let button_pushes = getText("fixtureSelect");
  getButtonPushes(button_pushes);
  // todo: add button push for enter
  enter();
  buttonPush("highlight");
};

var clearProgrammer = function () {
  buttonPush("clear");
};
var enter = function () {
  let button_pushes = getText("fixtureSelect");
  getButtonPushes(button_pushes);
  buttonPush("enter");
}
var nextLight = function () {
  buttonPush("next");
};

var backLight = function () {
  buttonPush("back");
};

var allLight = function () {
  buttonPush("all");
};
var getText = function (id) {
  let text = document.getElementById(id)[0].value;
  return Array.from(text);
};

var getNum = function (id) {
  return document.getElementById(id)[0].value;
};

var getButtonPushes = function (arr) {
  arr.forEach(function (bttn) {
    switch (bttn) {
      case "1":
        buttonPush("one");
        break;
      case "2":
        buttonPush("two");
        break;
      case "3":
        buttonPush("three");
        break;
      case "4":
        buttonPush("four");
        break;
      case "5":
        buttonPush("five");
        break;
      case "6":
        buttonPush("six");
        break;
      case "7":
        buttonPush("seven");
        break;
      case "8":
        buttonPush("eight");
        break;
      case "9":
        buttonPush("nine");
        break;
      case "0":
        buttonPush("zero");
        break;
      case "+":
        buttonPush("plus");
        break;
      case "-":
        buttonPush("minus");
        break;
      case ">":
        buttonPush("thru");
        break;
      case ".":
        buttonPush("period");
        break;
      default:
        alert(bttn + " is not a valid Hog hardware button");
    }
  });
};
