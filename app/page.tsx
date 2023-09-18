export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Bernardo Santo Tirso</code>
        </p>
      </div>

      <div className='grid grid-cols-1 gap-4 items-center"'>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <code className="font-mono font-bold text-2xl text-center">Em construção...</code>
        </div>
        <div className="text-center pt-8 md:pt-20">
          <code className="font-mono font-bold text-base md:text-lg">Tal e qual como eu</code>
        </div>
      </div>

      <div className="mb-2 text-center md:max-w-2xl md:w-full lg:w-3/4 xl:w-1/2 text-sm">
        <p>&copy; 2023 Bernardo Santo Tirso. Todos os direitos reservados. </p>
      </div>
    </main>
  )
}
