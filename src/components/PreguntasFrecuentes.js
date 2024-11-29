import Accordion from "@/components/Accordion";

export default async function PreguntasFrecuentes() {

  
    const fetchProducts = async () => {
      try {
        const response = await fetch('http:localhost:3000/api/contentful?content_type=preguntaFrecuente');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } 
  };
  
  const questions = await fetchProducts();
  console.log(questions);

  return (
    <div className="w-2/3 mx-auto">
      {questions.length > 0 ? (
        <Accordion items={questions} />
      ) : (
        <p className="text-center text-gray-500">Cargando preguntas frecuentes...</p>
      )}
    </div>
  );
}