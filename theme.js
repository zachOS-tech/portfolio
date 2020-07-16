let changeTheme = () => {
  let element = document.getElementById("body");
  if(element.classList.contains("night-owl")){
    element.classList.toggle("night-owl");
    element.classList.toggle("moonlight-ii");
  } else if(element.classList.contains("moonlight-ii")){
    element.classList.toggle("moonlight-ii");
    element.classList.toggle("dracula");
  } else {
    element.classList.toggle("dracula");
    element.classList.toggle("night-owl");
  }
}