let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');
// let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
 searchBtn.classList.remove('fa-times');
 searchBar.classList.remove('active');
//  menu.classList.remove('fa-times');
//  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}


searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
  });
 
  formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  });
 
  formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
  });
