<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";
  import { each } from "svelte/internal";

    let GB_X1=180;
    let GB_Y1=0;
    let boardBoxWidth=80;
    let boardBoxHeight=80;
    let viewBoxWidth=1100;
    let viewBoxHeight=380;
    let xScaleTicks=[];
    let xScaleNew;
    let boxArray=[];
    let boxNum = 36;
    let column_num=9;
    let column_index;
    let row_index;
    let column_names=["A","B","C","D","E","F","G","H","I",]
    let row_names=["1","2","3","4"]
    boxArray=Array.apply(null, {length: boxNum}).map(Number.call, Number)
    let box;
</script>
<main>
    <div id="GameBoard">
        <svg id="svgBoard" width="100%" height="100%" viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" 
        preserveAspectRatio="xMinYMid meet">
            <g id="BoardView">
                {#each boxArray as box}
                    {column_index=(box%9)}
                    <!-- {row_index=(box-(box%9))/9} -->
                    {row_index=Math.floor(box/9)}
                    <!-- top row -->
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
                    <!-- bottom row -->
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
                        <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                        style="stroke-dasharray: {boardBoxHeight*3},{boardBoxHeight}"
                        />
                    {:else if column_index==8}
                        <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}
                        style="stroke-dasharray: {boardBoxHeight},{boardBoxHeight},{boardBoxHeight*2}"
                        />
                    <!-- Boxes inside -->
                    {:else}
                        <rect class="BoardBox" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxHeight} height={boardBoxWidth}/>
                    {/if}
                {/each}

                <!-- Column labels -->
                {#each column_names as column_name}
                    <text class="BoardLabels" x={GB_X1+30+(boardBoxHeight*column_names.indexOf(column_name))} y={GB_Y1-10}>{column_name}</text>
                {/each}
                <!-- Row labels -->
                {#each row_names as row_name}
                    <text class="BoardLabels" x={GB_X1-30} y={GB_Y1+(boardBoxHeight/2)+(boardBoxHeight*row_names.indexOf(row_name))}>{row_name}</text>
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
    .BoardLabels{
        font-weight: 500;
        font-size: larger;
    }

</style>