<template>
    <div class="centered">
        <h1>Welcome to SarperSports</h1>
        <table class="point-table">
            <thead>
            <tr>
                <th></th>
                <th>Team</th>
                <th>Games Played</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(team, index) in $games.getAllTeams()" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{team.team}}</td>
                    <td>{{gamesPlayed}}</td>
                    <td>{{team.points}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    inject: ['$games'],
    data(){
        return {
        gamesPlayed: 32,
        }
    }

}
</script>


<style scoped>

.centered{
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
}
.point-table{
    
    width: 70%;
    border-collapse: collapse;
    margin-top: 20px;
    
}

th, td {
  border: 1px solid #ccc;

  padding: 8px;
  text-align: center;
}

th {
  background-color: purple;
  color: white;
}
</style>