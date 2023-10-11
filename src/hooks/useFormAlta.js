import { useState } from 'react'

const useFormAlta = (initialData, onValidate) => {
  const [product, setProduct] = useState(initialData)
  const [errors, setErros] = useState({})
  

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const err = onValidate(product)
    setErros(err)

    if (Object.keys(err).length === 0) {
      alert('El producto se a creado con exito')
      fetch(`http://localhost:8000/api/cards`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(product)
     
      })
        .then(response => response.json())
         setProduct({ id: "", title: "", price: "", description: "", image: "", quantity: ""});
    }
   
  }

  return { product, errors, handleChange, handleSubmit }
}

export default useFormAlta;