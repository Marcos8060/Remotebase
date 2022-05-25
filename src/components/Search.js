import React, { useState } from 'react'
import StudentList from './StudentList';


function Search() {

    const [name,setName] = useState('')
    const [ date,setDate] = useState('')
    const [people,setPeople] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()

        const person = { name, date}
        setPeople((people) =>(
          [...people, person]
        ))

        setName('')
        setDate('')
    }


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
     <StudentList people={people}/>
    </>
  )
}

export default Search