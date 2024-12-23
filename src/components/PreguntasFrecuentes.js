'use client';

import Accordion from "@/components/Accordion";
import { useEffect, useState } from "react";
import { performRequest } from "@/lib/datocms";

export default function PreguntasFrecuentes() {
  const [accordionItems, setAccordionItems] = useState([]);
  
    const query = `
    query {
      allPreguntaFrecuentes {
        pregunta
        respuesta
      }
    }
  `;
  
    useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await performRequest(query);
        console.log('Respuesta completa:', response); // Verifica el resultado de performRequest
        // Directamente verifica si la propiedad preguntaFrecuente existe
        if (response && response.allPreguntaFrecuentes) {
          setAccordionItems(response.allPreguntaFrecuentes); // Establece los datos correctamente
        } else {
          console.error('No se encontraron datos en la respuesta:', response);
        }
      } catch (error) {
        console.error('Error al obtener contenido de la página:', error);
      }
    };
  
    fetchPageContent();
  }, []);


  return (
    <div className="w-2/3 mx-auto">
      {accordionItems.length > 0 ? (
        <Accordion items={accordionItems} />
      ) : (
        <p className="text-center text-gray-500">No hay preguntas frecuentes</p>
      )}
    </div>
  );
}