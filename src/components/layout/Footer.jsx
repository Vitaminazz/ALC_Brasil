import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
                <img
                  src="/ALC_LOGO.svg"
                  alt="Logo ALC"
                  className="w-20 h-20 object-fit"
                />
              <div className="font-black text-2xl">
                <span className="text-[#159633]">ALC</span>
                <span className="text-white"> BRASIL</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Engenharia aplicada ao agronegócio. Desenvolvemos sistemas
              hidráulicos, eletropneumáticos e componentes agrícolas com
              precisão técnica e inovação.{" "}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#159633] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#159633] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#159633] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Navegação</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Produtos ALC", href: "/produtos" },
                { label: "Clientes & Fornecedores", href: "/parceiros" },
                { label: "Saints Soldas", href: "/saints-soldas" },
                { label: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href} // DIRETO
                    className="text-gray-400 hover:text-[#159633] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Produtos</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Cilindros Hidráulicos</li>
              <li className="text-gray-400">Mancais MTS</li>
              <li className="text-gray-400">Cubos Agrícolas</li>
              <li className="text-gray-400">Projetos Customizados</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#159633] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Rua Ernesto Victorio Geraldo, 160
                  <br />
                  Matão - SP, CEP 15991-414
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#159633] flex-shrink-0" />
                <a
                  href="tel:+551633821615"
                  className="text-gray-400 hover:text-[#159633] transition-colors"
                >
                  (16) 99632-1766
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#159633] flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:ppcp@alcbrasil.com.br"
                    className="text-gray-400 hover:text-[#159633] transition-colors"
                  >
                    ppcp@alcbrasil.com.br
                  </a>
                  <a
                    href="mailto:financeiro@alcbrasil.com.br"
                    className="text-gray-400 hover:text-[#159633] transition-colors"
                  >
                    financeiro@alcbrasil.com.br
                  </a>
                  <a
                    href="mailto:projetos@alcbrasil.com.br"
                    className="text-gray-400 hover:text-[#159633] transition-colors"
                  >
                    projetos@alcbrasil.com.br
                  </a>
                  <a
                    href="mailto:vendas@alcbrasil.com.br"
                    className="text-gray-400 hover:text-[#159633] transition-colors"
                  >
                    vendas@alcbrasil.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ALC Brasil. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Revenda autorizada Saints Soldas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
