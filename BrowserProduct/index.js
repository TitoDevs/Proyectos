// AIzaSyDPpuhtX2FBcH2o0dMfcFthneAoiSO3jfU

document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.getElementById("dropArea");
    const searchButton = document.getElementById("searchButton");
    const resultsContainer = document.getElementById("resultsContainer");
    const apiKey = "AIzaSyDPpuhtX2FBcH2o0dMfcFthneAoiSO3jfU"; // Reemplaza con tu propia API key
    const cx = "74fc7e54ccb0d4fcb"; // Reemplaza con tu propio CX (ID de búsqueda personalizada)
  
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
  
    searchButton.addEventListener("click", function () {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        handleImageFile(file);
      });
      fileInput.click();
    });
  
    async function handleImageFile(file) {
      if (file) {
        const reader = new FileReader();
        reader.onload = async function (event) {
          const imageBase64 = event.target.result.split(",")[1];
          await searchSimilarImages(imageBase64);
        };
        reader.readAsDataURL(file);
      }
    }
  
    async function searchSimilarImages(imageBase64) {
      const encodedImage = encodeURIComponent(imageBase64);
      const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&searchType=image&q=*&fileType=jpg|png&imgType=photo&imgSize=medium&start=1&num=10&c2coff=1&hq=${encodedImage}`;
  
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          const items = data.items || [];
  
          const results = items.map((item) => {
            return {
              title: item.title,
              imageUrl: item.link,
            };
          });
  
          displayResults(results);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    function displayResults(results) {
      resultsContainer.innerHTML = "";
  
      if (results.length === 0) {
        resultsContainer.textContent = "No se encontraron resultados similares.";
        return;
      }
  
      const ul = document.createElement("ul");
      results.forEach((result) => {
        const li = document.createElement("li");
  
        const imgElement = document.createElement("img");
        imgElement.src = result.imageUrl;
        imgElement.style.maxWidth = "200px";
        imgElement.style.maxHeight = "200px";
  
        const titleElement = document.createElement("p");
        titleElement.textContent = result.title;
  
        li.appendChild(imgElement);
        li.appendChild(titleElement);
        ul.appendChild(li);
      });
  
      resultsContainer.appendChild(ul);
    }
  });
  