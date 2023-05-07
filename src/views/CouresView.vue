<template>
  <main class="container-fluid">
    <h1
      class="text-white pt-5 pb-3 mx-auto fw-bold"
      style="width: fit-content; font-size: 5rem; position: relative; z-index: 2"
    >
      Our
      <span class="text-warning">Courses</span>
    </h1>
    
    <div class="cards">
      <div class="row">
        <div class="card-0" v-for="card in cards" id="card-0">
          <button
            class="border-0 textclose"
            @click="clo"
            style="
              position: relative;
              width: 30px;
              font-size: 30px;
              top: 15px;
              left: 0%;
              cursor: pointer;
              display: none;
              background-color: transparent !important;
            "
          >
            <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
          </button>
          <img v-bind:src="card.image" />
          <p class="pp" @click="open">Click Me</p>
          <div class="text-cards">
            <p>
              {{ card.text }}
            </p>
            <img :src="card.imageT" />
            <div
              class="btngroup d-flex mx-auto w-75"
              style="position: relative; bottom: 25px"
            >
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
                <router-link
                  to="/join"
                  class="text-white fw-bold"
                  style="text-decoration: none"
                  >Join Us</router-link
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
                <router-link
                  :to="{
                    name: 'Details',
                    params: { name: card.name, image: card.image },
                  }"
                  class="text-white fw-bold"
                  style="text-decoration: none"
                >
                  Details</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: "1",
          name: "Front End",
          image: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/Untitled-2.png"),
          text:
            "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.",
          imageT: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/front_end_icon.png"),
        },
        {
          id: "2",
          name: "Back End",
          image: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/Untitled-2-BACKEND.png"),
          text:
            "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.",
          imageT: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/front_end_icon.png"),
        },
        {
          id: "3",
          name: "Problem Solving",
          image: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/Untitled-1-Solving.png"),
          text:
            "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.",
          imageT: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/front_end_icon.png"),
        },
        {
          id: "4",
          name: "Softwera Testing",
          image: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/Untitled-1-Recovered.png"),
          text:
            "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.",
          imageT: require("../assets/CODE-CLUB-SAMPLE-WEBSITE/front_end_icon.png"),
        },
      ],
    };
  },
  methods: {
    open(ele) {
      if (ele.target.className === "pp") {
        ele.target.classList.add("active");
        let parent = ele.target.parentElement;
        parent.classList.add("active");
        parent.lastElementChild.classList.add("active");
        parent.firstElementChild.classList.add("active");
      }
    },
    clo(ele) {
      if (ele.target.tagName === "svg") {
        /* ele.target.classList.remove("active")*/
        let parent = ele.target.parentElement.parentElement;
        parent.classList.remove("active");
        parent.lastElementChild.classList.remove("active");
        parent.firstElementChild.classList.remove("active");
        parent.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
          "active"
        );
      }
    },
  },
};
</script>
<style scoped>
main {
  background-image: url(@/assets/CODE-CLUB-SAMPLE-WEBSITE/IMG_3360.jpg);
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover;
  transition: all 0.3s;
}

main::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #1bc3eaab;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
}
.cards {
  position: relative;
  z-index: 2;
}
.cards .card-0 {
  background-image: url(@/assets/CODE-CLUB-SAMPLE-WEBSITE/Slight-Ocean-View.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
  height: 30%;
  margin: 10px auto;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 30px;
  text-align: center;
}

@media (max-width: 990px) {
  header {
    justify-content: space-between !important;
  }
  header .div-img {
    left: 0 !important;
    transform: translateX(0) !important;
  }
  main.container-fluid h1 {
    font-size: 2rem !important;
  }
  .cards #card-0 {
    width: 75% !important;
  }

  .row {
    padding: 0 30px;
  }

  .sidebar div {
    width: 100% !important;
    border-radius: 0 !important;
  }
  .sidebar div img {
    width: 15% !important;
  }
}

.cards .card-0 img {
  max-width: 100%;
  margin: 10px 0;
}

.cards .card-0 .text-cards {
  padding: 0 75px;
  font-size: 20px;
  color: #ffffffb5;
  line-height: 1.7;
  display: none;
  transition: 0.5s;
}

.text-cards.active {
  display: block !important;
}

.cards .card-0 .text-cards img {
  width: 290px;
  padding: 10px 0 50px;
}

.card-0.active {
  height: auto !important;
}

.pp.active {
  display: none !important;
}

.pp {
  cursor: pointer;
}

.textclose.active {
  display: inline !important;
}

a {
  text-decoration: none;
  color: black;
}
</style>
