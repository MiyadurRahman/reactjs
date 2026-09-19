// 
//&& only true will show
// export default function Todo3({task2,isdone}){
// return isdone &&  <li>Done: {task2} </li>
// // 

//  ||only false will show
export default function Todo3({task2,isdone}){
return isdone ||  <li> not Done: {task2} </li>
}
