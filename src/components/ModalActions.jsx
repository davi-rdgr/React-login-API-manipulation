export default function ModalActions(props) {
    if (props.open) {
        return (
            <>
                <h1>MODAL</h1>
                <button onClick={() => props.setOpen(false)}>CLOSE MODAL</button>
            </>
        )
    }
}