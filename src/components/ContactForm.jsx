import useFormContact from "../hooks/useFormContact";
import "../style/form.css";

const ContactForm = () => {
  const initialData = {
    name: "",
    username: "",
    telephone: "",
    email: "",
    comment: "",
  };

  const onValidate = (contact) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexTelephone = /^\d{10}$/;
   

    if (!contact.name.trim()) {
      errors.name = "El campo no debe ser vacio.";
    } else if (!regexName.test(contact.name)) {
      errors.name = "El campo solo acepta letras y espacios.";
    }

    if (!contact.username.trim()) {
      errors.username = "El campo no debe ser vacio.";
    } else if (!regexUsername.test(contact.username)) {
      errors.username = "El campo solo acepta letras y espacios.";
    }

    if (!contact.telephone.trim()) {
      errors.telephone = "El campo no debe ser vacio.";
    } else if (!regexTelephone.test(contact.telephone)) {
      errors.telephone = "El campo debe contener 10 numeros";
    }

    if (!contact.email.trim()) {
      errors.email = "El campo  no debe ser vacio.";
    } else if (!regexEmail.test(contact.email)) {
      errors.email = "El campo contiene un formato no valido.";
    }
    if (!contact.comment.trim()) {
      errors.comment = "El campo  no debe ser vacio.";
    }

    return errors;
  };

  const { contact, errors, handleChange, handleSubmit } = useFormContact(
    initialData,
    onValidate
  );

  return (
    <div className="container vw-100">
      <div className="row">
        <div className="col-7 mx-auto">
          <div class="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white text-center">
              Nuevo Contacto
            </div>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                  placeholder="nombre"
                />
                {errors.name && (
                  <div className="alert alert-danger p-1">{errors.name}</div>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="username"
                  value={contact.username}
                  onChange={handleChange}
                  placeholder="apellido"
                />
                {errors.username && (
                  <div className="alert alert-danger p-1">
                    {errors.username}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <div className="alert alert-danger p-1">{errors.email}</div>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  className="form-control form-control-lg"
                  name="telephone"
                  value={contact.telephone}
                  onChange={handleChange}
                  placeholder="telefono"
                />
                {errors.telephone && (
                  <div className="alert alert-danger p-1">
                    {errors.telephone}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label"></label>
                <textarea
                  className="form-control form-control-lg"
                  name="comment"
                  value={contact.comment}
                  onChange={handleChange}
                  placeholder="comentario"
                />
                {errors.comment && (
                  <div className="alert alert-danger p-1">{errors.comment}</div>
                )}
              </div>
              <div className="mb-2 mt-4">
                <button className="btn btn-outline-success w-100">
                  Guardar contacto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
