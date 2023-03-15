<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";
    let y_axis_x1=80;
    let y_axis_x2=80;
    let y_axis_y1=50;
    let y_axis_y2=320;
    let y_diff=(y_axis_y2-y_axis_y1)/21;

    let btw_x1=80;
    let btw_x2=1100;
    let btw_y1=350;
    let btw_y2=350;

    let arrow1_x1=btw_x1;
    let arrow1_x2=btw_x1+10;
    let arrow1_y1=btw_y1;
    let arrow1_y2=btw_y1-10;

    let arrow2_x1=btw_x1;
    let arrow2_x2=btw_x1+10;
    let arrow2_y1=btw_y1;
    let arrow2_y2=btw_y1+10;

    let arrow3_x1=btw_x2;
    let arrow3_x2=btw_x2-10;
    let arrow3_y1=btw_y1;
    let arrow3_y2=btw_y1+10;

    let arrow4_x1=btw_x2;
    let arrow4_x2=btw_x2-10;
    let arrow4_y1=btw_y1;
    let arrow4_y2=btw_y1-10;
    let xScaleTicks=[];
    let xScaleNew;
    xScaleNew=scaleLinear()
			.domain([0,1]);
    xScaleTicks=xScaleNew.ticks(21);
    console.log(xScaleTicks);
    console.log(xScaleTicks.indexOf(1))



</script>

<main>
    <div id="chart">
        <svg id="svgCharts" viewBox="0 0 1100 400" 
        preserveAspectRatio="xMinYMid meet">
            <g id="chartView">
                <line class="axis" x1={y_axis_x1} y1={y_axis_y1} x2={y_axis_x2} y2={y_axis_y2}/>
                <line class="axis" x1={btw_x1} y1={btw_y1} x2={btw_x2} y2={btw_y2}/>
                <line class="axis" x1={arrow1_x1} y1={arrow1_y1} x2={arrow1_x2} y2={arrow1_y2}/>
                <line class="axis" x1={arrow2_x1} y1={arrow2_y1} x2={arrow2_x2} y2={arrow2_y2}/>
                <line class="axis" x1={arrow3_x1} y1={arrow3_y1} x2={arrow3_x2} y2={arrow3_y2}/>
                <line class="axis" x1={arrow4_x1} y1={arrow4_y1} x2={arrow4_x2} y2={arrow4_y2}/>
                {#each xScaleTicks as tk}
                    <line class="axis" x1={btw_x1} y1={y_axis_y1+(xScaleTicks.indexOf(tk)*y_diff)} x2={btw_x2} y2={y_axis_y1+(xScaleTicks.indexOf(tk)*y_diff)}/>
                {/each}
            </g>
        </svg>

    </div>
</main>

<style>
    #chart{
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        
    }
    #svgCharts{
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    #chartView{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .axis{
        stroke: black;
        stroke-width: 2;
    }
</style>