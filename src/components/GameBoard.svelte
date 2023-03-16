<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";

    let GB_X1=180;
    let GB_Y1=0;
    let boardBoxWidth=80;
    let boardBoxHeight=80;

    let viewBoxWidth=1100;
    let viewBoxHeight=380;
    let xScaleTicks=[];
    let xScaleNew;
    // xScaleNew=scaleLinear()
	// 		.domain([1,360]);
    // xScaleTicks=xScaleNew.ticks(35);
    // console.log(xScaleTicks);
    // let xIndex;
    let boxArray=[];
    let boxNum = 36;
    let column_num=9;
    let column_index;
    let row_index; 
    boxArray=Array.apply(null, {length: boxNum}).map(Number.call, Number)
    console.log(boxArray)
    let i;
    let box;
    // for(i=0;i<36;i++){
    //     box=boxArray[i]
    //     column_index=box%9
    //     row_index=(box-(box%9))/9
    //     console.log("Number: "+box)
    //     console.log("row: "+row_index)
    //     console.log("column: "+column_index)
    // }
</script>
<main>
    <div id="GameBoard">
        <svg id="svgBoard" width="100%" height="100%" viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" 
        preserveAspectRatio="xMinYMid meet">
            <g id="BoardView">
                {#each boxArray as box}
                    {column_index=(box%9)}
                    {row_index=(box-(box%9))/9}
                    <!-- <rect class="BoardBox {row_index}" id="BoardTop" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}/> -->
                    {#if row_index==0}
                        {#if column_index==0}
                            <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                            style="stroke-dasharray: 0,{boardBoxHeight}"
                            />
                        {:else if column_index==8}
                            <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                            style="stroke-dasharray: 0,{boardBoxHeight}"
                        />
                        {:else}
                            <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                            style="stroke-dasharray: 0,{boardBoxHeight},{boardBoxHeight*2}"
                            />
                        {/if}

                    {:else if row_index==3}
                        {#if column_index==0}
                            <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                            style="stroke-dasharray: 0,{boardBoxHeight}"
                            />
                        {:else if column_index==8}
                            <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                            style="stroke-dasharray: 0,{boardBoxHeight}"
                        />
                        {:else}
                            <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                            style="stroke-dasharray: {boardBoxHeight*2},{boardBoxHeight}"
                            />
                        {/if}
                    {:else if column_index==0}
                        <rect class="BoardBox" id="BoardBoxLeft" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}/>
                    {:else if column_index==8}
                        <rect class="BoardBox" id="BoardBoxRight" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}/>
                    {:else}
                        <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}/>
                    {/if}
                {/each}
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
    .BoardBox{
        fill: none;
        stroke: gray;
        stroke-width: 3px;
    }
    #BoardBoxLeft{
        fill: none;
        stroke: gray;
        stroke-width: 3px;
        stroke-dasharray: 240,80;
    }
    #BoardBoxRight{
        fill: none;
        stroke: gray;
        stroke-width: 3px;
        stroke-dasharray: 80,80,160;
    }
    #BoardBoxTop{
        fill: none;
        stroke: gray;
        stroke-width: 3px;
        stroke-dasharray: 0,80,240;
    }
    #BoardBoxDown{
        fill: none;
        stroke: gray;
        stroke-width: 3px;
        stroke-dasharray: 160,80;
    }

</style>