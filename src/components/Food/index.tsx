import { useFoods } from "../../hooks/useFoodsContext";

import { 
    AvailabilityContainer, 
    Container, 
    DescriptionFoodTypeConteiner, 
    EditFoodTypeConteiner, 
    IconConteiner } from "./styles";

import { FiEdit3, FiTrash } from "react-icons/fi";

export function Food() {

    const { foods } = useFoods();
    return (
        <Container>
            <DescriptionFoodTypeConteiner>
                <header>
                    <img src='' alt="food name" />
                </header>
                <section>
                    <h2>Food name</h2>
                    <p>Food description</p>
                    <p className="react-price">
                        R$ <b>Food price</b>
                    </p>
                </section>
            </DescriptionFoodTypeConteiner>
            <EditFoodTypeConteiner>
                <IconConteiner>
                    <button
                        type="button"
                        className="react-modal-icon"
                    //onClick={this.setEditingFood}
                    //data-testid={`edit-food-${food.id}`}
                    >
                        <FiEdit3 size={20} />
                    </button>

                    <button
                        type="button"
                        className="react-modal-icon"
                    //onClick={() => handleDelete(food.id)}
                    //data-testid={`remove-food-${food.id}`}
                    >
                        <FiTrash size={20} />
                    </button>
                </IconConteiner>
                <AvailabilityContainer>
                    <p>Disponivel</p>
                    <label htmlFor="1" className="switch">
                        <input
                            id="1"
                            type="checkbox"
                        //checked={isAvaliable}
                        //onChange={this.toggleAvailable}
                        //date-testid={`change-status-food-${food.id}`}
                        />
                        <span className="slider" />
                    </label>
                </AvailabilityContainer>
            </EditFoodTypeConteiner>
        </Container>
    );
}