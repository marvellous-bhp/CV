let i=0;

function myFunction() {
  var element = document.getElementsByClassName("nav-menu")
  console.log(element,'asfs');
  if (i%2 == 0)
  {
    element[0].classList.add("active");
    console.log(element[0].classList,'lljh');
    i++
    console.log(i);
  }
  else{
    element[0].classList.remove("active");
    console.log(element[0].classList,'lljh');
    i++
    console.log(i);
  }
}
