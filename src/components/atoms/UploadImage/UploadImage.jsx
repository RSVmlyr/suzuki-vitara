import { useState } from 'react';
import './UploadImage.scss'

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para manejar el cambio de la imagen seleccionada
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <h2>Imagen seleccionada:</h2>
          <img src={selectedImage} alt="Imagen seleccionada" />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
