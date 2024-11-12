import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Página Principal */}
      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        {/* Cabeçalho */}
        <header className="w-full py-6 bg-gray-800 text-center">
          <h1 className="text-4xl font-bold">Bem-vindo ao VtubeConnect!</h1>
          <p className="mt-2 text-lg">Conecte-se com sua Vtuber favorita e fique por dentro de todas as novidades.</p>
        </header>

        {/* Seção "Quem Sou Eu" */}
        <section id="about" className="mt-16 max-w-3xl text-center px-4">
          <h2 className="text-3xl font-semibold">Quem Sou Eu</h2>
          <p className="mt-6">
            Olá! Eu sou uma Vtuber focada em criar conteúdo divertido e envolvente.
            Transmito jogos, bate-papos, e muito mais. Fique à vontade para explorar meu mundo virtual!
          </p>
          <img src="/vtuber-avatar.png" alt="Vtuber Avatar" className="mt-8 w-32 h-32 md:w-40 md:h-40 rounded-full" />
        </section>

        {/* Seção de Cronograma */}
        <section id="schedule" className="mt-16 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">Cronograma</h2>
          <p className="mt-6">
            Acompanhe meu cronograma para não perder nenhuma transmissão ao vivo!
          </p>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=seu_email%40gmail.com"
            className="w-full h-96 mt-8"
            frameBorder="0"
          />
        </section>

        {/* Botões para Redes Sociais */}
        <section id="socials" className="mt-12 flex space-x-4">
          <a
            href="https://twitter.com/seu_usuario"
            target="_blank"
            className="btn-social bg-blue-500"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com/seu_canal"
            target="_blank"
            className="btn-social bg-red-600"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://discord.gg/seu_convite"
            target="_blank"
            className="btn-social bg-purple-700"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </section>
      </main>
    </>
  );
}
