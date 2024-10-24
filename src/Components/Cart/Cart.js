import styles from "./Cart.module.css"
import { useProductContext } from "../../ProductContext"

export default function Cart() {
    const {
        cart,
        total,
        removeFromCart,
        purchaseAll,
        increaseQuant,
        decreaseQuant,
    } = useProductContext();
    return (
        <>
            <div className={styles.cartContainer}>
                <aside className={styles.total}>
                    <p>TotalPrice:- ₹{total}/-</p>
                    <button className={styles.purchaseBtn} onClick={purchaseAll}>Purchase</button>
                </aside>
                <div className={styles.productGrid}>
                    {cart.map((item) => (
                        <div className={styles.productContainer}>
                            <div className={styles.productImageContainer}>
                                <img src={item.image} alt="Product" width="100%" height="100%" style={{objectFit: "contain"}}></img>
                            </div>
                            <div className={styles.productDetails}>
                                <div className={styles.productName}>
                                    <p>{item.name}</p>
                                </div>
                                <div className={styles.productPrice}>
                                    <p>₹ {item.price}</p>
                                    <div className={styles.productQuantity}>
                                        <img src={require("../../Assets/decrement.png")} onClick={()=>decreaseQuant(item)}></img>{item.quantity}<img src={require("../../Assets/increment.png")} onClick={()=>increaseQuant(item)}></img>
                                    </div>
                                </div>
                                <button className={styles.removeBtn} title="Remove from Cart" onClick={()=> removeFromCart(item)}>Remove From Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}