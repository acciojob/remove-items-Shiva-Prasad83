//your JS code here. If required.
const button=document.getElementsByTagName("input")[0];
button.addEventListener("click",(e)=>{
	const element=document.querySelector("#colorSelect option:checked");
	element.remove();
})

