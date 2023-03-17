<script>
  import BestToWorst from "./components/BestToWorst.svelte";
  import ScoresThroughTime from "./components/ScoresThroughTime.svelte";
  import OnTheBoard from "./components/OnTheBoard.svelte";
  import NewGameBoard from "./components/NewGameBoard.svelte";
  import GameInfo from "./components/GameInfo.svelte";
</script>

<main>
    <div id="main">
        <div id="game">
            <div id="GameInfo"> <GameInfo/>  </div>
            <div id="GameBoard"><NewGameBoard /></div>
            <div id="GameInstructions">instructions</div>
        </div>
        <div id="explanation">
            <div id="BestToWorst"><BestToWorst /></div>
            <div id="ScoresThroughTime"><ScoresThroughTime /></div>
            <div id="OnTheBoard"><OnTheBoard /></div>
        </div>
    </div>
</main>

<style>
    #main {
        display: flex;
        flex-direction: row;
        align-items: stretch;

        width: 90%;
        /* min-height: 600px; */
        height: 94vh;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        margin-left: 5%;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    #game {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        background-color: white;
    }

    #GameInfo {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;

        width: 100%;
        height: 15%;
        background-color: #b1b1b1;
    }

    #GameBoard {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50%;
    }

    #GameInstructions {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 35%;
        background-color: #b1b1b1;
    }

    #explanation {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        background-color: #fffeef;
        border-left-style: solid;
        border-width: 1px;
        border-color: black;
    }

    #BestToWorst {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 33%;
        border-bottom-style: solid;
        border-width: 0.5px;
        border-color: black;
    }

    #ScoresThroughTime {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 33%;
    }

    #OnTheBoard {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 34%;
    }
</style>
