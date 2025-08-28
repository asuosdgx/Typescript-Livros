import { useState} from "react";
import type { Livro } from "../types/Livro";

type Props = {
  aoEnviar : (livro: Livro) => void;
};

export default function Formulario({ aoEnviar }: Props ) {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [anoPublicacao, setAnoPublicacao] = useState('');
    const [genero, setGenero] = useState('');
    const [resumo, setResumo] = useState('');
    
    const enviar = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!titulo.trim() || !autor.trim() || !anoPublicacao.trim() || !genero.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      aoEnviar({ titulo, autor, anoPublicacao: Number(anoPublicacao), genero, resumo });
      setTitulo('');
      setAutor('');
      setAnoPublicacao('');
      setGenero('');
      setResumo('');
    };

    return (
      <div className="bg-white border-2 border-purple-300 rounded-xl  p-8 mb-8  max-w-lg ">
        <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          <span className="text-3xl"></span> Adicionar Livro
        </h2>
        <form onSubmit={enviar} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="titulo" className="font-semibold text-purple-800 mb-1">Título:</label>
            <input 
              type="text" 
              id="titulo" 
              name="titulo"
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)}
              className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-purple-50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="autor" className="font-semibold text-purple-800 mb-1">Autor:</label>
            <input 
              type="text" 
              id="autor" 
              name="autor" 
              value={autor} 
              onChange={(e) => setAutor(e.target.value)}
              className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-purple-50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="anoPublicacao" className="font-semibold text-purple-800 mb-1">Ano de Publicação:</label>
            <input 
              type="number" 
              id="anoPublicacao" 
              name="anoPublicacao" 
              value={anoPublicacao} 
              onChange={(e) => setAnoPublicacao(e.target.value)}
              className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-purple-50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="genero" className="font-semibold text-purple-800 mb-1">Gênero:</label>
            <input 
              type="text" 
              id="genero" 
              name="genero"
              value={genero} 
              onChange={(e) => setGenero(e.target.value)}
              className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-purple-50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="resumo" className="font-semibold text-purple-800 mb-1">Resumo:</label>
            <textarea 
              id="resumo" 
              name="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-purple-50 min-h-[60px]"
            ></textarea>
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 duration-200 text-white font-bold py-2 px-6 rounded mt-2">
            Salvar
          </button>
        </form>
      </div>
    );
}
