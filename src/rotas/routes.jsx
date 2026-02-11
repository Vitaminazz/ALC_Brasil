import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "@/layout/Layout";
import RolagemTopo from "@/components/RolagemTopo";

import Home from "@/pages/Home";
import Produtos from "@/pages/Produtos";
import ProdutosDetalhes from "@/components/ui/ProdutosDetalhes";
import Parceiros from "@/pages/Parceiros";
import Contato from "@/pages/Contato";
import SaintsSoldas from "@/pages/SaintsSoldas";

import CilindrosHidraulicos from "@/pages/produtosEspeciais/CilindrosPage";
import ProjetosCustomizados from "@/pages/produtosEspeciais/ProjetosCustomizados"

import Obrigado from "@/pages/Obrigado";


function RotasComChave() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<ProdutosDetalhes />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/saints-soldas" element={<SaintsSoldas />} />
          <Route path="/cilindros-hidraulicos" element={<CilindrosHidraulicos />} />
          <Route path="/projetos-customizados" element={<ProjetosCustomizados />} />
          <Route path="/obrigado" element={<Obrigado />} />
        </Route>
      </Routes>
  );
}

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <RolagemTopo />
      <RotasComChave />
    </BrowserRouter>
  )
}
