<template>
 <div class="div">
   <img :src="image" />
   <h3>What you need to start {{ name }}</h3>
   <h4>only Start</h4>
 </div>
</template>
<script>
export default {
  props: ["name", "image"],
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
};
</script>
<style scoped>
.div{
  background-image: url(../assets/27525.png) !important;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 44px);
  margin: -20px 0 0 0;
}
img {
  width: 50%;
  position: relative;
  display: block;
  margin: 0 auto;
}
h3,h4 {
  color: white;
  text-transform: capitalize;
}
</style>
