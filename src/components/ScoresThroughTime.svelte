<script>
  import { scaleLinear, scaleOrdinal } from "d3-scale";
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
  let y_axis_x1 = 80;
  let y_axis_x2 = 80;
  let y_axis_y1 = 50;
  let y_axis_y2 = 320;
  let y_diff = (y_axis_y2 - y_axis_y1) / 20;
  let sttChartBoxWidth = 30;
  let sttChartBoxHeight = 6;
  let btw_x1 = 80;
  let btw_x2 = 1100;
  let btw_y1 = 355;
  let btw_y2 = 355;
  let arrow1_x1 = btw_x1;
  let arrow1_x2 = btw_x1 + 10;
  let arrow1_y1 = btw_y1;
  let arrow1_y2 = btw_y1 - 10;
  let arrow2_x1 = btw_x1;
  let arrow2_x2 = btw_x1 + 10;
  let arrow2_y1 = btw_y1;
  let arrow2_y2 = btw_y1 + 10;
  let arrow3_x1 = btw_x2;
  let arrow3_x2 = btw_x2 - 10;
  let arrow3_y1 = btw_y1;
  let arrow3_y2 = btw_y1 + 10;
  let arrow4_x1 = btw_x2;
  let arrow4_x2 = btw_x2 - 10;
  let arrow4_y1 = btw_y1;
  let arrow4_y2 = btw_y1 - 10;
  let xScaleTicks = [];
  let xScaleNew;
  xScaleNew = scaleLinear().domain([0, 1]);
  xScaleTicks = xScaleNew.ticks(21);
  let xIndex;
  let y_label_offsetX = 45;
  let y_label_offsetY = 3;
  let viewBoxWidth = 1100;
  let viewBoxHeight = 390;
  let array_taken = 0;
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
  let box_num;
  let btw_array_index = 0;
  let i = 0;
  let btw_arrays_taken = [];
  let btw_scores_arrays_taken = [];
  let boxArray = [];
  let box_select;
  let box_value;
  let btw_index;
  let k;
  let x_value;
  let score_value;
  let diff;
  let move_num;
  boxArray = Array.apply(null, { length: 36 }).map(Number.call, Number);
  let PositionScaleNew;
  let checkLastChart;
  move_number.subscribe((data) => {
    move_num = data;
  });
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
  box_select_store.subscribe((data) => {
    box_select = data;
    if (box_select != null) {
      box_select = box_list[box_select];
    }
  });
  function box_update(box) {
    box_select_store.update((n) => box);
  }
  function box_reupdate(checkLastChart) {
    box_select_store.set(null);
  }
  function xValueUpdate(btw_index) {
    x_value = y_axis_x1 + 5 + btw_index * 2 * sttChartBoxWidth;
    return x_value;
  }
  function yValueUpdate(box_char, btw_index) {
    score_value = btw_scores_arrays_taken[btw_index][box_char][btw_index];
    score_value = PositionScaleNew(score_value);
    return score_value;
  }
  function chartLabel(index) {
    return index * 2 + 1;
  }
  function colorUpdate(box, box_select, i) {
    if (i == 0) {
      if (box_select == box) return "#FFFF00";
      else return "#0000FF";
    } else {
      if (box_select == box) return "#FFFF00";
      else return "#d4d3d3";
    }
  }
  PositionScaleNew = scaleLinear().domain([1, -1]).range([y_axis_y1, y_axis_y2]);
