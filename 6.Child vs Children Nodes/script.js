//?Fetch the emelement with id "parent"
const parentEl = document.getElementById("parent")
// console.log(parentEl);
// console.log(parentEl.childNodes);
// console.log(parentEl.children);

parentEl.childNodes.forEach((node) => {
    // console.log(node);
    // console.log(node.nodeType);
    // console.log(node.nodeName);
    // console.log(node.textContent);
    // console.log(node.innerHTML);
})

//! Fetch all children element nodes of the parent element
// console.log(parentEl.children);
const arrChildren = Array.from(parentEl.children);
arrChildren.forEach((child) => {
    console.log(child);
    console.log(child.innerHTML);
})