// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex justify-center space-x-8">
        <li><Link href="/">Início</Link></li>
        <li><Link href="#about">Quem é</Link></li>
        <li><Link href="#schedule">Cronograma</Link></li>
        <li><Link href="#socials">Redes Sociais</Link></li>
      </ul>
    </nav>
  );
}
