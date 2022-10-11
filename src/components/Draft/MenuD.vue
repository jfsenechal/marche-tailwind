<template>
  <header>
    <div class="logo">LOGO</div>
    <ul class="main-ul">
      <li><a href="#">HOME</a></li>
      <li>
        <a href="#">VIDEOS</a>
        <ul class="dropdown-menu">
          <li><a href="#">HTML</a></li>
          <li>
            <a href="#">CSS</a>
            <ul class="sub-dropdown-menu">
              <li><a href="#">EASY CSS</a></li>
              <li><a href="#">MODERATE CSS</a></li>
              <li><a href="#">ADVANCE CSS</a></li>
              <li><a href="#">VERY ADVANCE CSS</a></li>
            </ul>
          </li>
          <li><a href="#">JAVASCRIPT</a></li>
          <li><a href="#">PHP</a></li>
        </ul>
      </li>
      <li><a href="#">BLOG</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </header>
  <p style="position:relative;top:60px;width:80%;margin:auto auto;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  </p>
</template>
<style>
body {
  margin: 0;
  padding: 0;
  background: #fff;
  font-family: sans-serif;
}

header {
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  background: #017bf5;
  color: #fff;
  z-index: 999999999;
}

header .logo {
  font-size: 2.5em;
  font-weight: 700;
  cursor: pointer;
  margin-left: 10%;
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5%;
}

header .main-ul {
  margin: 0;
  float: right;
  width: 60%;
  height: 100%;
  text-align: center;
}

header .main-ul li {
  list-style-type: none;
  display: inline-block;
  padding: 20px 30px;
  cursor: pointer;
}

header .main-ul li a {
  color: #fff;
  font-size: 1em;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
}

header .main-ul li:hover {
  background: rgba(0, 0, 0, 0.2);
}

/*dropdown-menu*/

header .main-ul li .dropdown-menu {
  position: absolute;
  bottom: 100%;
  margin-left: -4%;
  background: #017bf5;
  display: none;
}

header .main-ul li:hover .dropdown-menu {
  display: block;
}

header .main-ul li .dropdown-menu li {
  display: block;
  margin-left: -25%;
}

/*sub-dropdownmenu*/
header .main-ul li .dropdown-menu li .sub-dropdown-menu {
  position: absolute;
  left: 100%;
  bottom: 50%;
  background: #017bf5;
  display: none;
}

header .main-ul li .dropdown-menu li:hover .sub-dropdown-menu {
  display: block;
}

header .main-ul li .dropdown-menu li .sub-dropdown-menu li {
  display: block;
  margin-left: -25%;
}
</style>