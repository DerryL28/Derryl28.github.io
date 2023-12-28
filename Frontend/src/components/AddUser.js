import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [nim, setNim] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [instagram, setInstagram] = useState("");
  const [zip, setZip] = useState("");
  const [nomerhp, setNomerhp] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
        nim,
        nomerhp,
        alamat,
        kota,
        instagram,
        zip
      });
      navigate("/uas");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form class="row g-3" onSubmit={saveUser}>
          <div class="col-md-2">
            <label for="inputNim" class="form-label">NIM</label>
            <input 
              type="text" 
              class="form-control" 
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              placeholder="NIM"/>
          </div>
          <div class="col-md-6">
            <label for="inputName" class="form-label">Name</label>
            <input 
              type="text" 
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name" />
          </div>

          <div class="col-md-3">
            <label for="inputEmail" class="form-label">Email</label>
            <input 
            type="text" 
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email"/>
          </div>

          <div class="col-md-6">
            <label for="inputAlamat" class="form-label">Alamat</label>
              <input
              type="text"
              class="form-control"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)} 
              placeholder="Apartment, studio, or Kost"
            />
          </div>

          <div class="col-md-2">
            <label for="inputKota" class="form-label">Kota</label>
            <input type="text" 
              class="form-control"              
              value={kota}
              onChange={(e) => setKota(e.target.value)} 
              placeholder="Kota" />
          </div>

          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" 
            value={zip}
            onChange={(e) => setZip(e.target.value)} 
            id="inputZip" placeholder="Zip"/>
          </div>
          <div class="col-md-3">
            <label for="inputNomerHp"class="form-label">Nomer Hp</label>
            <input 
            type="text" 
            class="form-control"
            value={nomerhp}
            onChange={(e) => setNomerhp(e.target.value)}
            placeholder="NomerHp"/>
          </div>

          <div class="col-auto">
            <label for="inputInstagram" class="form-label">Instagram</label>
            <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
            <div class="input-group">
            <div class="input-group-text">@</div>
              <input
                type="text" 
                class="form-control"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)} 
                placeholder="Username"
              />
            </div>
          </div>

          <div class="col-md-4">
            <label for="inputState" class="form-label">Gender</label>
            <select class="form-select" value={gender}
              onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div class="col-12">
            <button type="update"  class="btn btn-primary">
              Update
            </button>
          </div>
        </form>      
      </div>
    </div>
  );
};

export default AddUser;
