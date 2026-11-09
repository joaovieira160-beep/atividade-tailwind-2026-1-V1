// EXERCÍCIO 6: formulário de contato
export default function Contato() {
  function handleSubmit(evento) {
    evento.preventDefault()
    alert('Mensagem enviada! (de mentirinha)')
  }

  return (
    <section
    className="max-w-xl mx-auto px-4 py-16" id="contato">
      <form 
      className="bg-white p-8 rounded-2xl shadow-lg space-y-5" onSubmit={handleSubmit}>
        <h2
        className="text-2xl font-bold text-center">Fale com a gente</h2>
        <div>
          <label
          className="block text-sm font-medium mb-1" htmlFor="nome">Nome</label>
          <input
          className="w-full border border-stone-300 rounded-lg px-4 py-2" type="text" id="nome" placeholder="Seu nome" />
        </div>
        <div>
          <label
          className="block text-sm font-medium mb-1"  htmlFor="email">E-mail</label>
          <input
          className="w-full border border-stone-300 rounded-lg px-4 py-2" type="email" id="email" placeholder="voce@email.com" />
        </div>
        <div>
          <label
          className="block text-sm font-medium mb-1"  htmlFor="mensagem">Mensagem</label>
          <textarea
          className=" h-32 w-full border border-stone-300 rounded-lg px-4 py-2" id="mensagem" placeholder="Escreva sua mensagem..." />
        </div>
        <button
        className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-700 active:scale-95 transition" type="submit">Enviar</button>
      </form>
    </section>
  )
}
