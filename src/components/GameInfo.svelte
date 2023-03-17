

<!-- <main> -->
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
<!-- </main> -->


<style>
    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
        margin: 0%;
        padding: 0%;
    }

    .XShape .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;

        position: relative;
        bottom: 10%;

        margin: 0%;
        padding: 0%;

        font-size: 120%;
        font-weight: 900;
    }

    .OShape .material-symbols-outlined {
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
        font-size: calc(110% + 0.3vw);
    }

    .GameInfoTitle {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 0.5vh;
    }

    .GameInfoContainer {
        display: flex;
        align-items: center;

        height: max-content;
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
</style>