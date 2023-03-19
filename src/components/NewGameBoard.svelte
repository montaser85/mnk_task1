<script>
  import { scaleLinear, scaleOrdinal } from "d3-scale";
  import { each } from "svelte/internal";
  import { onMount } from "svelte";
  import {
    box_select_store,
    move_number,
    first_array,
    second_array,
    goes_first,
    updated_first_array,
    updated_second_array,
    winner,
  } from "../store.js";
  //import pred_data from "../prediction_results.json";
  let GB_X1 = 180;
  let GB_Y1 = 0;
  let boardBoxWidth = 80;
  let boardBoxHeight = 80;
  let viewBoxWidth = 1100;
  let viewBoxHeight = 380;
  let xScaleTicks = [];
  let xScaleNew;
  let symbolName;
  let boxArray = [];
  let boxNum = 36;
  let column_num = 9;
  let column_index;
  let row_index;
  let symbolDimension = boardBoxHeight * 0.9;
  let column_names = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  let row_names = ["1", "2", "3", "4"];
  boxArray = Array.apply(null, { length: boxNum }).map(Number.call, Number);
  let box;
  let move_num = 0;
  let box_select;
  let board_id;
  let board_components = [];
  let max_move = 9;
  let move_next = goes_first;
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
  let first_moves = [];
  let second_moves = [];
  let win_seq = ["D2", "E2", "F2", "G2"];
  let check_box;
  $: first_moves = JSON.stringify(goes_first_array);
  $: second_moves = JSON.stringify(goes_second_array);
  // combining x and o-moves alternateviely
  let AllMoves = [];
  for (let i = 0; i < first_array.length + second_array.length; i++) {
    if (i % 2 === 0) {
      AllMoves.push(first_array[i / 2]);
    } else {
      AllMoves.push(second_array[(i - 1) / 2]);
    }
  }

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

  function move_increment() {
    move_number.update((n) => n + 1);
    BoxElementUpdate(move_num);
    next_move_update(move_num);
  }
  function move_decrement() {
    move_number.update((n) => n - 1);
    BoxElementUpdate(move_num);
    next_move_update(move_num);
  }

  function next_move_update(move_num) {
    if (goes_first == "X") {
      if (move_num % 2 == 0) {
        move_next = "X";
      } else {
        move_next = "O";
      }
    } else {
      if (move_num % 2 == 0) {
        move_next = "O";
      } else {
        move_next = "X";
      }
    }
  }
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
  let suffix;
  function suffixName(box) {
    suffix = AllMoves.indexOf(box_list[box]) + 1;
    return suffix;
  }

  let i = 0;
  function BoxElementUpdate(move_num) {
    let first_array_i = 0;
    let second_array_i = 0;
    goes_first_array = [];
    goes_second_array = [];
    if (move_num > 0) {
      for (i = 1; i <= move_num; i++) {
        if (i % 2 == 1) {
          goes_first_array.push(first_array[first_array_i]);
          //goes_first_array.push(2);
          first_array_i++;
        } else {
          goes_second_array.push(second_array[second_array_i]);
          second_array_i++;
        }
      }
    }
    updated_first_array.update((items) => {
      items = [];
      return [goes_first_array, ...items];
    });

    updated_second_array.update((items) => {
      items = [];
      return [goes_second_array, ...items];
    });
  }
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
          {(column_index = box % 9)}
          <!-- {row_index=(box-(box%9))/9} -->
          {(row_index = Math.floor(box / 9))}
          {(board_id = row_index * 9 + column_index)}

          <!-- class="Win_Box_and_Symbol {box_select == box?'this-win-box-selected':'this-win-box-not-selected'}" -->
          {#if (move_num == max_move) & win_seq.includes(box_list[box])}
            {#if winner=="X"}
                <g
                class="Win_Box_and_Symbol {box_select == box?'this-win-x-box-selected':'this-win-x-box-not-selected'}"
                on:mouseenter={() => {
                    box_update(box);
                }}
                on:mouseleave={() => {
                    box_reupdate();
                }}
                >
                <rect
                    class="BoardBox"
                    x={GB_X1 + column_index * boardBoxHeight}
                    y={GB_Y1 + row_index * boardBoxHeight}
                    width={boardBoxWidth}
                    height={boardBoxHeight}
                />
                {#if (move_num > 0) & (first_moves.includes(box_list[box]) || second_moves.includes(box_list[box]))}
                    {(column_index = box % 9)}
                    {(row_index = Math.floor(box / 9))}
                    <image
                    class="XSymbol"
                    x={GB_X1 + column_index * boardBoxHeight}
                    y={GB_Y1 + row_index * boardBoxHeight}
                    width={symbolDimension}
                    height={symbolDimension}
                    href="static/images/{SymbolName(box)}.png"
                    alt=""
                    />
                    <text
                    class="SymbolSuffix"
                    x={GB_X1 +
                        column_index * boardBoxHeight +
                        boardBoxHeight * 0.8}
                    y={GB_Y1 + row_index * boardBoxHeight + 20}
                    >{suffixName(box)}
                    </text>
                {/if}
                </g>
            {:else if winner=="O"}
                <g
                class="Win_Box_and_Symbol {box_select == box?'this-win-o-box-selected':'this-win-o-box-not-selected'}"
                on:mouseenter={() => {
                    box_update(box);
                }}
                on:mouseleave={() => {
                    box_reupdate();
                }}
                >
                <rect
                    class="BoardBox"
                    x={GB_X1 + column_index * boardBoxHeight}
                    y={GB_Y1 + row_index * boardBoxHeight}
                    width={boardBoxWidth}
                    height={boardBoxHeight}
                />
                {#if (move_num > 0) & (first_moves.includes(box_list[box]) || second_moves.includes(box_list[box]))}
                    {(column_index = box % 9)}
                    {(row_index = Math.floor(box / 9))}
                    <image
                    class="XSymbol"
                    x={GB_X1 + column_index * boardBoxHeight}
                    y={GB_Y1 + row_index * boardBoxHeight}
                    width={symbolDimension}
                    height={symbolDimension}
                    href="static/images/{SymbolName(box)}.png"
                    alt=""
                    />
                    <text
                    class="SymbolSuffix"
                    x={GB_X1 +
                        column_index * boardBoxHeight +
                        boardBoxHeight * 0.8}
                    y={GB_Y1 + row_index * boardBoxHeight + 20}
                    >{suffixName(box)}
                    </text>
                {/if}
                </g>
            {/if}
            
          {:else}
            <g
              class="Box_and_Symbol {box_select == box
                ? 'this-box-selected'
                : 'this-box-not-selected'}"
              on:mouseenter={() => {
                box_update(box);
              }}
              on:mouseleave={() => {
                box_reupdate();
              }}
            >
              <rect
                class="BoardBox"
                x={GB_X1 + column_index * boardBoxHeight}
                y={GB_Y1 + row_index * boardBoxHeight}
                width={boardBoxWidth}
                height={boardBoxHeight}
              />
              {#if (move_num > 0) & (first_moves.includes(box_list[box]) || second_moves.includes(box_list[box]))}
                {(column_index = box % 9)}
                {(row_index = Math.floor(box / 9))}
                <image
                  class="XSymbol"
                  x={GB_X1 + column_index * boardBoxHeight}
                  y={GB_Y1 + row_index * boardBoxHeight}
                  width={symbolDimension}
                  height={symbolDimension}
                  href="static/images/{SymbolName(box)}.png"
                  alt=""
                />
                <text
                  class="SymbolSuffix"
                  x={GB_X1 +
                    column_index * boardBoxHeight +
                    boardBoxHeight * 0.8}
                  y={GB_Y1 + row_index * boardBoxHeight + 20}
                  >{suffixName(box)}
                </text>
              {/if}
            </g>
          {/if}
        {/each}
        <!-- drawing the gridlines of the baord -->
        <!-- row lines and labels -->
        {#each row_names as row_name}
          <text
            class="BoardLabels"
            x={GB_X1 - 30}
            y={GB_Y1 +
              boardBoxHeight / 2 +
              boardBoxHeight * row_names.indexOf(row_name)}>{row_name}</text
          >
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
        <!-- column lines and labels -->
        {#each column_names as column_name}
          <text
            class="BoardLabels"
            x={GB_X1 + 30 + boardBoxHeight * column_names.indexOf(column_name)}
            y={GB_Y1 - 10}>{column_name}</text
          >
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
        <!-- adding buttons -->
        <!-- prior move button -->
        <g
          on:click={() => {
            if (move_num >= 1) {
              move_decrement();
            }
          }}
          on:keypress={() => {
            if (move_num >= 1) {
              move_decrement();
            }
          }}
        >
          <rect
            class="BoardButton"
            x={GB_X1 + 1.5 * boardBoxHeight}
            y={GB_Y1 + 4.2 * boardBoxHeight}
            rx="10"
            ry="10"
            width={boardBoxWidth * 1.5}
            height={boardBoxHeight * 0.8}
          />
          <text
            class="ButtonLabels"
            x={GB_X1 + 1.7 * boardBoxHeight}
            y={GB_Y1 + 4.5 * boardBoxHeight}>Prior Move</text
          >
          <!-- <image class="imagebox" x={GB_X1+(1.7*boardBoxHeight)} y={GB_Y1+20+(4.2*boardBoxHeight)} width=70 height=50 href="static/images/arrow_back.png" alt=""/> -->
          <image
            class="imagebox"
            x={GB_X1 + 10 + 1.7 * boardBoxHeight}
            y={GB_Y1 + 25 + 4.2 * boardBoxHeight}
            width="60"
            height="40"
            href="static/images/arrow_back.png"
            alt=""
          />
        </g>
        <g
          on:click={() => {
            if (move_num < max_move) {
              move_increment();
            }
          }}
          on:keypress={() => {
            if (move_num <= max_move) {
              move_increment();
            }
          }}
        >
          <!-- Next move button  -->
          <rect
            class="BoardButton"
            x={GB_X1 + 6 * boardBoxHeight}
            y={GB_Y1 + 4.2 * boardBoxHeight}
            rx="10"
            ry="10"
            width={boardBoxWidth * 1.5}
            height={boardBoxHeight * 0.8}
          />
          <text
            class="ButtonLabels"
            x={GB_X1 + 6.2 * boardBoxHeight}
            y={GB_Y1 + 4.5 * boardBoxHeight}>Next Move</text
          >
          <!-- <image class="imagebox" x={GB_X1+(6.2*boardBoxHeight)} y={GB_Y1+20+(4.2*boardBoxHeight)} width=70 height=50 href="static/images/arrow_for.png" alt=""/> -->
          <image
            class="imagebox"
            x={GB_X1 + 10 + 6.2 * boardBoxHeight}
            y={GB_Y1 + 25 + 4.2 * boardBoxHeight}
            width="60"
            height="40"
            href="static/images/arrow_for.png"
            alt=""
          />
        </g>

        <!-- adding text of the board -->
        <text
          class="BoardLabels"
          x={GB_X1 + 3.6 * boardBoxHeight}
          y={GB_Y1 + 4.6 * boardBoxHeight}>Showing Move: {move_num}</text
        >
        <text
          class="BoardLabels"
          x={GB_X1 + 3.1 * boardBoxHeight}
          y={GB_Y1 + 5.25 * boardBoxHeight}
          >Who moves next:
        </text>
        <rect
          class="NextMoveHolder"
          x={GB_X1 + 5 * boardBoxHeight}
          y={GB_Y1 + 5 * boardBoxHeight}
          width="40"
          height="27"
        />
        <image
          class="imagebox"
          x={GB_X1 + 5 * boardBoxHeight + 4}
          y={GB_Y1 + 5 * boardBoxHeight - 2}
          width="30"
          height="30"
          href="static/images/{move_next}.png"
          alt=""
        />
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
  .Box_and_Symbol {
    fill: #ffe600;
    /* stroke: gray;
        stroke-width: 1px; */
  }
  .BoardLabels {
    font-weight: 500;
    font-size: larger;
  }
  .ButtonLabels {
    font-weight: 500;
    font-size: large;
    fill: black;
  }
  .BoardButton {
    fill: #e1e1e1;
    stroke: #6f6f6f;
    stroke-width: 4px;
  }
  .SymbolSuffix {
    font-weight: 500;
    font-size: larger;
    fill: black;
  }
  image.imagebox {
    opacity: 1;
  }

  image.XSymbol {
    opacity: 1;
  }
  g.this-box-not-selected {
    fill: white;
    /* stroke: gray;
        stroke-width: 3px; */
  }
  g.this-box-selected {
    fill: yellow;
    /* stroke: gray;
        stroke-width: 3px; */
    opacity: 1;
  }
  g.this-win-x-box-not-selected {
    fill: #6495ED;
  }
  g.this-win-x-box-selected {
    fill: yellow;
  }
  g.this-win-o-box-not-selected {
    /* fill: #F88379; coral pink*/
    fill: #FAA0A0;
  }
  g.this-win-o-box-selected {
    fill: yellow;
  }
  .GridLine {
    stroke: gray;
    stroke-width: 4px;
  }
  .NextMoveHolder {
    fill: white;
    stroke: black;
    stroke-width: 0.5px;
  }
</style>
