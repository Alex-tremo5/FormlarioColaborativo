import React, { useState } from "react";
import Alert from "./Alert";
// import { faL } from "@fortawesome/free-solid-svg-icons";

const Formulario = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [passwordSame, setPasswordSame] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const cambios = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validarInfo = (e) => {
    e.preventDefault();
    if (
      data.nombre === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirmarPassword === ""
    ) {
      setError(true);
      setSuccess(false);
      return;
    }
    setError(false);

    if (data.password !== data.confirmarPassword) {
      setPasswordSame(false);
      setSuccess(false);
      return;
    }
    setPasswordSame(true);
    setSuccess(true)
    
    console.log(data);
  };

  return (
    <div className="container">
      <h4 className="m-2">O usa tu email para registrarte</h4>
      <form className="formulario" onSubmit={validarInfo}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Ingresa tu nombre"
            name="nombre"
            value={data.nombre}
            onChange={cambios}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            aria-describedby="emailHelp"
            placeholder="tucorreo@tucorreo.com"
            name="email"
            value={data.email}
            onChange={cambios}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Ingresa tu contraseña"
            name="password"
            value={data.password}
            onChange={cambios}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword1"
            placeholder="Confirma tu contraseña"
            name="confirmarPassword"
            value={data.confirmarPassword}
            onChange={cambios}
          />
          {!passwordSame && (
            <Alert isError={true} message="Las contraseñas no coinciden" />
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
        {error && (
          <Alert isError={true} message="Debe completar los campos" />
        )}
        {success && (
          <Alert isError={false} message="Registro exitoso" />
        )}
      </form>
    </div>
  );
};

export default Formulario;