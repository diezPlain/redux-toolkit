import { useAppDispatch } from "../../../store/hooks"
import { showModalAction } from "../../../store/slices/ui/uiSlice"

export const ModalCustom = () => {
    const dispatch = useAppDispatch()
  return (
    <div className="modal modal-lg">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
            </div>
            <div className="modal-body">
                <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las 
                    hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software 
                    de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                </p>
            </div>
            <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  data-bs-dismiss="modal"
                  onClick={() => dispatch(showModalAction(false))}
                  >
                    Close
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}
