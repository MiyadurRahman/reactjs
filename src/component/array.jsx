export default function UserItem({ name }){
    return <li> name: {name}</li>
}

export function Users(){
  const users = [
    { id: 1, name: "miyad", dep: "cse" },
    { id: 2, name: "siam", dep: "EEE" },
    { id: 3, name: "ratul", dep: "pharmacy" }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>name: {user.name} - department: {user.dep}</li>
      ))}
    </ul>
  );
}
