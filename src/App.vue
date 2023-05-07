<template>
  <nav
    class="navbar navbar-expand-lg bg-white"
    style="
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      box-shadow: 2px 22px 32px #cccaca inset;
      z-index: 20;
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand me-0 col-3 align-items-center d-flex" href="#">
        <img
          src="./assets/CODE-CLUB-SAMPLE-WEBSITE/logo-0.png"
          style="width: 50px"
          alt="./assets/CODE-CLUB-SAMPLE-WEBSITE/logo-0.png"
        />
        <div class="text-logo">
          <h3 class="fs-6 fw-bolder m-0 p-0">Code Club</h3>
          <p class="m-0 p-0" style="font-size: 0.5rem">From Youth to Youth</p>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-9 ps-lg-5" id="navbarSupportedContent">
        <ul
          class="col-12 col-lg-6 justify-content-around align-items-center navbar-nav me-lg-auto mb-lg-0 ms-lg-5"
        >
          <li class="nav-item w-25 text-center">
            <router-link
              to="/home"
              class="nav-link text-black fw-bold router-link-active"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item w-25 text-center">
            <router-link
              to="/coures"
              class="nav-link text-black fw-bold"
              aria-current="page"
            >
              Coures</router-link
            >
          </li>
        
          <li class="nav-item w-25 text-center">
            <router-link
              to="/rules"
              class="nav-link text-black fw-bold"
              aria-current="page"
              >Rules</router-link
            >
          </li>
          <li class="nav-item w-25 text-center">
            <router-link
              to="/about"
              class="nav-link text-black fw-bold"
              aria-current="page"
              >About Us</router-link
            >
          </li>
        </ul>
        <a
          class="text-decoration-none text-black col-lg-3 col-xl-3 col-xxl-3 d-flex flex-row align-items-center justify-content-xl-end col-sm-12 justify-content-sm-center login-1"
          role="button"
          @click="openlogin"
        >
          <font-awesome-icon icon="fa-solid fa-user" />
          <p class="m-0 pe-0 pe-lg-3 fw-bolder ms-1">Login</p>
        </a>
      </div>
    </div>
    <div
      class="login00"
      style="
        width: 100%;
        height: 100%;
        position: fixed;
        transform: translateX(200%);
        transition: 0.5s;
        background-color: white;
        top: 0;
        left: 0;
        bottom: 0;
      "
    >
      <div
        class="div-form bg-white d-flex align-items-center flex-column"
        style="
          width: 40%;
          position: absolute;
          height: 100%;
          padding: 2rem 5rem;
          border-bottom-right-radius: 30px;
          border-top-right-radius: 30px;
          height: 100%;
          z-index: 1000;
        "
      >
        <button
          class="border-0 bg-white"
          @click="closelogin"
          style="
            position: relative;
            width: 30px;
            font-size: 30px;
            top: -25px;
            right: 60%;
            cursor: pointer;
          "
        >
          <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
        </button>
        <img
          class="w-25 mx-auto"
          style="margin-top: 8rem"
          src="./assets/CODE-CLUB-LOGO.png"
        />
        <div class="w-25 px-2 py-1 d-flex justify-content-evenly align-items-center">
          <font-awesome-icon icon="fa-solid fa-user " class="me-1"></font-awesome-icon>
          <p class="m-0 pe-0 fw-bolder" style="font-size: 23px; padding-bottom: 4px">
            Login
          </p>
        </div>
        <form class="d-flex align-items-center flex-column">
          <input
            style="
              margin-bottom: 30px;
              outline: none;
              margin-top: 15px;
              border: 1px solid #979797;
              padding: 8px 15px;
              border-radius: 20px;
              color: #777;
            "
            type="text"
            placeholder="Email"
          />
          <input
            type="text"
            style="
              outline: none;
              color: #777;
              border: 1px solid #979797;
              padding: 8px 15px;
              border-radius: 20px;
            "
            placeholder="Password"
          />
          <p class="mt-1" style="font-size: 11px; color: #0b5cf7">
            Forget Your Password?
          </p>
        </form>
      </div>
      <div class="image" style="height: 100%">
        <h1
          class="fw-bold text-center pt-5 text-white"
          style="
            font-size: 6.5rem;
            line-height: 1;
            z-index: 10;
            position: absolute;
            top: 50%;
            width: 50%;
            left: 46%;
            transform: translateY(-50%);
          "
        >
          FRONT-END BOOTCAMP <span class="text-warning">2</span>
          STARTING SOON
        </h1>
        <img
          style="width: 62%; position: absolute; right: 0; z-index: -1; height: 100%"
          src="./assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-ent-copy.png"
        />
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openlogin() {
      document.querySelector(".login00").classList.add("active");
      document.querySelector("body").style.overflow = "hidden";
    },
    closelogin() {
      document.querySelector(".login00").classList.remove("active");
      document.querySelector("body").style.overflow = "auto";
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  transition: all 0.3s;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.image::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #1bc3eaab;
  z-index: -1;
}

.login00.active {
  transform: translateX(0%) !important;
}

nav a.router-link-exact-active,
nav a:hover {
  color: rgb(0, 183, 255) !important;
  text-decoration: none;
}
</style>
