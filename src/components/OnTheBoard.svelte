<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";
    import { each } from "svelte/internal";
    import {box_select_store,updated_first_array,updated_second_array} from "../store.js";
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
    let board_id;
    let box_select;
    let first_array=[];
    let second_array=[];

    box_select_store.subscribe((data) => {
         box_select = data;
    });
    function box_update(box){
        box_select_store.update(n => box);
    }
    function box_reupdate(){
        box_select_store.set(null);
    }
    updated_first_array.subscribe((data) => {
         first_array = data;
    });
    updated_second_array.subscribe((data) => {
         second_array = data;
    });

</script>

<main>
    <div>
        counter value: {$updated_first_array}
    </div>
    <div id="GameBoard">
        <svg id="svgBoard" width="100%" height="100%" viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" 
        preserveAspectRatio="xMinYMid meet">
            <g id="BoardView">
                {#each boxArray as box}
                    {column_index=(box%9)}
                    {row_index=Math.floor(box/9)}
                    <rect class="BoardBox {box_select!=null ? box_select==box ? "this-box-selected":"this-box-not-selected":"pre-box"}" x={GB_X1+(column_index*boardBoxHeight)} y={GB_Y1+(row_index*boardBoxHeight)} width={boardBoxWidth} height={boardBoxHeight}
                        on:mouseenter={()=>{
                            box_update(box);

                        }}
                        on:mouseleave={()=>{
                            box_reupdate();
                        }}
                    />
                {/each}
                <!-- row lines-->
                {#each row_names as row_name}
                    <line class="ThinMidLine" x1={GB_X1} y1={GB_Y1+(boardBoxHeight/2)+(row_names.indexOf(row_name)*boardBoxHeight)} x2={GB_X1+(9*boardBoxWidth)} y2={GB_Y1+(boardBoxHeight/2)+(row_names.indexOf(row_name)*boardBoxHeight)}/>
                    {#if row_names.indexOf(row_name)!=0}
                        <line class="GridLine" x1={GB_X1} y1={GB_Y1+(row_names.indexOf(row_name)*boardBoxHeight)} x2={GB_X1+(9*boardBoxWidth)} y2={GB_Y1+(row_names.indexOf(row_name)*boardBoxHeight)}/>
                    {/if}
                {/each}
                <!-- column lines-->
                {#each column_names as column_name}
                    {#if column_names.indexOf(column_name)!=0}
                        <line class="GridLine" x1={GB_X1+(column_names.indexOf(column_name)*boardBoxWidth)} x2={GB_X1+(column_names.indexOf(column_name)*boardBoxWidth)} y1={GB_Y1} y2={GB_Y1+(4*boardBoxHeight)}/>
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
        stroke-width: 4px;
    }
    .ThinMidLine{
        stroke: #A81C1C;
        stroke-width: 1;
    }

</style>