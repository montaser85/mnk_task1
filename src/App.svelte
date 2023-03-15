<script>
  import BestToWorst from "./components/BestToWorst.svelte";
</script>

<main>
    <div id="main">
        <div id="game">
            <div id="GameInfo">
                <div class="GameInfoTitle">
                    <h3 class="UnderlineText">Game Information</h3>
                </div>
                <div class="GameInfoContainer">
                    <div class="PlayerInfo">
                        <p>X Player</p>
                        <div class="ShapeBox XShape BlueFont">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                        <p>Blue</p>
                    </div>
                    <div>vs</div>
                    <div class="PlayerInfo">
                        <p>O Player</p>
                        <div class="ShapeBox OShape RedFont">
                            <span class="material-symbols-outlined">circle</span>
                        </div>
                        <p>Red</p>
                    </div>
                    <div class="FirstMove">
                        <p class="Indent">First move:</p>
                        <div class="ShapeBox XShape BlueFont">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="GameBoard">game board</div>
            <div id="GameInstructions">instructions</div>
        </div>
        <div id="explanation">
            <div id="BestToWorst">BTT</div>
            <div id="ScoresThroughTime">STT</div>
            <div id="OnTheBoard">OTB</div>
        </div>
    </div>
<<<<<<< HEAD
    <div id="explanation">
      <div id="BestToWorst"><BestToWorst /></div>
      <div id="ScoresThroughTime">STT</div>
      <div id="OnTheBoard">OTB</div>
    </div>
  </div>
=======
>>>>>>> 15458bf6bc790757dd464e1589105522b3292e08
</main>

<style>
    #main {
        display: flex;
        flex-direction: row;
        align-items: stretch;

        width: 90%;
        /* min-height: 600px; */
        height: 90vh;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        margin-left: 5%;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
        margin: 0%;
        padding: 0%;
    }

    .XShape .material-symbols-outlined{
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;

        position: relative;
        bottom: 10%;

        margin: 0%;
        padding: 0%;

        font-size: 120%;
        font-weight: 900;
    }

    .OShape .material-symbols-outlined{
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 200, "opsz" 48;

        position: relative;
        /* bottom: 10%; */

        margin: 0%;
        padding: 0%;

        font-size: 100%;
        font-weight: 900;
    }

    .Indent {
        padding-right: 0.5em;
    }

    .UnderlineText {
        text-decoration: underline;
    }

    .BlueFont {
        color: #6675ff;
    }

    .RedFont {
        color: #ff0000;
    }

    h3 {
        margin: 0%;
        font-weight: 400;
        font-size: calc(25% + 1vw);
    }

    .GameInfoTitle {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 0.5vh;
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

    .GameInfoContainer {
        display: flex;
        align-items: center;
    }

    .PlayerInfo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        text-align: center;
        width: 25%;
    }

    .PlayerInfo p {
        margin: 0%;
        width: 100%;

        font-size: calc(80%  + 0.5vh);
    }

    .FirstMove p {
        margin: 0%;
        font-size: calc(80%  + 0.5vh);
    }

    .FirstMove {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        width: 40%;
    }

    .ShapeBox {
        width: 2.5em;
        height: 1em;
        margin-top: 3%;
        margin-bottom: 3%;

        text-align: center;

        background: #fff;
        border: 1px solid #000000;
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
