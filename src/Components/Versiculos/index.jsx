import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VersiculoRotativo() {
  const [versiculo, setVersiculo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVersiculo() {
      try {
        const response = await axios.get('https://labs.bible.org/api/?passage=random&type=json');
        setVersiculo(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar o versículo:', error);
        setLoading(false);
      }
    }

    fetchVersiculo();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {versiculo && (
        <div>
          <h2>{versiculo[0].bookname} {versiculo[0].chapter}:{versiculo[0].verse}</h2>
          <p>{versiculo[0].text}</p>
        </div>
      )}
    </div>
  );
}

export default VersiculoRotativo;
