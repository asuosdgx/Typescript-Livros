import type { Livro } from "./types/Livro";
import Formulario from "./components/Formulario";
import axios from "axios";
import { useState, useEffect } from "react";
import Lista from "./components/Lista";

const API_URL =
  "https://crudcrud.com/api/9e7d51110b4e458ab6df6d6fcd7909a4/livros";

function App() {
  const [livros, setLivros] = useState<Livro[]>([]);

  const adicionarLivro = (livro: Livro) => {
    axios
      .post<Livro>(API_URL, livro)
      .then((res) => setLivros((prev) => [...prev, res.data]))
      .catch((err) => console.error(err));
  };
  const removerLivro = (id: string | number) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setLivros((prev) => prev.filter((livro) => livro._id !== id)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    axios
      .get<Livro[]>(API_URL)
      .then((res) => setLivros(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <header className="py-10 bg-purple-900 mb-8">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-5xl font-sans font-bold text-white mb-2 ">Minha Biblioteca</h1>
          <p className="text-2xl text-purple-100">Gerencie sua coleção de livros favoritos!</p>
        </div>
      </header>
      <main className="container mx-auto flex gap-8 px-4 w-full">
        <section className="w-full mb-6 md:mb-0">
          <Formulario aoEnviar={adicionarLivro} />
        </section>
        <section className="md:w-2/3 w-full">
          <Lista livros={livros} aoRemover={removerLivro} />
        </section>
      </main>
      
    </div>
  );
}

export default App;
