'use client';

import Accordion from "@/components/Accordion";
import { useEffect, useState } from "react";

export default function PreguntasFrecuentes() {
  const [accordionItems, setAccordionItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/contentful?content_type=preguntaFrecuente');
        const data = await response.json();
        setAccordionItems(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } 
    };

    fetchProducts();
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
