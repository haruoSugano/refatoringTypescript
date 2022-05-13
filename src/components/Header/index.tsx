import { Container, Content } from "./styles";

import logoImg from '../../assets/logo.svg';
import { FiPlusSquare } from 'react-icons/fi';

interface HeaderProps {
    onOpenNewFoodModal: () => void;
}

export function Header({ onOpenNewFoodModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoRestaurant" />
                <nav>
                    <div>
                        <button
                            type="button"
                            onClick={onOpenNewFoodModal}
                        >
                            <div className="react-modal-text">Novo Prato</div>
                            <div className="react-modal-icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </nav>
            </Content>
        </Container>
    );
}