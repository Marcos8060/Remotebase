import React,{useState} from 'react'

function StudentList({ people }) {
  return (
    <>
    {people.map((student) =>(
       <div key={student.id}>
        <p>{ student.name }</p>
       </div>
    ))}
    </>
  )
}

export default StudentList