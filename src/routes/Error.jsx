import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
            <h2>Error 404: página não encontrada! </h2>
            <p>Voltar para a página inicial : <span><Link to="/">VOLTAR</Link></span></p>
        </>
    )
}