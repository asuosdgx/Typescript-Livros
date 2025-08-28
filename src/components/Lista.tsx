import type { Livro } from '../types/Livro';
import LivroComponente from './LivroComponente';

type Props = {
  livros: Livro[];
  aoRemover: (id: string | number) => void;
};

export default function Lista({ livros, aoRemover }: Props) {
    if (livros.length === 0) {
        return <p className='text-2xl text-yellow-900'>Nenhum livro encontrado.</p>;
    }

    return (
      <div className="bg-white p-6 rounded-xl mt-4 mb-4 border border-green-200">
        <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          <span className="text-3xl"></span> Lista de Livros
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {livros.map((livro) => (
            <LivroComponente key={livro._id} livro={livro} aoRemover={aoRemover} />
          ))}
        </div>
      </div>
    );
}
