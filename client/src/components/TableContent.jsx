import React from 'react'

const TableContent = ({currentItems}) => {
  return (
    <section className="bg-zinc-100 h-[30rem] overflow-y-auto">
      <table className="px-2">
        <thead className="sticky top-0 bg-blue-500">
          <tr>
            <th className="py-4">ID</th>
            <th className="py-4">Title</th>
            <th className="py-4">Description</th>
            <th className="py-4">Price</th>
            <th className="py-4">Category</th>
            <th className="py-4">Sold</th>
            <th className="py-4">Image</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((transation) => (
            <tr key={transation.id} className="text-nowrap">
              <td >{transation.id}</td>
              <td >{transation.title}</td>
              <td>{transation.description}</td>
              <td>{transation.price}</td>
              <td>{transation.category}</td>
              <td className="text-nowrap">
                {transation.sold ? "sold" : "not sold"}
              </td>
              <td>
                <img src={transation.image} alt=""></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableContent;
