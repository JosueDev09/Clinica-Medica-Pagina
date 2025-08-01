import React from "react";

interface CardDemoProps {
  title: string;
  imageUrl: string;
  hoverImageUrl?: string;
}

const CardDemo: React.FC<CardDemoProps> = ({
  title,
  imageUrl,
  //hoverImageUrl = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
}) => {
  return (
    <div className="relative h-96 rounded-xl overflow-hidden shadow-xl group">
      {/* Imagen principal de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Imagen animada al hacer hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
         /// backgroundImage: `url(${hoverImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay glass oscuro al hover */}
      <div className="absolute inset-0 z-20 bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Contenido */}
      <div className="relative z-30 h-full flex items-end p-6 text-white">
        <h3 className="text-2xl font-semibold drop-shadow-lg">{title}</h3>
       <div className="relative bottom-5/12 right-28 z-30 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg animate-heartbeat hover:bg-blue-800 transition-all duration-300 shadow-lg">
          Agendar cita
        </button>
      </div>
      </div>
    </div>
  );
};

export default CardDemo;
