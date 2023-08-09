var studentId=prompt("Enter your Student Id ");
var imgsource="https://erp.psit.ac.in/assets/img/Simages/"+studentId+".jpg";
document.querySelector("img").setAttribute("src",imgsource);
document.querySelector(".c p").textContent="Student Id : "+studentId;

