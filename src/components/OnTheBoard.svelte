<script>
  import { scaleLinear, scaleOrdinal } from "d3-scale";
  import { each } from "svelte/internal";
  import {
    box_select_store,
    move_number,
    first_array,
    second_array,
    goes_first,
    updated_first_array,
    updated_second_array,
    winner,
    max_move,
    btw_arrays,
    btw_scores_arrays,
  } from "../store.js";
  let GB_X1 = 260;
  let GB_Y1 = 75;
  let boardBoxWidth = 70;
  let boardBoxHeight = 70;
  let smallBoxWidth = 5;
  let smallBoxHeight = 3;
  let btw_arrays_taken = [];
  let btw_scores_arrays_taken = [];
  let i = 0;
  let stt_x1 = 80;
  let stt_x2 = 1100;
  let stt_y1 = 50;

  let viewBoxWidth = 1100;
  let viewBoxHeight = 390;
  let xScaleTicks = [];
  let xScaleNew;
  let boxArray = [];
  let boxNum = 36;
  let column_num = 9;
  let column_index;
  let row_index;
  let column_names = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  let row_names = ["1", "2", "3", "4"];
  boxArray = Array.apply(null, { length: boxNum }).map(Number.call, Number);
  let box;
  let move_num = 0;
  let board_id;
  let box_select;
  let box_x;
  let box_y;
  let PositionScaleNew;
  let first_moves = [];
  let second_moves = [];
  let goes_first_array = [];
  let goes_second_array = [];
  let box_list = [
    "A1",
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "H1",
    "I1",
    "A2",
    "B2",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "H2",
    "I2",
    "A3",
    "B3",
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "H3",
    "I3",
    "A4",
    "B4",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "H4",
    "I4",
  ];
  $: first_moves = JSON.stringify(goes_first_array);
  $: second_moves = JSON.stringify(goes_second_array);
  box_select_store.subscribe((data) => {
    box_select = data;
  });
  function box_update(box) {
    box_select_store.update((n) => box);
  }
  function box_reupdate() {
    box_select_store.set(null);
  }
  updated_first_array.subscribe((data) => {
    goes_first_array = data;
  });
  updated_second_array.subscribe((data) => {
    goes_second_array = data;
  });
  move_number.subscribe((data) => {
    move_num = data;
  });
  let symbol;
  function SymbolName(box) {
    if ((goes_first == "X") & first_moves.includes(box_list[box])) {
      symbol = "X";
    } else if ((goes_first == "O") & first_moves.includes(box_list[box])) {
      symbol = "O";
    } else if ((goes_first == "X") & second_moves.includes(box_list[box])) {
      symbol = "O";
    } else if ((goes_first == "O") & second_moves.includes(box_list[box])) {
      symbol = "X";
    }
    return symbol;
  }
  $: {
    if (move_num > 0) {
      btw_arrays_taken = [];
      btw_scores_arrays_taken = [];
      let limit;
      if (goes_first == "X") {
        limit = Math.ceil(move_num / 2);
      } else if (goes_first == "O") {
        limit = Math.floor(move_num / 2);
      }
      for (i = 0; i < limit; i++) {
        btw_arrays_taken.push(btw_arrays[i]);
        btw_scores_arrays_taken.push(btw_scores_arrays[i]);
      }
    }
  }
  let x_value;
  let score_value;
  function xValueUpdate(box_x, btw_index) {
    PositionScaleNew = scaleLinear()
      .domain([0, 9])
      .range([box_x + 5, box_x + boardBoxWidth - 5]);
    x_value = PositionScaleNew(btw_index);
    return x_value;
  }
  function yValueUpdate(box_char, box_y, btw_index) {
    score_value = btw_scores_arrays_taken[btw_index][box_char][btw_index];
    PositionScaleNew = scaleLinear()
      .domain([1, -1])
      .range([box_y + 5, box_y + boardBoxHeight - 5]);
    score_value = PositionScaleNew(score_value);
    return score_value;
  }
  // PositionScaleNew = scaleLinear().domain([1, -1]).range([y_axis_y1, y_axis_y2]);
</script>

