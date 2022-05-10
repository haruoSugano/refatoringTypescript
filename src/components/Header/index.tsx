import { Container, Content } from "./styles";

import logoImg from '../../assets/logo.svg';
import { FiPlusSquare } from 'react-icons/fi';

interface HeaderProps {
    onOpenNewAddModal: () => void;
}

export function Header(/*{ onOpenNewAddModal }: HeaderProps*/) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoRestaurant" />
                <nav>
                    <div>
                        <button
                            type="button"
                            //onClick={onOpenNewAddModal}
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