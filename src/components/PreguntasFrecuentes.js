'use client';

import Accordion from "@/components/Accordion";
import { useEffect, useState } from "react";
import client from "@/utils/contenfulClient";

export default function PreguntasFrecuentes() {
  const [accordionItems, setAccordionItems] = useState([]);

  // Función para obtener las preguntas frecuentes desde Contentful
  const fetchPreguntasFrecuentes = async () => {
    try {
      const response = await client.getEntries({
        content_type: "preguntaFrecuente", // ID del content type en Contentful
        select: "fields.pregunta,fields.respuesta", // Selecciona solo los campos relevantes
      });

      // Mapear los datos a un formato adecuado para los accordionItems
      const items = response.items.map((item) => ({
        title: item.fields.pregunta,
        content: item.fields.respuesta,
      }));

      setAccordionItems(items);
    } catch (error) {
      console.error("Error al obtener las preguntas frecuentes:", error);
    }
  };

  // Llamar a la función de fetch al montar el componente
  useEffect(() => {
    fetchPreguntasFrecuentes();
  }, []);

  return (
    <div className="w-2/3 mx-auto">
      {accordionItems.length > 0 ? (
        <Accordion items={accordionItems} />
      ) : (
        <p className="text-center text-gray-500">Cargando preguntas frecuentes...</p>
      )}
    </div>
  );
}
