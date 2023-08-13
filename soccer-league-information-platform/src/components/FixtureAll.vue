<template>
  <div class="options">
    Select Week
    <select id="weekSelect" v-model="activeWeek">
      <option v-for="(week, index) in weeks" :key="index">
        {{ week }}
      </option>
    </select>
  </div>
  <div class="fixture">
    <ul v-if="activeWeek">
      <li
        class="games-fixture"
        v-for="(match, index) in $games.getSingleWeekFixture(activeWeek - 1)
          .matches"
        :key="index"
      >
        {{ match.firstTeam }} vs {{ match.secondTeam }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["$games"],
  data() {
    return {
      activeWeek: 1,
      weeks: null,
    };
  },
  created() {
    this.weeks = [1, 2, 3];
  },
};
</script>

<style scoped>
.fixture {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#weekSelect{
    cursor: pointer;
    display: flex;
    
}
.options {
  margin-top: 4%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: brown;
  
  
}
.games-fixture {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  margin: 10px;
  padding: 7px;
  padding-left: 30px;
  padding-right: 30px;
  color: white;
  background-color: purple;
}
</style>
