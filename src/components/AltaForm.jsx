import useFormAlta from "../hooks/useFormAlta";
import "../style/form.css";

const AltaForm = () => {
  const initialData = {
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    quantity: "",
  };

  const onValidate = (product) => {
    let errors = {};
    let regexId = /^\d{1,5}$/;
    let regexTitle = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPrice = /^\d{1,100}$/;
    let regexQuantity = /^\d{1}$/;

    if (!product.id.trim()) {
      errors.id = "El campo no debe ser vacio.";
    } else if (!regexId.test(product.id)) {
      errors.id = "El campo solo acepta numeros";
    }

    if (!product.title.trim()) {
      errors.title = "El campo no debe ser vacio.";
    } else if (!regexTitle.test(product.title)) {
      errors.title = "El campo solo acepta letras y espacios.";
    }

    if (!product.price.trim()) {
      errors.price = "El campo no debe ser vacio.";
    } else if (!regexPrice.test(product.price)) {
      errors.price = "El campo debe contener numeros";
    }

    if (!product.description.trim()) {
      errors.description = "El campo  no debe ser vacio.";
    } 
    if (!product.image.trim()) {
      errors.image = "El campo  no debe ser vacio.";
    }
    if (!product.quantity.trim()) {
      errors.quantity = "El campo  no debe ser vacio.";
    } else if (!regexQuantity.test(product.quantity)) {
      errors.quantity = "El campo debe contener numeros";
    }

    return errors;
  };

  const { product, errors, handleChange, handleSubmit } = useFormAlta(
    initialData,
    onValidate
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-7 mx-auto">
          <div class="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white text-center">
              Nuevo Producto
            </div>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  className="form-control form-control-lg"
                  name="id"
                  value={product.id}
                  onChange={handleChange}
                  placeholder="introduzca un numero id"
                />
                {errors.id && (
                  <div className="alert alert-danger p-1">{errors.id}</div>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  placeholder="introduzca un titulo"
                />
                {errors.title && (
                  <div className="alert alert-danger p-1">{errors.title}</div>
                )}
              </div>
              <div className="mb-2">
                <input
                  className="form-control form-control-lg"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="introduzca un precio"
                />
                {errors.price && (
                  <div className="alert alert-danger p-1">{errors.price}</div>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="introduzca una descripcion"
                />
                {errors.description && (
                  <div className="alert alert-danger p-1">
                    {errors.description}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  placeholder="ingrese url del producto"
                />
                {errors.image && (
                  <div className="alert alert-danger p-1">{errors.image}</div>
                )}
              </div>
              <div className="mb-2">
                <input
                  className="form-control form-control-lg"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  placeholder="ingrese una cantidad"
                />
                {errors.quantity && (
                  <div className="alert alert-danger p-1">
                    {errors.quantity}
                  </div>
                )}
              </div>
              <div className="mb-2 mt-4">
                <button className="btn btn-outline-success w-100">
                  Crear Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default AltaForm;
