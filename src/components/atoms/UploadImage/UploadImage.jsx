import { useState } from 'react';
import Swal from 'sweetalert2';
import './UploadImage.scss';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle the change of the selected image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
      if (file.size <= maxSizeInBytes) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        // If the file size exceeds 2MB, display an error message to the user
        Swal.fire({
          icon: 'warning',
          title: 'Fotografía!',
          text: 'El tamaño de la foto debe ser máximo de 2MB.',
          confirmButtonColor: '#DF013A',
          confirmButtonText: 'Cerrar',
        })
        // Clear the selected image
        setSelectedImage(null);
        // Reset the input field to allow the user to select a new image
        event.target.value = null;
      }
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div className="upload--image">
      <input
        type="file"
        name="uploadImage"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageChange}
        required
      />
      {selectedImage && (
        <div className="upload--image__container">
          <h2>Imagen cargada con éxito ✅</h2>
          <img className="upload--image__file hidden" src={selectedImage} alt="Imagen seleccionada" />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
