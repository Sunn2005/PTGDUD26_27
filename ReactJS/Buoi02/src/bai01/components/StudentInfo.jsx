import React from 'react'

const StudentInfo = ({name, mssv, lop}) => {
  return (
    <div>
        <p>Họ tên: {name}</p>
        <p>MSSV: {mssv}</p>
        <p>Lớp: {lop}</p>
    </div>
  )
}

export default StudentInfo