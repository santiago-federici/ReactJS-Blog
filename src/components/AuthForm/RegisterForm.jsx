export function RegisterForm () {
  return (
        <>
          <h2>Register</h2>

          <input type='email' placeholder='example@gmail.com'></input>
          <input type='email' placeholder='repeat@gmail.com'></input>
          <input type='password' placeholder='mypass123'></input>
          <input type='password' placeholder='repeatmypass123'></input>

          <div className='data-btns'>
            <button>Login</button>
            <button>Reset</button>
          </div>
        </>
  )
}
