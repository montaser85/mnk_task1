<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";

    let GB_X1=80;
    let GB_Y1=0;

    let viewBoxWidth=1100;
    let viewBoxHeight=380;
</script>
<main>
    <div id="GameBoard">
        <svg id="svgBoard" width="100%" height="100%" viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" 
        preserveAspectRatio="xMinYMid meet">
            <g id="BoardView">
                <rect id="BoardBox" x={GB_X1} y={GB_Y1} width=50 height=50/>
            </g>
        </svg>
    </div>
</main>
<style>
    #GameBoard{
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        
    }
    #svgBoard{
        display: flex;
        overflow: hidden;
    }
    #BoardBox{
        fill: none;
        stroke: gray;
        stroke-width: 3px;
    }
</style>