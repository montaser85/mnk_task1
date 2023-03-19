import { readable, writable } from "svelte/store";
import { onMount } from "svelte";
import data_json from "../public/static/data/data.json";

let box_select_store = writable(100);
let move_number = writable(0);
let data;
let first_array=[];
let second_array=[];
let goes_first=[];


let updated_first_array=writable([]);
let updated_second_array=writable([]);

export {box_select_store}
export {move_number}
export {first_array}
export {second_array}
export {updated_first_array}
export {updated_second_array}
export {goes_first}

// onMount(async () => {
//     data=await fetch('../JsonFiles/Game6.json');

// });

// data=await fetch('../JsonFiles/Game6.json');
// console.log(data_json)
// onMount(async () => {
//     const fetched = await fetch('data.json');
//     const inst = (await fetched.json()).board_data;
//     instances=inst;
//     console.log(instances);

    
// });

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

// console.log(first_array);
// console.log(second_array);



