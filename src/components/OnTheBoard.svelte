<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";
    import { each } from "svelte/internal";

    let GB_X1=230;
    let GB_Y1=30;
    let boardBoxWidth=70;
    let boardBoxHeight=70;
    let viewBoxWidth=1100;
    let viewBoxHeight=360;
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
    let move_num=0;
    let box_select=null;
    let board_id;
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
                    <rect class="BoardBox {box_select!=null ? box_select==box ? "this-box-selected":"this-box-not-selected":"pre-box"}" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxWidth} height={boardBoxHeight}
                        on:mouseenter={()=>{
                            box_select=box;        
                            console.log("selected")
                        }}
                        on:mouseleave={()=>{
                            box_select=null;
                        }}
                    />
                {/each}

                {#each row_names as row_name}
                    <line class="ThinLine" x1={GB_X1} y1={GB_Y1+(boardBoxHeight/2)+(row_names.indexOf(row_name)*boardBoxHeight)} x2={GB_X1+(9*boardBoxWidth)} y2={GB_Y1+(boardBoxHeight/2)+(row_names.indexOf(row_name)*boardBoxHeight)}/>
                    {#if row_names.indexOf(row_name)!=0}
                        <line class="GridLine" x1={GB_X1} y1={GB_Y1+(row_names.indexOf(row_name)*boardBoxHeight)} x2={GB_X1+(9*boardBoxWidth)} y2={GB_Y1+(row_names.indexOf(row_name)*boardBoxHeight)}/>
                    {/if}
                {/each}
                <!-- column lines and labels -->
                {#each column_names as column_name}
                    {#if column_names.indexOf(column_name)!=0}
                        <line class="GridLine" x1={GB_X1+(column_names.indexOf(column_name)*boardBoxWidth)} x2={GB_X1+(column_names.indexOf(column_name)*boardBoxWidth)} y1={GB_Y1} y2={GB_Y1+(4*boardBoxHeight)}/>
                    {/if}
                {/each}

                    <!-- drawing the axis line for each box -->
                    <!-- <line class="ThinLine" x1={GB_X1+(column_index*boardBoxHeight)} y1={(GB_Y1*2)+(row_index*boardBoxHeight)} x2={GB_X1+(column_index*boardBoxHeight)+boardBoxHeight} y2={(GB_Y1*2)+(row_index*boardBoxHeight)}/> -->
                
                <!-- Column labels -->
                <!-- {#each column_names as column_name}
                    <text class="BoardLabels" x={GB_X1+30+(boardBoxHeight*column_names.indexOf(column_name))} y={GB_Y1-10}>{column_name}</text>
                {/each} -->
                <!-- Row labels -->
                <!-- {#each row_names as row_name}
                    <text class="BoardLabels" x={GB_X1-30} y={GB_Y1+(boardBoxHeight/2)+(boardBoxHeight*row_names.indexOf(row_name))}>{row_name}</text>
                {/each} -->
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
        fill: yellow;
        /* stroke: gray;
        stroke-width: 1px; */
    }
    .BoardLabels{
        font-weight: 500;
        font-size: larger;
    }
    .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
    
    }
    .BlackFont{
        color: black;
    }
    rect.this-box-not-selected{
        fill: white;
        /* stroke: gray;
        stroke-width: 3px; */
    }
    rect.this-box-selected{
        fill: yellow;
        /* stroke: gray;
        stroke-width: 3px; */
        opacity: 1;
    }
    rect.pre-box{
        fill: white;
    }
    .GridLine{
        stroke: gray;
        stroke-width: 3px;
    }
    .ThinLine{
        stroke: gray;
        stroke-width: 0.5;
    }

</style>