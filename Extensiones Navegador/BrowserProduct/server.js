const express = require('express');
const fetch = require('node-fetch');
const app = express();
const API_KEY = 'AIzaSyDPpuhtX2FBcH2o0dMfcFthneAoiSO3jfU'; // Reemplaza con tu clave de API de búsqueda de Google
const CX = 'b6f75bdd6edf14ad1'; // Reemplaza con tu ID de búsqueda personalizada (CX)

app.use(express.json());

app.post('/search', async (req, res) => {
  try {
    const { imageSrc } = req.body;

    const searchParams = new URLSearchParams({
      key: API_KEY,
      cx: CX,
      searchType: 'image',
      imgType: 'photo',
      imgSize: 'medium',
      q: '',
      num: 10,
    });

    const searchUrl = `https://www.googleapis.com/customsearch/v1?${searchParams}`;

    const response = await fetch(searchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: {
          source: {
            imageUri: imageSrc,
          },
        },
      }),
    });

    const data = await response.json();

    res.json(data.items);
  } catch (error) {
    console.error('Error en la búsqueda:', error);
    res.status(500).json({ error: 'Error en la búsqueda' });
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
