const Login = () => {
  return (
    <>
      <div className='w-screen h-screen p-5 bg-gray-900 text-white'>
        <div className='mt-5'>
          <h1 className='text-3xl font-bold text-center'>Sistema de Login</h1>
          <div className='my-6'>
            <label className='block text-lg mb-2' htmlFor='emailField'>
              Endereço de E-mail
            </label>
            <input
              className='w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500'
              type='email'
              id='emailField'
            ></input>
          </div>
          <div className='my-6'>
            <label className='block text-lg mb-2' htmlFor='passwordField'>
              Senha
            </label>
            <input
              className='w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500'
              type='password'
              id='passwordField'
            ></input>
          </div>
          <div className='my-5'>
            <button className='w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-500'>
              Entrar
            </button>
          </div>
        </div>
        <div className='text-center text-gray-400'>
          Não é membro?{' '}
          <a href='' className='text-yellow-500 font-bold'>
            Faça seu cadastro agora
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
