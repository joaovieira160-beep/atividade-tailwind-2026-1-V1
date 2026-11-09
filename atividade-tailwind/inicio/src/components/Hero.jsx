// EXERCÍCIO 3: seção hero
export default function Hero() {
  return (
    <section id="inicio"
    className="bg-linear-to-br from-amber-100 to-orenge-200 py-20 md: py-32 px-4 text-center">
      <h1
      className="text-4xl md:text6x1 font-extrabold text-stone-900">O café que abraça a sua manhã</h1>
      <p
      className="mt-4 text-lg max-w-2x1 mx-auto stone-700">
        Grãos selecionados de pequenos produtores, torrados artesanalmente e
        servidos com carinho desde 2010.
      </p>
      <div
      className="mt-8 flex flex-col sm:flex-row justify-center gap-4 ">
        <a className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-700 active:scale-95 transition " href="#cardapio">Ver cardápio</a>
        <a className="amber-600 amber-700 px-6 py-3 rounded-full hover:bg-amber-600 hover:text-white" href="#sobre">Nossa história</a>
      </div>
    </section>
  )
}
