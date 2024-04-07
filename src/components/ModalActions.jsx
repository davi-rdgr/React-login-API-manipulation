import { useEffect, useState } from 'react'
import styles from '../css/ModalActions.module.css'
export default function ModalActions(props) {


    const id = props.id

    const [produto, setProduto] = useState({
        id: props.id,
        nome: "",
        desc: "",
        preco: ""
    })

    useEffect(() => {
        fetch(`http://localhost:5000/produtos/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((resp) => setProduto(resp))
            .catch(error => console.log(error))
    }, [id])

    const handleChange = (e) => {
        //desestruturando 
        const { name, value } = e.target
        //inserindo os dados no useState produto
        setProduto({ ...produto, [name]: value })
    }
    const handleSubmit = (e) => {
        // O PREVENTDEFAULT NÃO DISPARARÁ O FORMULÁRIO PARA BUSCAR VALORES
        e.preventDefault();
        // realizando o editar / update para API

        fetch(`http://localhost:5000/produtos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
            .then((resp) => resp.json())
            .then((resp) => setProduto(resp))
            .catch(error => console.log(error))

        props.setOpen(false)
    }

    if (props.open[0] != 0) {
        return (
            <div className={styles.container}>
                <h1>Produtos</h1>
                <button onClick={() => props.setOpen(false)}>CLOSE MODAL</button>

                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Dados do Produto</legend>
                            <div>
                                <label htmlFor="idNome">Nome</label>
                                <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange} />

                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange} />

                                <label htmlFor="idPreco">Preço</label>
                                <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange} />

                                <div>
                                    <button>Editar</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>

            </div>
        )
    }
}