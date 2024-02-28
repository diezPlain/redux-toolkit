import { useAppSelector } from "../../store/hooks"
import { ItemA } from "./ItemA/ItemA"
import { ItemB } from "./ItemB/ItemB"
import { ModalCustom } from "./Modal/Modal"

export const DemoModal = () => {
    const { showModal} = useAppSelector(
        (state) => state.ui
        )
  return (
    <div>
        <h3 className="text-center">DemoModal</h3>
        <div className='contain-buttons'>
            <div>
                <ItemA />
                <ItemB />
            </div>
        </div>
        {showModal && <ModalCustom />}
    </div>
  )
}
