

const Unserlist = () => {
  const users = [
          {id:  1 , name: "priyam"  , age: 22 },
          {id:  2 , name:  "Alice"  , age: 24 },
          {id:  3 , name:   "john"  , age : 20 }
        ];
  return (
    <div>
        {users.map((user)=> ( 
          <div key = {user.id}>

            <h2>Name:{user.name}</h2>
            <h2>Age:{user.age}</h2>


          </div>
        ))}
    </div>
  )
}

export default Unserlist;