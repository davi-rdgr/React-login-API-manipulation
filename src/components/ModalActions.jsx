import styles from '../css/ModalActions.module.css'
export default function ModalActions(props) {
    if (props.open) {
        return (
            <div className={styles.container}>
                <h1>Produtos</h1>
                <button onClick={() => props.setOpen(false)}>CLOSE MODAL</button>

                <div>
                    <form>
                        <fieldset>
                            <legend>Dados do Produto</legend>
                            <div>
                                <label htmlFor="idNome">Nome</label>
                                <input type="text" name="nome" id="idNome" />

                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name="desc" id="idDesc" />

                                <label htmlFor="idPreco">Preço</label>
                                <input type="text" name="preco" id="idPreco" />

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