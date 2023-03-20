import { readable, writable } from "svelte/store";
import { onMount } from "svelte";
import data_json from "../public/static/data/data.json";

let box_select_store = writable(100);
let move_number = writable(0);
let data;
let first_array=[];
let second_array=[];
let goes_first=[];
let winner;
let updated_first_array=writable([]);
let updated_second_array=writable([]);
let btw_arrays=[];
let btw_arrays_length;
let max_move;

if(data_json.board_data[0]["goes-first"]=="X"){
    first_array=data_json.board_data[0]["x-moves"];
    second_array=data_json.board_data[0]["o-moves"];
    goes_first="X";
}
else{
    first_array=data_json.board_data[0]["o-moves"];
    second_array=data_json.board_data[0]["x-moves"];
    goes_first="O";
}
winner=data_json.board_data[0].winner;
max_move=data_json.board_data[0].max_moves;

btw_arrays_length=Math.ceil(max_move/2);
let i=0;
let btw_i=1;
for(i=0; i<btw_arrays_length;i++){
    btw_arrays[i]=data_json.board_data[0]["BTW-arrays"]["BTW-"+btw_i]
    btw_i=btw_i+2;
}



export {box_select_store}
export {move_number}
export {first_array}
export {second_array}
export {updated_first_array}
export {updated_second_array}
export {goes_first}
export {winner}
export {btw_arrays}
export {max_move}