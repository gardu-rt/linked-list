import LinkedList from "./linked-list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.find("hamster"));
console.log(list.find("david"));
console.log(list.contains("snake"));

console.log(list);
