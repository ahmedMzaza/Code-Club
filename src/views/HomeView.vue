<template class="home">
  <!-- Start 1 Side -->
  <div
    class="side-1 container-fluid mx-0 row"
    style="
      height: 94.25vh;
      position: relative;
      top: -20px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    "
  >
    <div
      class="col-6 img-side-1 d-lg-inline"
      style="position: absolute; bottom: 0; left: 0; z-index: 10; padding-left: 0"
    >
      <img
        style="max-width: 100%"
        src="../assets/CODE-CLUB-SAMPLE-WEBSITE/rm405-da01-03-mockup.png"
      />
    </div>
    <div
      class="col-xl-6 col-sm-12 pt-5"
      style="position: absolute; top: 0; right: 0; z-index: 10"
    >
      <h1
        class="text-first-side fw-bold text-center pt-5 text-white"
        style="font-size: 6.5rem; line-height: 1"
      >
        FRONT-END BOOTCAMP <span class="text-warning">2</span> STARTING SOON
      </h1>
      <router-link
        class="btn-first-side w-25 py-2 d-flex justify-content-center align-items-center fw-bold border-0 mx-auto"
        style="
          font-size: 1.2rem;
          background-color: #d76fd0;
          border-radius: 60px;
          text-decoration: none;
          color: white;
        "
        to="/join"
      >
        <img
          style="max-width: 30%"
          src="../assets/CODE-CLUB-SAMPLE-WEBSITE/logo-11.png"
          alt=""
        />
        Get Started
      </router-link>
    </div>
  </div>
  <!-- End 1 Side -->
  <main>
    <!-- Start First -->
    <div class="our p-0 m-0">
      <div
        class="container-fluid pb-5"
        style="
          height: auto;
          position: relative;
          top: -20px;

          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        "
      >
        <div class="mx-auto" style="width: fit-content">
          <img
            class="img-side-2"
            style="width: 40rem"
            src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Untitled-2.png"
          />
          <button
            class="py-2 mb-5 d-flex justify-content-center align-items-center text-white fw-bold border-0 mx-auto"
            style="
              width: 30%;
              font-size: 1.2rem;
              background-color: #d76fd0;
              border-radius: 60px;
              letter-spacing: 1px;
              margin-top: -10px;
            "
          >
            <router-link
              to="/front"
              class="text-white fw-bold"
              style="text-decoration: none"
            >
              More About
            </router-link>
          </button>
        </div>
        <swiper
          :slidesPerGroup="1"
          :loop="true"
          :loopFillGroupWithBlank="true"
          :modules="modules"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="swiperOptions.breakpoints"
          style="
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0 0 35px;
            z-index: 1;
          "
        >
          <swiper-slide class="slide-1">
            <img
              style="
                width: 100%;
                height: 500px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-ent-copy.png"
            />
          </swiper-slide>
          <swiper-slide class="slide-1">
            <img
              style="
                width: 100%;
                height: 500px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/IMG_2619.jpg"
            />
          </swiper-slide>
          <swiper-slide class="slide-1">
            <img
              style="
                width: 100%;
                height: 500px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/IMG_2758.jpg"
            />
          </swiper-slide>
          <swiper-slide class="slide-1">
            <img
              style="
                width: 100%;
                height: 500px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/IMG_2765.jpg"
            />
          </swiper-slide>
          <swiper-slide class="slide-1">
            <img
              style="
                width: 100%;
                height: 500px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/IMG_3360.jpg"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- End First -->
    <!-- Start Second -->
    <div class="last">
      <div
        class="container-fluid pb-5"
        style="
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin-top: -20px;
        "
      >
        <div class="text-center">
          <img
            class="pt-5"
            style="width: 10rem"
            src="../assets/CODE-CLUB-SAMPLE-WEBSITE/3259376_facebook_media_social_icon.png"
          />
          <h1
            class="mt-2 mb-5 mx-auto fw-bold text-white"
            style="width: 40%; font-size: 5rem; line-height: 1"
          >
            Our Last Articals On <span style="color: #1db2da">FaceBook</span>
          </h1>
          <button
            class="py-2 mb-5 d-flex justify-content-center align-items-center text-white fw-bold border-0 mx-auto"
            style="
              width: 14rem;
              font-size: 1.2rem;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              border-radius: 60px;
              letter-spacing: 1px;
              margin-top: -10px;
            "
          >
            <img
              class="me-3"
              style="width: 3rem"
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/734399_facebook_media_online_social_icon.png"
            />
            FaceBook
          </button>
        </div>
        <swiper
          :slidesOffsetAfter="200"
          :slidesOffsetBefore="200"
          :slidesPerView="4"
          :spaceBetween="20"
          :slidesPerGroup="1"
          :speed="400"
          :loop="true"
          :loopFillGroupWithBlank="true"
          :modules="modules"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          style="
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0 0 35px;
            z-index: 1;
          "
        >
          <swiper-slide>
            <img
              style="
                width: 100%;
                height: 370px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/CODE-CLUB-CAMPAIGN-2-HORROR-copy.png"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              style="
                width: 100%;
                height: 370px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/CODE-CLUB-CAMPAIGN-3-HORROR-copy.png"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              style="
                width: 100%;
                height: 370px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-money-copy.psd2-copy.png"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              style="
                width: 100%;
                height: 370px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/TIPS-COVER-copy.png2.png"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              style="
                width: 100%;
                height: 370px;
                box-shadow: 2px 10px 20px black;
                border-radius: 25px;
              "
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Self-learning-TECHNIQUES-COVER-copy.png"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- End Second -->
    <!-- Start third -->
    <div class="third">
      <div class="container-fluid"></div>
    </div>
    <!-- End third -->

    <!-- Start Four -->
    <div class="four">
      <div
        class="container-fluid"
        style="
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 90vh;
          position: relative;
        "
      >
        <h1
          class="text-white pt-5 pb-3 mx-auto fw-bold"
          style="width: fit-content; font-size: 5rem"
        >
          Our <span style="color: #0132fb">Partners</span>
        </h1>
        <div class="row flex-lg-row flex-sm-column align-items-sm-center">
          <div class="col-lg-3 col-sm-10 text-center">
            <img
              style="max-width: 100%; border-radius: 85px"
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-partner-copy.png"
            />
            <h3 class="text-white fw-bold pt-4" style="font-size: 3rem">Icons</h3>
          </div>
          <div class="col-lg-3 col-sm-10 text-center">
            <img
              style="max-width: 100%; border-radius: 85px"
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-partner-copy.png2.png"
            />
            <h3 class="text-white fw-bold pt-4" style="font-size: 3rem">The Office</h3>
          </div>
          <div class="col-lg-3 col-sm-10 text-center">
            <img
              style="max-width: 100%; border-radius: 85px"
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-partner-copy.png4.png"
            />
            <h3 class="text-white fw-bold pt-4" style="font-size: 3rem">Alex Target</h3>
          </div>
          <div class="col-lg-3 col-sm-10 text-center">
            <img
              style="max-width: 100%; border-radius: 85px"
              src="../assets/CODE-CLUB-SAMPLE-WEBSITE/Code-club-partner.png3.png"
            />
            <h3 class="text-white fw-bold pt-4" style="font-size: 3rem">ACM</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- End Four -->
  </main>
  <!-- End Main -->
  <!-- Start Footer -->
  <footer
    class="col-12 bg-white pt-5 border-top border-dark pb-2"
    style="
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;
      bottom: 20px;
      left: 0;
      height: auto;
      position: relative;
    "
  >
    <div class="container-fluid d-flex justify-content-around align-items-start">
      <div>
        <img
          style="max-width: 10rem"
          src="../assets/CODE-CLUB-SAMPLE-WEBSITE/CODE-CLUB-LOGO.png2.png"
        />
      </div>
      <div class="text-center">
        <h4 class="fs-2 fw-bold">Tracks</h4>
        <p class="mb-1 text-muted">Front End</p>
        <p class="mb-1 text-muted">Back End</p>
        <p class="mb-1 text-muted">Soft Ware Testing</p>
        <p class="mb-1 text-muted">C/Problem Solving</p>
      </div>
      <div class="text-center">
        <h4 class="fs-2 fw-bold">Contact</h4>

        <p class="mb-1 text-muted">Alexandria</p>
        <p class="mb-1 text-muted">Phone Number</p>
        <p class="mb-1 text-muted">Email</p>
      </div>
      <div class="text-center">
        <h4 class="fs-2 fw-bold">Partners</h4>
        <p class="mb-1 text-muted">Icon</p>

        <p class="mb-1 text-muted">The Office</p>
        <p class="mb-1 text-muted">Alex Target</p>
        <p class="mb-1 text-muted">ACM</p>
      </div>
      <div class="text-center">
        <h4 class="fs-2 fw-bold">Socail Madia</h4>
        <p class="mb-1 text-muted">FaceBoook</p>

        <p class="mb-1 text-muted">Instagram</p>
        <p class="mb-1 text-muted">Linked In</p>
        <p class="mb-1 text-muted">Whats App</p>
      </div>
    </div>
  </footer>

  <!-- End Footer -->
  <router-view />
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          120: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          120: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          620: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesOffsetAfter: 247,
            slidesOffsetBefore: 268,
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
    };
  },
};
</script>
<style>
.side-1 {
  background-image: url("@/assets/27525.png");
}
.our div.container-fluid {
  background-image: url("@/assets/CODE-CLUB-SAMPLE-WEBSITE/Evening-Night.jpg");
}
.third .container-fluid {
  background-image: url("@/assets/CODE-CLUB-SAMPLE-WEBSITE/Linked-in-wallpaper.png");
  height: 30vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.four .container-fluid {
  background-image: url("@/assets/CODE-CLUB-SAMPLE-WEBSITE/27525.png");
}
.swiper-button-next::after {
  padding-right: 150px;
}

.swiper-button-prev::after {
  padding-left: 150px;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 14rem !important;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 900;
}
.swiper-pagination {
  bottom: 0 !important;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination-bullet {
  width: 1rem !important;
  height: 1rem !important;
  background-color: rgba(255, 255, 255, 0.75) !important;
}

.swiper-pagination-bullet-active {
  width: 0.8rem !important;
  height: 0.8rem !important;
  opacity: 1 !important;
  background-color: white !important;
  border: 1px solid #373636 !important;
}
.last .container-fluid {
  background-image: url(@/assets/CODE-CLUB-SAMPLE-WEBSITE/Lawrencium.jpg);
}

.last .container-fluid button {
  background-image: url(@/assets/CODE-CLUB-SAMPLE-WEBSITE/27525.png);
}
@media (max-width: 600px) {
  .text-first-side {
    font-size: 3rem !important;
    padding-left: 35px !important;
    padding-right: 35px !important;
  }
  .btn-first-side {
    width: 40% !important;
    margin-top: 25px;
    font-size: 1rem !important;
  }
  .btn-first-side img {
    width: 20% !important;
  }
  .img-side-1 {
    width: 100%;
  }

  .swiper-button-next::after {
    padding-right: 50px !important;
  }

  .swiper-button-prev::after {
    padding-left: 50px !important;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 4rem !important;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 900;
  }
  .img-side-2 {
    width: 23rem !important;
  }
  .login-1 {
    width: fit-content;
    margin: 0 auto;
  }
  swiper-slide.slide-1 {
    padding: 0 25px;
  }
}
@media (max-width: 1150px) {
  .swiper-button-prev svg {
    margin-right: 100px;
  }
  .swiper-button-next svg {
    margin-left: 100px;
  }
  .swiper-button-prev svg,
  .swiper-button-next svg {
    font-size: 6rem;
  }
}
@media (max-width: 750px) {
  .swiper-button-prev svg {
    margin-right: 150px;
  }
  .swiper-button-next svg {
    margin-left: 150px;
  }
  .swiper-button-prev svg,
  .swiper-button-next svg {
    font-size: 6rem;
  }
  .div-form {
    width: 50% !important;
    padding: 0 !important;
  }
  .div-form .closelogin {
    top: 0 !important;
    right: 40% !important;
  }
}
@media (max-width: 991px) {
  .four .container-fluid {
    height: auto !important;
    padding-bottom: 20px;
  }
  #openlogin {
    justify-content: center;
  }
  .login00 .image h1 {
    left: 50% !important;
    font-size: 3rem !important;
  }
}
@media (max-width: 600px) {
  .text-first-side {
    font-size: 3rem !important;
    padding-left: 35px !important;
    padding-right: 35px !important;
  }
  .btn-first-side {
    width: 40% !important;
    margin-top: 25px;
    font-size: 1rem !important;
  }
  .btn-first-side img {
    width: 20% !important;
  }
  .img-side-1 {
    width: 100%;
  }
  .img-side-2 {
    width: 23rem !important;
  }
  .our .container-fluid {
    padding-left: 0 !important ;
    padding-right: 0 !important ;
  }
  .our .container-fluid div button {
    width: 75% !important;
  }
  .lo {
    padding: 0 25px !important;
  }
  .last .container-fluid div img {
    width: 6rem !important;
    padding-top: 1rem !important;
  }
  .last .container-fluid div h1 {
    width: auto !important;
    font-size: 2rem !important;
  }
  .last .container-fluid div button img {
    width: 2rem !important;
  }
  .four .container-fluid h1 {
    font-size: 3rem !important;
  }
  footer .container-fluid {
    flex-direction: column !important;
    text-align: center !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 10px !important;
  }
  .login00 .div-form {
    width: 100% !important;
    border-radius: 0 !important;
  }
  .login00 .image {
    display: none;
  }
}
</style>
