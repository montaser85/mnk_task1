import { writable } from "svelte/store";
// const SelectionStore = writable([{
//     id: 1,
//     row_index: 2,
//     column_index: 3
// }]);
let box_select_store = writable(100);

export {box_select_store}

// export default SelectionStore;