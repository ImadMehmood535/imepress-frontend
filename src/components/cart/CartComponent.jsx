
import InnerpageHeader from "../general/InnerpageHeader";
import CartDetails from "./CartDetails";

const CartComponent = () => {
    return (
        <div className="cart">
            <InnerpageHeader pageTitle={"Shopping Cart"} breadcrums={"Account"} />
            <CartDetails/>
        </div>
    );
};

export default CartComponent;
