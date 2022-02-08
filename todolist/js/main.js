let btnAddTask = document.getElementById("btn_add_task");
let areaForm = document.getElementById("area-form");
let btnCancel = document.getElementById("btn_cancel");
let areaListTask = document.getElementById("area-list-task");



  btnAddTask.addEventListener("click", function(){
    btnAddTask.innerHTML = "Close";
    btnAddTask.classList.remove("btn-info");
    btnAddTask.classList.add("btn-danger");
//check class: d-none 
// Nếu có: form KO hiện ra, nút thành Add Task,  class là btn-info
// Ko có: form HIỆN ra, nút thành CLOSE, class là btn-danger
    
    if (areaForm.classList.contains("d-none")) {
        areaForm.classList.remove("d-none");
        areaForm.classList.add("btn-info");
        btnAddTask.textContent = "Close";
        btnAddTask.classList.add("btn-info");
  
    } else {
        areaForm.classList.remove("btn-info");
        areaForm.classList.add("d-none");     
        btnAddTask.textContent = "Add Task";
        btnAddTask.classList.add("btn-danger");  
    }

    
 });

 btnCancel.addEventListener("click", function(){
    if (areaForm.classList.contains("d-none")) {
        areaForm.classList.remove("d-none");
        areaForm.classList.add("btn-info");
        btnAddTask.textContent = "Close";
        btnAddTask.classList.add("btn-info");
  
    } else {
        areaForm.classList.remove("btn-info");
        areaForm.classList.add("d-none");     
        btnAddTask.textContent = "Add Task";
        btnAddTask.classList.add("btn-danger");  
    }
 })

//  1. Dùng vòng lặp foreach  cho mảng items
//  2. Qua mỗi vòng lặp thì lấy ra gía trị object, nối chuỗi vào biến tblContent
//  3. Cuối cùng lấy biến tblContent gán innerHTML cho body của table

let items = [
    {
        id : 1,
        name: "task 01",
        level: 0
    },
    {
        id : 2,
        name: "task 02",
        level: 1
    },
    {
        id : 3,
        name: "task 03",
        level: 2
    },
];
showDataList(item);
items.forEach(element => {
    let id = element.id;
    let  name = element.name;
    let  level = element.level;

    tblContent += `<tr>
    <td>${id}</th>
    <td>${name}</td>
    <td><span class="badge bg-danger">${level}</span></td>
    <td>
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger">Delete</button>
    </td>
</tr>`;
}
);
areaListTask.innerHTML = tblContent;

/****************************/
// let areaListTask = document.getElementById('area-list-task');

// let items = [
//     {id: makeID(); name: 'Task 1'; level: 1;
//      id: makeID(); name: 'Task 2'; level: 3;
//      id: makeID(); name: 'Task 3'; level: 2;
//     }
// ]
//  let content = '';
//  items.forEach(item => {
//      let id = item.id;
//      let name = item.name;
//      let level = item.level;
//     content += `
//     <tr>
//         <td>${id}</th>
//          <td>${name}</td>
//          <td><span class="badge bg-danger">${level}</span></td>
//          <td>
//               <button class="btn btn-warning">Edit</button>
//                <button class="btn btn-danger">Delete</button>
//          </td>
//     </tr>
//     `
 
//     });
//     areaListTask.innerHTML = content;

//     function makeID(length = 5) {
//         let result = '';
//         let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let charactersLength = characters.length;
//         for (let i = 0; i < length; i++) {
//             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         }
//         return result;
//     }

