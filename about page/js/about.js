// constants
const switch_theme = document.querySelector("#switch_theme")
const darkTheme = document.getElementById('#dark');
const lightTheme = document.getElementById('#light');
const body = document.querySelector("body");
const root = document.documentElement

const showSideBarBtn = document.getElementById('show-side-bar-btn')
const hideSideBarBtn = document.getElementById('hide-side-bar-btn')
const sideBar = document.getElementById('side-bar');
const sideBarQuery = document.querySelector('aside');
const main = document.getElementById("main")

const asideLink = document.querySelector('.aside_link')



if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log("darking")
  root.style.setProperty('--clr-background', '#272727');
  root.style.setProperty('--clr-font', '#f7f7f7');
  root.style.setProperty('--clr-primary-600', '#4cdbfb');
  body.setAttribute('data-test', 'dark')
  switch_theme.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
}



function darking() {
  console.log("darking")
  root.style.setProperty('--clr-background', '#272727');
  root.style.setProperty('--clr-font', '#f7f7f7');
  root.style.setProperty('--clr-primary-600', '#4cdbfb');
  body.setAttribute('data-test', 'dark')
  switch_theme.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
}

function lightning() {
  console.log("lightning")
  body.setAttribute('data-test', 'light')
  root.style.setProperty('--clr-background', '#f7f7f7');
  root.style.setProperty('--clr-font', '#000000e6');
  root.style.setProperty('--clr-primary-600', '#000000e6');
  switch_theme.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
}




  // showing side bar
showSideBarBtn.addEventListener('click', () => {
    console.log('showing-side-bar')
    sideBar.style.display = 'flex'
    // sideBar.style.right = "0"
    main.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    sideBar.style.overflowY = 'auto'
    sideBar.style.overflowX = 'hidden'
    sideBar.style.opacity = 0
    window.setTimeout(function(){
      sideBar.style.opacity = 1
    },0);
    document.getElementById("up_btn").style.display = 'none'
    sideBar.setAttribute('data-side-bar', 'open')
})

  // hiding side bar
hideSideBarBtn.addEventListener('click', () => {
  console.log('hiding-side-bar')
  sideBar.style.display = 'none'
  body.style.overflowY = 'auto'
  document.getElementById("up_btn").style.display = 'inline'
  sideBar.setAttribute('data-side-bar', 'close')
})




switch_theme.addEventListener('click', () => {
  if (body.getAttribute('data-test') === 'light') {
    darking()
    document.getElementById("switch_theme").style.transform = 'rotate(180deg)';
  } else if (body.getAttribute('data-test') === 'dark') {
    lightning()
    document.getElementById("switch_theme").style.transform = 'rotate(360deg)';
  }
})



function side_bar_link_clicked() {
  console.log('side_bar_link_clicked')
  sideBar.style.display = 'none'
  body.style.overflowY = 'auto'
  document.getElementById("up_btn").style.display = 'inline'
  sideBar.setAttribute('data-side-bar', 'close')
}