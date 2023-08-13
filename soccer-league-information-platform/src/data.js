import games from '../public/games.json';
import fixtures from '../public/fixtures.json';
import teams from '../public/teams.json';


export default{
    getAllGames(){
        return games;
    },
    getSingleGame(index){
        return games[index];
    },

    getAllFixtures(){
        return fixtures;
    },

    getSingleWeekFixture(index){
        return fixtures[index];
    },

    getAllTeams(){
        return teams;
    }

}