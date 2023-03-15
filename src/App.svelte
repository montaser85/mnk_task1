<script>
  import BestToWorst from "./components/BestToWorst.svelte";
</script>

<main>
	<div id="main">
    <div id="game">
      <div id="GameInfo">game info</div>
      <div id="GameBoard">game board</div>
      <div id="GameInstructions">instructions</div>
    </div>
    <div id="explanation">
      <div id="BestToWorst"><BestToWorst /></div>
      <div id="ScoresThroughTime">STT</div>
      <div id="OnTheBoard">OTB</div>
    </div>
  </div>
</main>

<style>
  #main{
    display: flex;
    flex-direction: row;
    width: 90%;
    /* min-height: 600px; */
    height: 90vh;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 2%;
    align-items: stretch;
  }
  #game{
    display: flex;
    flex-direction:column;
    width: 50%;
    height: 100%;
    background-color: white;
  }
  #GameInfo{
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 15%;
    background-color: #B1B1B1;
  }
  #GameBoard{
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 50%;
  }
  #GameInstructions{
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 35%;
    background-color: #B1B1B1;
  }
  #explanation{
    display: flex;
    flex-direction:column;
    width: 50%;
    height: 100%;
    background-color: #FFFEEF;
    border-left-style: solid;
    border-width: 1px;
    border-color: black;
  }
  #BestToWorst{
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 33%;
    border-bottom-style: solid;
    border-width: 0.5px;
    border-color: black;
  }
  #ScoresThroughTime{
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 33%;

  }
  #OnTheBoard{
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 34%;
  }

</style>