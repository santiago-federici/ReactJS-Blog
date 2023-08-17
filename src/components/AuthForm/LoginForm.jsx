

export function LoginForm() {

    return(
        <>
            <h2>Login</h2>

            <input type='email' placeholder='example@gmail.com'></input>
            <input type='password' placeholder='mypass123'></input>

            <div className='data-btns'>
                <button>Login</button>
                <button>Reset</button>
            </div>
        </>
    )
}