import styles from "./Orders.module.css"
import { useProductContext } from "../../ProductContext"
import OrderDetail from "./OrderDetail";

export default function Orders() {
    const { myorders } = useProductContext();
    return (
        <>
            <div className={styles.mainContainer}>
                {myorders.length === 0 ?
                    <>
                        {/* message of no order */}
                        <h1 className={styles.orderHeading}>You haven't placed any order yet !!</h1>
                    </>
                    :
                    // if contains order than render them one by one
                    // order list container
                    <div className={styles.orderListContainer}>
                        {myorders.map((order, i) => <OrderDetail key={i} order={order} />)}
                    </div>
                }
            </div>
        </>
    )
}
