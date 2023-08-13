<template>
    <button class="go-back" @click.prevent="goBack()">Go Back</button>
    <div>
        <h3>Result of the game</h3>

        <table class="scoreboard">
            
            <tr class="team1 team">
                <td>{{firstTeam.teamName}}</td>
                <td>{{firstTeam.goalCount}}</td>
            </tr>
            <tr class="team2 team">
                <td>{{secondTeam.teamName}}</td>
                <td>{{secondTeam.goalCount}}</td>
            </tr>

        </table>
    </div>
</template>

<script>
export default {
    props: ['index'],
    inject: ['$games'],
    data(){
        return{
            firstTeam: null,
            secondTeam: null,
            
        }
    },
    created(){
        this.firstTeam = this.$games.getSingleGame(this.index).firstTeam;
        this.secondTeam = this.$games.getSingleGame(this.index).secondTeam;
    },

    methods: {
        goBack(){
            this.$router.push('/played-games')
        }
    }

}
</script>


<style scoped>
.scoreboard{
    width: 100%;
    border-collapse: collapse;
}

.scoreboard td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
    
    align-items: center;
    justify-content: center;
}



.scoreboard tr:nth-child(even) {
    background-color: #f2f2f2;
   
    
}



.scoreboard .team-name {
    margin-right: 5px;
}

.scoreboard .score {
    font-weight: bold;
}

.go-back{
    border: 1px solid;
    border-radius: 10px;
    border-color: azure;
    background-color: burlywood;
    color: whitesmoke;
    cursor: pointer;
    
}

</style>