<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";
    let y_axis_x1=80;
    let y_axis_x2=80;
    let y_axis_y1=50;
    let y_axis_y2=320;

    let btw_x1=80;
    let btw_x2=900;
    let btw_y1=350;
    let btw_y2=350;

    let arrow1_x1=80;
    let arrow1_x2=90;
    let arrow1_y1=350;
    let arrow1_y2=340;

    let arrow2_x1=80;
    let arrow2_x2=90;
    let arrow2_y1=350;
    let arrow2_y2=360;

    let arrow3_x1=900;
    let arrow3_x2=890;
    let arrow3_y1=350;
    let arrow3_y2=360;

    let arrow4_x1=900;
    let arrow4_x2=890;
    let arrow4_y1=350;
    let arrow4_y2=340;
    let xScaleTicks=[];
    let xScaleNew;
    xScaleNew=scaleLinear()
			.domain([0,1]);
    xScaleTicks=xScaleNew.ticks(21);
    console.log(xScaleTicks);



</script>

<main>
    <div id="chart">
        <svg id="svgCharts" viewBox="-20 0 1000 400" 
        preserveAspectRatio="xMinYMid meet">
            <g id="chartView">
                <line class="axis" x1={y_axis_x1} y1={y_axis_y1} x2={y_axis_x2} y2={y_axis_y2}/>
                <line class="axis" x1={btw_x1} y1={btw_y1} x2={btw_x2} y2={btw_y2}/>
                <line class="axis" x1={arrow1_x1} y1={arrow1_y1} x2={arrow1_x2} y2={arrow1_y2}/>
                <line class="axis" x1={arrow2_x1} y1={arrow2_y1} x2={arrow2_x2} y2={arrow2_y2}/>
                <line class="axis" x1={arrow3_x1} y1={arrow3_y1} x2={arrow3_x2} y2={arrow3_y2}/>
                <line class="axis" x1={arrow4_x1} y1={arrow4_y1} x2={arrow4_x2} y2={arrow4_y2}/>
           
                <!-- {#each xScaleTicks as tk}
                <g>
                    <line class="axis" x1={97+(xScaleTicks.indexOf(tk)*86)} y1={95+(tick*80)} x2={97+(xScaleTicks.indexOf(tk)*86)} y2={100+(tick*80)}/> 
                </g>
            {/each} -->


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
    #chartView{
        display: flex;
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
    }
    #svgCharts{
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .axis{
        stroke: black;
        stroke-width: 2;
    }
</style>