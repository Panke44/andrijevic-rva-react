import { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [oznakaPS, setOznaka] = useState("");
  const [nazivNV, setNaziv] = useState("");
  const [region, setRegion] = useState("");
  const [mail, setMail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!oznakaPS) {
      alert("Please add a task");
      return;
    }

    onAdd({ oznakaPS, nazivNV, region, mail });

    setOznaka("");
    setNaziv("");
    setRegion("");
    setMail("");
  };

  return (
    <form className="container w-25 text-center">
      <div className="form-control d-flex justify-content-between align-items-center my-2">
        <label>Dodaj oznaku: </label>
        <input
          type="text"
          placeholder="Dodaj oznaku"
          value={oznakaPS}
          onChange={(e) => setOznaka(e.target.value)}
        />
      </div>
      <div className="form-control d-flex justify-content-between align-items-center  my-2">
        <label>Dodaj naziv: </label>
        <input
          type="text"
          placeholder="Dodaj naziv"
          value={nazivNV}
          onChange={(e) => setNaziv(e.target.value)}
        />
      </div>
      <div className="form-control d-flex justify-content-between align-items-center  my-2">
        <label>Dodaj region: </label>
        <input
          type="text"
          placeholder="Dodaj region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <div className="form-control d-flex justify-content-between align-items-center  my-2">
        <label>Dodaj mail: </label>
        <input
          type="mail"
          placeholder="Dodaj mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>

      <input type="button" value="Sacuvaj" onClick={onSubmit} className="btn btn-success px-5" />
    </form>
  );
};

export default AddItem;