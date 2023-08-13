<template>
  <div class="all-games">
    <ul v-if="games">
      <li
        class="game"
        v-for="(game, index) in games"
        :key="index"
        @click="goToIndex(index)"
      >
        <h3 class="row">
          {{ game.firstTeam.teamName }} {{game.firstTeam.goalCount}}    -   {{game.secondTeam.goalCount}} {{ game.secondTeam.teamName }}
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["$games"],
  data() {
    return {
      games: null,
    };
  },
  created() {
    this.games = this.$games.getAllGames();
  },
  methods: {
    goToIndex(index) {
      this.$router.push(`game/${index}`);
    },
  },
};
</script>

<style scoped>
.all-games{
  display: flex;
  justify-content: center;
}
.game {
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: -3%;
  
}

.row{
  
  border: 1px solid;
  border-radius: 10px;
  border-color: purple;
  background-color: purple;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-left: 30px;
  padding-right: 30px;
  
}
</style>
