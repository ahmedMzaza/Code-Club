<template>
  <div class="image-0" style="position: relative; width: 100%; height: 100vh">
    <img
      class="d-block mx-auto image-1-0"
      style="position: relative; width: 40%; z-index: 10"
      src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Untitled-2.png"
    />
    <img
      class="d-block mx-auto image-1-1"
      style="position: relative; width: 20%; z-index: 10"
      src="../assets/CODE-CLUB-SAMPLE-WEBSITE/front_end_icon.png"
    />
  </div>
  <div
    class="loginjoin d-flex align-items-center flex-column"
    style="
      position: absolute;
      z-index: 100;
      background-color: white;
      border-top-left-radius: 120px;
      border-top-right-radius: 120px;
      width: 100%;
      height: auto;
      padding-bottom: 60px;
    "
  >
    <button
      class="border-0 bg-white"
      style="
        position: relative;
        width: 30px;
        font-size: 30px;
        right: 43%;
        top: 20px;
        cursor: pointer;
      "
    >
      <a href="../index.html" class="text-black"><i class="fa-solid fa-xmark"></i></a>
    </button>
    <div
      class="px-2 py-1 d-flex justify-content-center align-items-center"
      style="position: relative; right: 41%; top: -21px; font-size: 25px"
      id="openlogin"
    >
      <i class="fa-solid fa-user me-1"></i>
    </div>

    <img
      style="width: 8%; position: relative"
      src="../assets/CODE-CLUB-SAMPLE-WEBSITE/CODE-CLUB-LOGO.png2.png"
    />
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
          width: 160%;
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
          width: 160%;
          margin-bottom: 30px;
        "
        placeholder="Password"
      />
      <input
        style="
          margin-bottom: 30px;
          outline: none;
          margin-top: 15px;
          border: 1px solid #979797;
          padding: 8px 15px;
          border-radius: 20px;
          color: #777;
          width: 160%;
        "
        type="text"
        placeholder="Phone"
      />
      <input
        type="text"
        style="
          outline: none;
          color: #777;
          border: 1px solid #979797;
          padding: 8px 15px;
          border-radius: 20px;
          width: 160%;
        "
        placeholder="Online/Offline"
      />
      <button
        class="py-2 px-4 d-flex text-white fw-bold justify-content-center align-items-center border-0 mx-auto"
        style="
          width: fit-content;
          font-size: 1.2rem;
          background-color: #d76fd0;
          border-radius: 60px;
          letter-spacing: 1px;
          position: relative;
          top: 30px;
        "
      >
        Submit
      </button>
    </form>
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
        class="bg-white d-flex align-items-center flex-column"
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
          class="border-0 bg-white closelogin"
          style="
            position: relative;
            width: 30px;
            font-size: 30px;
            top: -25px;
            right: 60%;
            cursor: pointer;
          "
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img
          class="w-25 mx-auto"
          style="margin-top: 8rem"
          src="../assets/CODE-CLUB-SAMPLE-WEBSITE/CODE-CLUB-LOGO.png2.png"
        />
        <div class="w-25 px-2 py-1 d-flex justify-content-evenly align-items-center">
          <i class="fa-solid fa-user me-1"></i>
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
      <div class="image-1" style="height: 100%">
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
          src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-ent-copy.png"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-0{
    background-image: url(@/assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-ent-copy.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.image-0::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: #1bc3eaab;
  z-index: 1;
}
.loginjoin{
    margin-top: -18vh;
}
.image-1::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #1bc3eaab;
  z-index: 1;
}

@media (max-width: 778px) {
  .loginjoin {
    border-radius: 0 !important;
  }
  .loginjoin img {
    width: 20% !important;
  }
  .loginjoin form input {
    width: 100% !important;
  }
  #openlogin {
    right: 33% !important;
  }
  .image .image-1-0 {
    width: 100% !important;
  }
  .image .image-1-1 {
    width: 70% !important;
  }
}
</style>
