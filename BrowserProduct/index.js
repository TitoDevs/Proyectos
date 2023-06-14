// AIzaSyDPpuhtX2FBcH2o0dMfcFthneAoiSO3jfU
// b6f75bdd6edf14ad1

document.addEventListener("DOMContentLoaded", function () {
  const dropArea = document.getElementById("dropArea");
  const searchButton = document.getElementById("searchButton");
  const resultsContainer = document.getElementById("resultsContainer");
  const API_KEY = "AIzaSyDPpuhtX2FBcH2o0dMfcFthneAoiSO3jfU"; // Reemplaza "TU_API_KEY" con tu propia API key de Google Custom Search JSON API
  const cx = "b6f75bdd6edf14ad1"; // Reemplaza "TU_CX" con tu propio CX (ID de búsqueda personalizada)
  const SEARCH_ENDPOINT = 'https://www.googleapis.com/customsearch/v1';

  dropArea.addEventListener("dragover", function (event) {
    event.preventDefault();
    dropArea.classList.add("dragover");
  });

  dropArea.addEventListener("dragleave", function (event) {
    event.preventDefault();
    dropArea.classList.remove("dragover");
  });

  dropArea.addEventListener("drop", function (event) {
    event.preventDefault();
    dropArea.classList.remove("dragover");
    const file = event.dataTransfer.files[0];
    handleImageFile(file);
  });

  dropArea.addEventListener("click", function () {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      handleImageFile(file);
    });
    fileInput.click();
  });

  searchButton.addEventListener("click", function () {
    const imageElement = document.getElementById("imagePreview");
    const imageSrc = imageElement.src;
    buscarImagenesSimilares(imageSrc);
  });

  function handleImageFile(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageElement = document.getElementById("imagePreview");
      imageElement.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  function buscarImagenesSimilares(imagenURL) {
    const params = {
      key: API_KEY,
      cx: cx,
      searchType: 'image',
      imgType: 'photo',
      imgSize: 'medium',
      q: '',
      num: 10 // Número de resultados a obtener
    };

    const url = `${SEARCH_ENDPOINT}?${new URLSearchParams(params)}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: {
          source: {
            imageUri: imagenURL,
          },
        },
      }),
    })
      .then(response => response.json())
      .then(data => {
        const resultados = data.items;
        mostrarResultados(resultados);
      })
      .catch(error => {
        console.error('Error en la búsqueda:', error);
      });
  }

  function mostrarResultados(resultados) {
    resultsContainer.innerHTML = '';

    resultados.forEach(resultado => {
      const imagenURL = resultado.link;

      const imagenElemento = document.createElement('img');
      imagenElemento.src = imagenURL;

      resultsContainer.appendChild(imagenElemento);
    });
  }
});
