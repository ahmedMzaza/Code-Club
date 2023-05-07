<template>
  <div class="login" style="width: 100%; height: 120%; position: absolute;margin-top:-20px">
 
 
    <div
      class="login-0-0 bg-white d-flex align-items-center flex-column"
      style="
        width: 40%;
        position: absolute;
        height: 100%;
        padding: 0rem 5rem;
        border-bottom-right-radius: 30px;
        border-top-right-radius: 30px;
      "
    >
      
      <img
        class="mx-auto"
        style="width: 40%; position: relative; top: 30px"
        src="../assets/CODE-CLUB-SAMPLE-WEBSITE/CODE-CLUB-LOGO.png2.png"
      />

      <p
        class="text-muted text-center"
        style="
          position: relative;
          width: auto;
          padding: 5px 15px;
          font-size: 18px;
          line-height: 2;
          border: 1px solid #b0f;
          border-radius: 30px;
          top: 25px;
        "
      >
        Front-end web development, also known as client-side development is the practice
        of producing HTML, CSS and JavaScript for a website or Web Application so that a
        user can see and interact with them directly. The challenge associated with front
        end development is that the tools and techniques used to create the front end of a
        website change constantly and so the developer needs to constantly be aware of how
        the field is developing.
      </p>
      <img
        style="position: relative;top: 25px;"
        src="../assets/CODE-CLUB-SAMPLE-WEBSITE/front_end_icon.png"
      />
      <div class="btngroup d-flex w-75" style="position: relative; top: 3rem">
        <button
          class="py-2 px-4 d-flex justify-content-center align-items-center border-0 mx-auto"
          style="
            width: fit-content;
            font-size: 1.2rem;
            background-color: #d76fd0;
            border-radius: 60px;
            letter-spacing: 1px;
          "
        >
          <a
            href="./join-us.html"
            class="text-white fw-bold"
            style="text-decoration: none"
            >Join Us</a
          >
        </button>
        <button
          class="py-2 px-4 d-flex justify-content-center align-items-center border-0 mx-auto"
          style="
            width: fit-content;
            font-size: 1.2rem;
            background-color: #d76fd0;
            border-radius: 60px;
            letter-spacing: 1px;
          "
        >
          <a href="#" class="text-white fw-bold" style="text-decoration: none">
            Details</a
          >
        </button>
      </div>
    </div>
    <div class="image">
      <img
        style="width: 62%; position: absolute; right: 0; z-index: -1; height: 100%"
        src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-ent-copy.png"
      />
    </div>
  </div>
</template>
<style>
@media (max-width: 991px) {
  .login-0-0 {
    border-radius: 0 !important;
    height: 100% !important;
    width: 100% !important;
    padding: 0px 20px !important;
  }
  .login-0-0 button {
    right: 0 !important;
    top: -17px !important;
  }
  .login-0-0 img {
    width: 20% !important;
  }
}
</style>
