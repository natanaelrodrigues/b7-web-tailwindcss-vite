import './App.css'
import Container from './components/Container'

function App() {
  return (
    <>
      <div className='w-screen h-auto p-5'>
        <div className='flex justify-center'>
          <div className='bg-yellow-100 max-w-screen-md border-l-4 border-yellow-500 p-3 text-yellow-700'>
            Você não tem mais acesso.
            <a href='' className="underline ml-1  text-yellow-700">Faça o upgrade agora!</a>
          </div>
        </div>
      </div>
      <div className='w-screen h-auto p-5'>
        <div className='w-96 rounded-md border-gray-500 bg-white p-4'>
          <div className=''>
            <div className='inline-block'>
              <img className='h14 w-14 rounded-full' src="https://tailwindui.com/img/avatar-3.jpg" alt='avatar'></img>
            </div>
            <div className='inline-block ml-5'>
              <div className='text-black pb-2'>Rafaela Silva</div>
              <div className='text-gray-400'>Te maondou um convite</div>
            </div>
          </div>
          <div className='mt-4'>
            <button className='rounded-md px-5 py-2 bg-blue-800 text-white'>Aceitar</button>
            <button className='ml-3 rounded-md px-5 py-2 border border-gray-200 text-black bg-white'>Negar</button>
          </div>  
        </div>
        
      </div>
     <h1 className='text-fuchsia-200'>Bem vindo</h1>
     <button className='bg-blue-500 text-white rounded-md px-3 py-3 border-none'>Clique aqui</button>
     <Container/>
    </>
  )
}

export default App
