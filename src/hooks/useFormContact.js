import { useState } from 'react'

const useFormContact = (initialData, onValidate) => {
  const [contact, setContact] = useState(initialData)
  const [errors, setErros] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const err = onValidate(contact)
    setErros(err)

    if (Object.keys(err).length === 0) {
      alert('Formulario enviado con exito')
      fetch(`http://localhost:8000/api/contact`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(contact)
      })
        .then(response => response.json())
        setContact({ name: "", username: "", email: "", telephone: "", comment: "" });
    }
   
  }

  return { contact, errors, handleChange, handleSubmit }
}

export default useFormContact;