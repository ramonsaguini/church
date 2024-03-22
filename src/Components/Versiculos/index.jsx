import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VersiculoRotativo() {
  const [versiculo, setVersiculo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVersiculo() {
      try {
        const response = await axios.get('https://labs.bible.org/api/?passage=random&type=json');
        const versiculoEmIngles = response.data[0];
        const versiculoTraduzido = await traduzirVersiculo(versiculoEmIngles.text);
        
        setVersiculo({
          bookname: versiculoEmIngles.bookname,
          chapter: versiculoEmIngles.chapter,
          verse: versiculoEmIngles.verse,
          text: versiculoTraduzido
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar o versículo:', error);
        setLoading(false);
      }
    }

    fetchVersiculo();
  }, []);

  async function traduzirVersiculo(textoEmIngles) {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: textoEmIngles,
            target: 'pt', // Define o idioma de destino como português
            key: '' // Substitua pela sua chave da API do Google Translate
          }
        }
      );
      
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Erro ao traduzir o versículo:', error);
      return textoEmIngles;
    }
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {versiculo && (
        <div>
          <h2>{versiculo.bookname} {versiculo.chapter}:{versiculo.verse}</h2>
          <p>{versiculo.text}</p>
        </div>
      )}
    </div>
  );
}

export default VersiculoRotativo;
