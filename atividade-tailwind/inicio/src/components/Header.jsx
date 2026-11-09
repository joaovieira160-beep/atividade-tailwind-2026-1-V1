const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <nav className="max-w-6x1 mx-auto px-4 py-4 flex justify-between items-center">
        <a className=" text-2xl font-bold bg-amber-700" href="#">☕ Grão Dourado</a>
        <ul className=" flex  gap-6 hidden md:flex">
          {links.map((link) => (
            <li  key={link.href}>
              <a className="font-medium amber-700 transition-colors" href={link.href}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
