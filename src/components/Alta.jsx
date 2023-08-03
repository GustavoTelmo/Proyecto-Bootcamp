import React, { useState } from "react";
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "../elements/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "../elements/Input";
import "../style/alta.css";

const Alta = () => {
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [precio, cambiarPrecio] = useState({ campo: "", valido: null });
  const [stock, cambiarStock] = useState({ campo: "", valido: null });
  const [marca, cambiarMarca] = useState({ campo: "", valido: null });
  const [categoria, cambiarCategoria] = useState({ campo: "", valido: null });
  const [descripcion, cambiarDescripcion] = useState({
    campo: "",
    valido: null,
  });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,10}$/, // Letras y espacios, pueden llevar acentos.
    precio: /^\d{1,20}$/, // de 1 a 20 numeros.
    stock: /^\d{1,20}$/, // de 1 a 20 numeros.
    marca: /^[a-zA-ZÀ-ÿ\s]{4,10}$/, // Letras y espacios, pueden llevar acentos.
    categoria: /^[a-zA-ZÀ-ÿ\s]{4,15}$/, // Letras y espacios, pueden llevar acentos.
    descripcion: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valido === "true" &&
      precio.valido === "true" &&
      stock.valido === "true" &&
      marca.valido === "true" &&
      categoria.valido === "true" &&
      descripcion.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarNombre({ campo: "", valido: "" });
      cambiarPrecio({ campo: "", valido: null });
      cambiarStock({ campo: "", valido: null });
      cambiarMarca({ campo: "", valido: null });
      cambiarCategoria({ campo: "", valido: null });
      cambiarDescripcion({ campo: "", valido: null });
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <main>
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="nombre"
          placeholder="nombre"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={precio}
          cambiarEstado={cambiarPrecio}
          tipo="text"
          label="precio"
          placeholder="precio"
          name="precio"
          leyendaError="El campo no puede estar vacio y debe contener numeros"
          expresionRegular={expresiones.precio}
        />
        <Input
          estado={stock}
          cambiarEstado={cambiarStock}
          tipo="text"
          label="stock"
          name="stock"
          leyendaError="El campo no puede estar vacio y debe contener numeros"
          expresionRegular={expresiones.stock}
        />
        <Input
          estado={marca}
          cambiarEstado={cambiarMarca}
          tipo="text"
          label="marca"
          name="marca"
          leyendaError="El campo no puede estar vacio y debe contener letras"
          expresionRegular={expresiones.marca}
        />
        <Input
          estado={categoria}
          cambiarEstado={cambiarCategoria}
          tipo="text"
          label="categoria"
          placeholder="categoria"
          name="categoria"
          leyendaError="El campo no puede estar vacio y debe contener letras"
          expresionRegular={expresiones.categoria}
        />
        <Input
          estado={descripcion}
          cambiarEstado={cambiarDescripcion}
          tipo="text"
          label="descripcion"
          placeholder="descripcion"
          name="descripcion"
          leyendaError="El campo no puede estar vacio"
          expresionRegular={expresiones.descripcion}
        />

        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && (
            <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};

export default Alta;
