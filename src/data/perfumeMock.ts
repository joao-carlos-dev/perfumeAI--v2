import logo from '../img/logo.png'

// Definimos a "forma" que todo perfume deve ter
export interface Perfume {
  name: string;
  brand: string;
  description: string;
  tags: string[];
  matchPercent: number;
  image: string;
  highlightNote: string;
  themeColor: string;
}

// Usamos a interface para garantir que os dados estão corretos
export const perfumeData: Perfume = {
  name: "Yara",
  brand: "Lattafa",
  description: "Doce, cremoso e atalcado. Lembra milkshake de morango e marshmallow - orquidea, heliotropio, frutas e baunilha. Suave, reconfortante e muito feminino.",
  tags: ["🍓 Morango", "🍒 Frutas Vermelhas", "🍦Baunilha", "🌸 Heliotropio", "🌼 Jasmim"],
  matchPercent: 31,
  image: logo, 
  highlightNote: "Heliotrópio",
  themeColor: "#db2777"
};