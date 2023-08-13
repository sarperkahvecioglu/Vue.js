<template>
  <div class="contento">
    <p class="boxes">
      <img class="image" src="@/assets/sarper.jpg" alt="my-image" />
      My name is Sarper Kahvecioğlu. I am student at Iztech. My department is
      Computer Science. Here is my basic project for practising Vue.js
    </p>
    <p class="boxes">
      
      At our soccer league website, our mission is to unite fans, players, and enthusiasts in celebrating the passion for the beautiful game. We strive to provide up-to-date information, exciting match coverage, and a platform to connect with fellow fans. With a shared love for soccer, we aim to create a vibrant community that celebrates the spirit of competition, teamwork, and sportsmanship. Join us as we embark on this journey to make soccer more than just a sport – it's a way of life.
    </p>

  </div>
</template>

<style scoped>

.contento{
    display: flex;
    justify-content: center;
    align-items: center;
}

.boxes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 20px;
  background-color: green;
  color: white;
  width: 30vh;
  padding: 1%;
  height: 50vh;
}

.image{
justify-content: center;
width: 70%;

margin-bottom: 15%;
border-radius: 30%;
}

</style>
