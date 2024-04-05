import { useRef } from 'react'
import Produtos from './Produtos'

export default function Login() {

    const user = useRef();
    const password = useRef()
    const getUser = sessionStorage.getItem('userData');
    const getPassword = sessionStorage.getItem('passwordData');

    //funções:

    const handleSubmit = () => {
        if (user.current.value === 'Admin' && password.current.value === '123456') {

            //autenticação com token
            let token = Math.random().toString(16).substring(2) * Math.random().toString(16).substring(2);

            sessionStorage.setItem('userData', 'Admin')
            sessionStorage.setItem('passwordData', token)
        } else {
            alert('Usuário ou senha inválidos !!!')
        }
    }

    return (
        <>
            <h1>funciona merda</h1>
            <section>
                {/*if ternário*/}
                {getUser && getPassword ? (
                    <Produtos />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="usuario">Usuário:</label>
                        <input type="text" ref={user} />

                        <label htmlFor="senha">Senha:</label>
                        <input type="password" ref={password} />

                        <input type="submit" value="Login" />
                    </form>
                )}
            </section>
        </>
    )
}