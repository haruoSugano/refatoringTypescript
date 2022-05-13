import ReactModal from "react-modal";

interface NewFoodModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewFoodModal ({ isOpen, onRequestClose }: NewFoodModal) {
    return(
        <ReactModal
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            className="react-modal-content"
        >

        </ReactModal>
    );
}