<main>
  <div id="GameBoard">
    <svg
      id="svgBoard"
      width="100%"
      height="100%"
      viewBox="0 0 {viewBoxWidth} {viewBoxHeight}"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="BoardView">
        {#each boxArray as box}
          {#if (move_num > 0) & (first_moves.includes(box_list[box]) || second_moves.includes(box_list[box]))}
            {(column_index = box % 9)}
            {(row_index = Math.floor(box / 9))}
            {#if SymbolName(box) == "X"}
              <rect
                class="BoardBoxOccupied {box_select == box
                  ? 'this-x-box-selected'
                  : 'this-x-box-not-selected'}"
                x={GB_X1 + column_index * boardBoxHeight}
                y={GB_Y1 + row_index * boardBoxHeight}
                width={boardBoxWidth}
                height={boardBoxHeight}
                on:mouseenter={() => {
                  box_update(box);
                }}
                on:mouseleave={() => {
                  box_reupdate();
                }}
              />
            {:else if SymbolName(box) == "O"}
              <rect
                class="BoardBoxOccupied {box_select == box
                  ? 'this-o-box-selected'
                  : 'this-o-box-not-selected'}"
                x={GB_X1 + column_index * boardBoxHeight}
                y={GB_Y1 + row_index * boardBoxHeight}
                width={boardBoxWidth}
                height={boardBoxHeight}
                on:mouseenter={() => {
                  box_update(box);
                }}
                on:mouseleave={() => {
                  box_reupdate();
                }}
              />
            {/if}
          {:else}
            {(column_index = box % 9)}
            {(row_index = Math.floor(box / 9))}
            <rect
              class="BoardBox {box_select == box
                ? 'this-box-selected'
                : 'this-box-not-selected'}"
              x={GB_X1 + column_index * boardBoxHeight}
              y={GB_Y1 + row_index * boardBoxHeight}
              width={boardBoxWidth}
              height={boardBoxHeight}
              on:mouseenter={() => {
                box_update(box);
              }}
              on:mouseleave={() => {
                box_reupdate();
              }}
            />
          {/if}
        {/each}

        <!-- ******************** -->

        <g class="smallBoxesAll">
          {#if move_num > 0}
            {#each btw_scores_arrays_taken as btw_scores_array, btw_index}
              {#each box_list as box, box_i}
                {(column_index = box_i % 9)}
                {(row_index = Math.floor(box_i / 9))}
                {(box_x = GB_X1 + column_index * boardBoxHeight)}
                {(box_y = GB_Y1 + row_index * boardBoxHeight)}
                <rect
                  class="smallBox"
                  x={xValueUpdate(box_x, btw_index)}
                  y={yValueUpdate(box, box_y, btw_index)}
                  width={smallBoxWidth}
                  height={smallBoxHeight}
                />
              {/each}
            {/each}
          {/if}
        </g>
        <g>
          <text
            class="ChartHeading"
            x={(stt_x2 - stt_x1) / 2.2 - 45}
            y={stt_y1 - 5}>Scores on the-board(OTB)</text
          >
        </g>
        <!-- row lines-->
        <g>
          {#each row_names as row_name}
            <line
              class="ThinMidLine"
              x1={GB_X1}
              y1={GB_Y1 +
                boardBoxHeight / 2 +
                row_names.indexOf(row_name) * boardBoxHeight}
              x2={GB_X1 + 9 * boardBoxWidth}
              y2={GB_Y1 +
                boardBoxHeight / 2 +
                row_names.indexOf(row_name) * boardBoxHeight}
            />
            {#if row_names.indexOf(row_name) != 0}
              <line
                class="GridLine"
                x1={GB_X1}
                y1={GB_Y1 + row_names.indexOf(row_name) * boardBoxHeight}
                x2={GB_X1 + 9 * boardBoxWidth}
                y2={GB_Y1 + row_names.indexOf(row_name) * boardBoxHeight}
              />
            {/if}
          {/each}
        </g>

        <!-- column lines-->
        {#each column_names as column_name}
          {#if column_names.indexOf(column_name) != 0}
            <line
              class="GridLine"
              x1={GB_X1 + column_names.indexOf(column_name) * boardBoxWidth}
              x2={GB_X1 + column_names.indexOf(column_name) * boardBoxWidth}
              y1={GB_Y1}
              y2={GB_Y1 + 4 * boardBoxHeight}
            />
          {/if}
        {/each}
      </g>
    </svg>
  </div>
</main>

<style>
  #GameBoard {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #svgBoard {
    display: flex;
    overflow: hidden;
  }
  .BoardBox {
    fill: yellow;
  }
  .BoardBox.this-box-not-selected {
    fill: white;
    /* stroke: gray;
        stroke-width: 3px; */
  }
  .BoardBox.this-box-selected {
    fill: white;
    stroke: yellow;
    stroke-width: 10px;
  }
  .BoardBoxOccupied.this-x-box-selected {
    fill: white;
    stroke: yellow;
    stroke-width: 10px;
  }
  .BoardBoxOccupied.this-x-box-not-selected {
    fill: white;
    stroke: blue;
    stroke-width: 6px;
  }
  .BoardBoxOccupied.this-o-box-selected {
    fill: white;
    stroke: yellow;
    stroke-width: 10px;
  }
  .BoardBoxOccupied.this-o-box-not-selected {
    fill: white;
    stroke: red;
    stroke-width: 6px;
  }
  .GridLine {
    stroke: gray;
    stroke-width: 4px;
  }
  .ThinMidLine {
    stroke: #a81c1c;
    stroke-width: 1;
  }
  .ChartHeading {
    font-weight: 500;
    font-size: 2em;
  }
</style>
