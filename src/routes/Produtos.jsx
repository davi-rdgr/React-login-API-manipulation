import { useState, useEffect } from "react"
import ModalActions from "../components/ModalActions"
export default function Produtos() {

    const [produtosAPI, setProdutosAPI] = useState([])
    const [open, setOpen] = useState(false)

    //função para escluir determinado produto da minha API
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/produtos/${id}`, { method: 'delete' })
            //se a promisse for cumprida redireciona para pagina produtos
            .then(() => (window.location = '/produtos'))
            //se der algo errado, avisa no terminal
            .catch((error) => console.log(error))
    }

    useEffect(
        () => {
            //fazer requisição http para a URL da Api
            fetch("http://localhost:5000/produtos")
                //se a requisição for bem sucedida, transformar o conteúdo em .json
                .then((resp) => resp.json())
                //onde quero guardar as respostas? -> (setProdutosAPI)
                .then((resp) => setProdutosAPI(resp))
                //se der algo errado, avisa no terminal
                .catch((error) => console.log(error))
        }, []
    )

    return (
        <section>

            <button>Cadastrar</button>
            <h1>Lista de Jogos cadastrados!</h1>

            {open ? <ModalActions open={true} setOpen={setOpen}/> : ""}

            <button onClick={() => setOpen(true)}>OPEN-MODAL</button>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Editar / Excluir</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                {produtosAPI.map((prod => (
                    <tr key={prod.id}>
                        <td>{prod.nome}</td>
                        <td>{prod.desc}</td>
                        <td>{prod.preco}</td>
                        <td><button onClick={handleDelete.bind(this, prod.id)}>deletar</button></td>
                    </tr>
                )))}
                <tfoot>
                    <tr>
                        <td colSpan="4">Lista de Jogos em promoção !!!</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}