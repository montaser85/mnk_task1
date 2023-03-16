<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";
    let y_axis_x1=80;
    let y_axis_x2=80;
    let y_axis_y1=50;
    let y_axis_y2=320;
    let y_diff=(y_axis_y2-y_axis_y1)/20;

    let btw_x1=80;
    let btw_x2=1100;
    let btw_y1=340;
    let btw_y2=340;

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
    //console.log(xScaleTicks);
    let xIndex;
    let y_label_offsetX=45;
    let y_label_offsetY=3;
    let viewBoxWidth=1100;
    let viewBoxHeight=380;
    // console.log(xScaleTicks.indexOf(1))
</script>

<main>
    <div id="chart">
        <svg id="svgCharts" width="100%" height="100%" viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" 
        preserveAspectRatio="xMinYMid meet">
            <g id="ChartView">
                <text class="ChartHeading" x={((btw_x2-btw_x1)/2)-y_label_offsetX} y={y_axis_y1-(5*y_label_offsetY)}>Scores through-time(TT)</text>
                <line class="axis" x1={y_axis_x1} y1={y_axis_y1} x2={y_axis_x2} y2={y_axis_y2}/>
                <line class="axis" x1={btw_x1} y1={btw_y1} x2={btw_x2} y2={btw_y2}/>
                <!-- <line class="axis" x1={arrow1_x1} y1={arrow1_y1} x2={arrow1_x2} y2={arrow1_y2}/>
                <line class="axis" x1={arrow2_x1} y1={arrow2_y1} x2={arrow2_x2} y2={arrow2_y2}/> -->
                <line class="axis" x1={arrow3_x1} y1={arrow3_y1} x2={arrow3_x2} y2={arrow3_y2}/>
                <line class="axis" x1={arrow4_x1} y1={arrow4_y1} x2={arrow4_x2} y2={arrow4_y2}/>
                <text class="y_labels" x={y_axis_x1-y_label_offsetX} y={y_axis_y1+y_label_offsetY}>Win</text>
                <text class="y_labels" x={y_axis_x1-y_label_offsetX} y={y_axis_y1+y_label_offsetY+(y_diff*10)}>Draw</text>
                <text class="y_labels" x={y_axis_x1-y_label_offsetX} y={y_axis_y1+y_label_offsetY+(y_diff*20)}>Loss</text>
                <text class="y_labels" x={((btw_x2-btw_x1)/2)} y={btw_y2+(10*y_label_offsetY)}>Time</text>
                {#each xScaleTicks as tk}
                    {xIndex=xScaleTicks.indexOf(tk)}
                    {#if xIndex%5!=0}
                        <line class="ThinLine" x1={btw_x1} y1={y_axis_y1+(xIndex*y_diff)} x2={btw_x2} y2={y_axis_y1+(xIndex*y_diff)}/>
                    {:else if xIndex==10}
                        <line class="axis" x1={btw_x1} y1={y_axis_y1+(xIndex*y_diff)} x2={btw_x2} y2={y_axis_y1+(xIndex*y_diff)}/>
                    {:else if xIndex==5||xIndex==15}
                        <line class="ThinAxis" x1={btw_x1} y1={y_axis_y1+(xIndex*y_diff)} x2={btw_x2} y2={y_axis_y1+(xIndex*y_diff)}/>
                    {/if}
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
        overflow: hidden;
    }
    #ChartView{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .axis{
        stroke: black;
        stroke-width: 2;
    }
    .ThinAxis{
        stroke: black;
        stroke-width: 1;
    }
    .ThinLine{
        stroke: gray;
        stroke-width: 0.5;
    }
    .y_labels{
        font-weight: 500;
    }
    .ChartHeading{
        font-weight: 500;
        font-size: 2em;
    }
</style>