</script>
<main>
  <div id="chart">
    <svg
      id="svgCharts"
      width="100%"
      height="100%"
      viewBox="0 0 {viewBoxWidth} {viewBoxHeight}"
      preserveAspectRatio="xMinYMid meet"
    >
      <!-- drawing the axis lines -->
      <g id="ChartView">
        <text
          class="ChartHeading"
          x={(btw_x2 - btw_x1) / 2.2 - y_label_offsetX}
          y={y_axis_y1 - 15}>Scores through-time(TT)</text
        >
        <line
          class="axis"
          x1={y_axis_x1}
          y1={y_axis_y1}
          x2={y_axis_x2}
          y2={y_axis_y2}
        />
        <!-- Time line -->
        <line class="axis" x1={btw_x1} y1={btw_y1} x2={btw_x2} y2={btw_y2} />
        <line
          class="axis"
          x1={arrow3_x1}
          y1={arrow3_y1}
          x2={arrow3_x2}
          y2={arrow3_y2}
        />
        <line
          class="axis"
          x1={arrow4_x1}
          y1={arrow4_y1}
          x2={arrow4_x2}
          y2={arrow4_y2}
        />
        <text
          class="y_labels"
          x={y_axis_x1 - y_label_offsetX - 15}
          y={y_axis_y1 + y_label_offsetY}>Win</text
        >
        <text
          class="y_labels"
          x={y_axis_x1 - y_label_offsetX - 15}
          y={y_axis_y1 + y_label_offsetY + y_diff * 10}>Draw</text
        >
        <text
          class="y_labels"
          x={y_axis_x1 - y_label_offsetX - 15}
          y={y_axis_y1 + y_label_offsetY + y_diff * 20}>Loss</text
        >
        <text
          class="y_labels"
          x={btw_x1 + (btw_x2 - btw_x1) / 2}
          y={btw_y2 + 10 * y_label_offsetY}>Time</text
        >
        {#each xScaleTicks as tk}
          {(xIndex = xScaleTicks.indexOf(tk))}
          {#if xIndex % 5 != 0}
            <line
              class="ThinLine"
              x1={btw_x1}
              y1={y_axis_y1 + xIndex * y_diff}
              x2={btw_x2}
              y2={y_axis_y1 + xIndex * y_diff}
            />
          {:else if xIndex == 10}
            <line
              class="axis"
              x1={btw_x1}
              y1={y_axis_y1 + xIndex * y_diff}
              x2={btw_x2}
              y2={y_axis_y1 + xIndex * y_diff}
            />
          {:else if xIndex == 5 || xIndex == 15}
            <line
              class="ThinAxis"
              x1={btw_x1}
              y1={y_axis_y1 + xIndex * y_diff}
              x2={btw_x2}
              y2={y_axis_y1 + xIndex * y_diff}
            />
          {/if}
        {/each}
      </g>
      <!-- drawing the boxes -->
      <g class="sttBoxes">
        {#if move_num > 0}
          {#each btw_arrays_taken as btw_array, index}
            {#if btw_arrays_taken.length != index + 1}
              {#each btw_array as box, i}
                {#if i == 0}
                  <g id={"top-previous-" + index}>
                    <rect
                      class="ChartPreviousBox {box_select != null
                        ? box_select == box
                          ? 'this-prev-top-box-selected'
                          : 'this-prev-top-box-not-selected'
                        : 'prev-top-pre-box'}"
                      x={xValueUpdate(index)}
                      y={yValueUpdate(box, index)}
                      width={sttChartBoxWidth}
                      height={sttChartBoxHeight}
                      style="fill:{colorUpdate(box, box_select, i)}"
                    />
                  </g>
                {:else}
                  <rect
                    class="ChartPreviousBox {box_select != null
                      ? box_select == box
                        ? 'this-prev-box-selected'
                        : 'this-prev-box-not-selected'
                      : 'prev-pre-box'}"
                    x={xValueUpdate(index)}
                    y={yValueUpdate(box, index)}
                    width={sttChartBoxWidth}
                    height={sttChartBoxHeight}
                    style="fill:{colorUpdate(box, box_select, i)}"
                  />
                {/if}
              {/each}
            {:else}
              {#each btw_array as box, i}
                {#if i == 0}
                  <g id="top-current">
                    <rect
                      class="ChartBox {box_select != null
                        ? box_select == box
                          ? 'this-top-box-selected'
                          : 'this-top-box-not-selected'
                        : 'top-pre-box'}"
                      x={xValueUpdate(index)}
                      y={yValueUpdate(box, index)}
                      width={sttChartBoxWidth}
                      height={sttChartBoxHeight}
                      on:mouseenter={() => {
                        box_num = box_list.indexOf(box);
                        box_update(box_num);
                      }}
                      on:mouseleave={() => {
                        box_reupdate();
                      }}
                    />
                  </g>
                {:else}
                  <g id={"current-" + i}>
                    <rect
                      class="ChartBox {box_select != null
                        ? box_select == box
                          ? 'this-box-selected'
                          : 'this-box-not-selected'
                        : 'pre-box'}"
                      x={xValueUpdate(index)}
                      y={yValueUpdate(box, index)}
                      width={sttChartBoxWidth}
                      height={sttChartBoxHeight}
                      on:mouseenter={() => {
                        box_num = box_list.indexOf(box);
                        box_update(box_num);
                      }}
                      on:mouseleave={() => {
                        box_reupdate();
                      }}
                    />
                  </g>
                {/if}
                {#if box_select == box}
                  {#each btw_arrays_taken as btw_array, index}
                    <!-- {#if btw_arrays_taken.length != index + 1} -->
                    <g id={"previous-high-" + index}>
                      <rect
                        class="ChartPreviousHighlightBox"
                        x={xValueUpdate(index)}
                        y={yValueUpdate(box, index)}
                        width={sttChartBoxWidth}
                        height={sttChartBoxHeight}
                        style="fill:yellow"
                      />
                    </g>
                    <!-- {/if} -->
                  {/each}
                {/if}
              {/each}
            {/if}
            <text
              class="y_labels"
              x={y_axis_x1 + 15 + index * sttChartBoxWidth * 2}
              y={y_axis_y2 + 30}>{chartLabel(index)}</text
            >
          {/each}
        {/if}
      </g>

<!-- bringing the highlighted and top most box to the front -->
      <use xlink:href="#top-current" />
      <!-- <use xlink:href="#topPrevious" /> -->
      {#if move_num > 0}
        {#each btw_arrays_taken as btw_array, index}
          {#if btw_arrays_taken.length != index + 1}
            <use xlink:href={"#top-previous-" + index} />
            <use xlink:href={"#previous-high-" + index} />
          {:else}
            <use xlink:href={"#previous-high-" + index} />
          {/if}
        {/each}
      {/if}
    </svg>
  </div>
</main>

<style>
  #chart {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #svgCharts {
    display: flex;
    overflow: hidden;
  }
  #ChartView {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .axis {
    stroke: black;
    stroke-width: 2;
  }
  .ThinAxis {
    stroke: black;
    stroke-width: 1;
  }
  .ThinLine {
    stroke: gray;
    stroke-width: 0.5;
  }
  .y_labels {
    font-weight: 500;
    font-size: 22px;
  }
  .ChartHeading {
    font-weight: 500;
    font-size: 2em;
  }
  .ChartBox.pre-box {
    fill: #d4d3d3;
    opacity: 1;
    /* stroke: black;
      stroke-width: 1; */
  }
  .ChartBox.this-box-selected {
    fill: yellow;
    opacity: 1;
    /* stroke: black;
      stroke-width: 1; */
  }
  .ChartBox.this-top-box-selected {
    fill: yellow;
    opacity: 1;
    /* stroke: black;
      stroke-width: 1; */
  }
  .ChartBox.top-pre-box {
    fill: blue;
    opacity: 1;
  }
  .ChartPreviousBox.this-prev-top-box-selected {
    opacity: 1;
  }
  .ChartPreviousBox.prev-top-pre-box {
    opacity: 1;
  }
  .ChartPreviousBox.this-prev-box-selected {
    opacity: 1;
  }
  .ChartPreviousBox.prev-pre-box {
    opacity: 1;
  }
  .ChartBox.this-box-not-selected {
    fill: #d4d3d3;
    opacity: 1;
    /* stroke: black;
      stroke-width: 1; */
  }
  .ChartBox.this-top-box-not-selected {
    fill: blue;
    opacity: 1;
    /* stroke: black;
      stroke-width: 1; */
  }
  .ChartPreviousBox.this-prev-top-box-not-selected {
    opacity: 1;
  }
  .ChartPreviousBox.this-prev-box-not-selected {
    opacity: 1;
  }
</style>
