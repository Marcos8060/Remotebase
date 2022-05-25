import React, { useState } from 'react'

function Search() {
    const [name,setName] = useState('')
    const [ date,setDate] = useState('')
    const [students,setStudents] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()

        const student = { name , date};
        setStudents((students) =>(
            [...students, student]
        ))
    }
    console.log(students);

  return (
    <>
     <form>
         <label htmlFor="name">Name</label>
         <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" />
         <label htmlFor="name">Date</label>
         <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date" />
         <button onClick={handleSubmit}>Submit</button>
     </form>

     <div>
         <p>{name}</p>
     </div>
    </>
  )
}

export default Search