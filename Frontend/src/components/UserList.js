import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="col">
      <a class="btn btn-primary" href="/uas/add" role="button">Add New</a>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">NIM</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Alamat</th>
              <th scope="col">Kota</th>
              <th scope="col">Zip</th>
              <th scope="col">No HP</th>
              <th scope="col">Instagram</th>
              <th scope="col">Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.nim}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.alamat}</td>
                <td>{user.kota}</td>
                <td>{user.zip}</td>
                <td>{user.nomerhp}</td>
                <td>{user.instagram}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    type="button" class="btn btn-success"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    type="button" class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
