import { useNavigate } from "react-router-dom";
import { useCarts } from "../../Contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { carts, deleteCart, setCarts } = useCarts();
  console.log(carts);

  const handleIncrement = (index) => {
    const updatedCart = [...carts];
    updatedCart[index].quantity++;
    setCarts(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...carts];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCarts(updatedCart);
    }
  };

  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="w-full  my-10 lg:px-24 px-5">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {carts.length === 0 ? (
        <div className="min-h-[60vh]">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          {carts.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-10 justify-between border-b border-gray-300 py-4"
            >
              <div className="flex-1 flex items-center">
                <img
                  className="w-24 h-24 mr-4"
                  src={item.image}
                  alt={item.title}
                />
                <div>
                  <p className="font-bold ">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <button
                  onClick={() => handleDecrement(index)}
                  className="text-gray-500 border-2 py-1 px-2 hover:text-gray-700 
                  mr-2 "
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(index)}
                  className="text-gray-500 border-2 py-1 px-2 hover:text-gray-700 
                  ml-2"
                >
                  +
                </button>
              </div>

              <p>${(item.price * item.quantity).toFixed(2)}</p>

              <button
                onClick={() => deleteCart(item.id)}
                className="flex items-center justify-center 
                w-6 h-6 rounded-full border font-extrabold"
              >
                x
              </button>
            </div>
          ))}
          <div className="mt-8 flex justify-end gap-10 font-bold">
            <p>Total : </p>
            <p> ${totalPrice.toFixed(2)}</p>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
