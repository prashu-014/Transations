import React from 'react'

const TableContent = ({currentItems}) => {
  return (
    <section className="bg-yellow-300 p-4 overflow-auto"  >
    <table className='overflow-x-auto'>
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Category</th>
        <th>Sold</th>
        <th>Image</th>
      </tr>
      </thead>

      <tbody>
      {currentItems.map((transation) => (
        <tr key={transation.id} className='text-nowrap'>
          <td>{transation.id}</td>
          <td className='text-ellipsis'>{transation.title}</td>
          <td >{transation.description}</td>
          <td>{transation.price}</td>
          <td>{transation.category}</td>
          <td className="text-nowrap">{transation.sold ? "sold" : "not sold"}</td>
          <td><img src={transation.image} alt=""  ></img></td>
        
        </tr>
      ))}  
      </tbody>
    </table>
  </section>
  )
}

export default TableContent