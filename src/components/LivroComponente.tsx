import type { Livro } from '../types/Livro';


interface LivroProps {
  livro: Livro;
  aoRemover: (id: string | number) => void;
}

export default function LivroComponent({ livro, aoRemover }: LivroProps) {
  return (
    <div className="bg-purple-100 border-purple-300 rounded-xl p-5 flex flex-col gap-2 max-w-[200px] ">
      <h3 className="text-xl font-serif font-bold text-purple-900 flex items-center gap-2 mb-1">
        {livro.titulo}
      </h3>
      <span>Autor:</span> {livro.autor}
      <span>Ano de Publicação:</span> {livro.anoPublicacao}
      <span>Gênero:</span> {livro.genero}
      {livro.resumo && (
        <div className="italic text-purple-700 max-h-24 overflow-y-auto pr-2 border border-purple-100 rounded bg-purple-50">
          <span className="font-semibold not-italic">Resumo:</span>
          <span className="block">{livro.resumo}</span>
        </div>
      )}
      <button
        className="mt-auto self-end bg-green-700 text-white font-bold py-1 px-4 rounded shadow transition-colors duration-200"
        onClick={() => { if (livro._id !== undefined) aoRemover(livro._id); }}
      >
        Remover
      </button>
    </div>
  );
}
