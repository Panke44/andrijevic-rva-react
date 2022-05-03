import { useState } from "react"

function Table({ data, onDelete, onAdd }) {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <input type="text" placeholder="pretrazi tabelu" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={onAdd} className="btn btn-success"> dodaj podatak </button>
      </div>
      <table className="table table-striped table-success">
        <thead>
          <th> Oznaka </th>
          <th> Naziv </th>
          <th> Region </th>
          <th> Mail </th>
        </thead>

        <tbody>
          {data.filter((data) => {
            if (!value) return true;
            if (
              data.oznakaPS.toString().includes(value) ||
              data.nazivNV.includes(value)
            ) {
              return true;
            }
          })
            .map((el) =>
            (<tr key={el.id}>
              <td>{el.oznakaPS}</td>
              <td>{el.nazivNV}</td>
              <td>{el.region}</td>
              <td>{el.mail}</td>
              <td><button className="btn btn-danger" onClick={()=> onDelete(el)}> obriši </button></td>
            </tr>)
            )}
        </tbody>
      </table>

    </div>
  )
}

export default Table