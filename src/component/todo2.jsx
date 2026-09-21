//doing some conditonal thing

export default function TOdo2({task1,IsDone}){
if(IsDone=== true){
    return <li>Done:{task1}</li>
}
else{
    return <li>do it: {task1}</li>
}
}