<div class="GameInfoContainer">
    <svg width="100%" height="100%" viewBox="0 0 1000 150" preserveAspectRatio="xMinYMid meet">
        <g>
            <text x="50%" y="12%" dominant-baseline="middle" text-anchor="middle" class="UnderlineText GameTitle">
                Game Information
            </text>
        </g>

        <svg x="10%" y="40%" width="300">
            <text x="50%" dominant-baseline="middle" text-anchor="middle" class="PlayerInfo">X Player</text>
            <svg x="40%" y="15">
                <rect class="ShapeBox" width="60" height="30" />
                <svg viewBox="95 2 230 230">
                    <path class="XShape"
                    d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                    />
                </svg>
            </svg>
            <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" class="PlayerInfo">Blue</text>
        </svg>

        <g>
            <text x="35%" y="60%" dominant-baseline="middle" text-anchor="middle" class="PlayerInfo">
                vs
            </text>
        </g>

        <svg x="30%" y="40%" width="300">
            <text x="50%" dominant-baseline="middle" text-anchor="middle" class="PlayerInfo">O Player</text>
            <svg x="40%" y="15">
                <rect class="ShapeBox" width="60" height="30" />
                <svg height="50" width="50" viewBox="-35 -5 100 100">
                    <path class="OShape"
                    d="M24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"
                    />
                </svg>
            </svg>
            <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" class="PlayerInfo">Red</text>
        </svg>


    </svg>
</div>

<style>
    svg {
        /* border: 2px solid rgb(255, 193, 6); */
        overflow: visible;
    }

    .GameInfoContainer {
        width: 100%;
        height: 100%;

        font-size: x-large;
    }

    .GameTitle {
        font-weight: 500;
        font-size: 1.2em;
    }

    .UnderlineText {
        text-decoration: underline;
    }

    .XShape {
        fill: #6675ff;
        stroke: #6675ff;
        stroke-width: 2;
    }

    .OShape {
        fill: #ff0000;
        stroke: #ff0000;
        stroke-width: 2;
    }


    .ShapeBox {
        fill: #fff;
        stroke: #000;
        stroke-width: 2;
    }

    .PlayerInfo {
        font-size: 0.9em;
    }


    /* .OShape .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 200, "opsz" 48;

        position: relative;

        margin: 0%;
        padding: 0%;

        font-size: 100%;
        font-weight: 900;
    }

    .Indent {
        padding-right: 0.5em;
    } */

    /* .BlueFont {
        color: #6675ff;
    }

    .RedFont {
        color: #ff0000;
    }

    h3 {
        margin: 0%;
        font-weight: 400;
        font-size: calc(110% + 0.3vw);
    } */

    /* .PlayerInfo {
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
    } */


</style>
