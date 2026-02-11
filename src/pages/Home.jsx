import produtos from "@/data/produtos.json";
import Apresentacao from "@/components/home/Apresentacao";
import Sobre from "@/components/home/Sobre";
import ProdutosDestaque from "@/components/home/ProdutosDestaque";
import EntreEmContato from "@/components/home/EntreEmContato";

export default function Home() {
  const produtosEmDestaque = produtos.filter(p => p.featured);

  return (
    <main>
      <Apresentacao />
      <Sobre />
      <ProdutosDestaque produtos={produtosEmDestaque} />
      <EntreEmContato />
    </main>
  );
}
