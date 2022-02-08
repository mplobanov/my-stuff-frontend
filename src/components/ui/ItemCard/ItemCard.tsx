import styles from './ItemCard.module.css';

interface ItemCardProps {
    /**
     * Amount of items to display. Can be any JSX Element or number.
     * Example: 2, 3, 7
     */
    quantity?: string | JSX.Element,
    /**
     * Status of item.
     * Example: in the wash, ready, worn.
     */
    status: string,
    /**
     * Name of the item.
     * Example: socks, t-shirt, scarf
     */
    name: string,
    /**
     * Image url for the item.
     * Image aspect ratio must be 1:1, the item is usually placed in right bottom corner.
     */
    imageUrl?: string,
    /**
     * Background color for the card. Default: #EFEFEF
     */
    backgroundColor?: string,
    /**
     * onClick handler
     */
    onClick: () => void,
}

export const ItemCard = ({quantity, status, name, imageUrl, backgroundColor = "#EFEFEF", onClick}: ItemCardProps) => {

    return <div className={styles.cardWrap} style={{backgroundColor: backgroundColor}}
                onClick={() => onClick()}>
        {!!quantity && <div className={styles.quantity}  style={{backgroundColor: backgroundColor}}>{quantity}</div>}
        <div className={styles.name}>{name}</div>
        <div className={styles.status}>{status}</div>
        {imageUrl ? (<img src={imageUrl} alt={"Item"} className={styles.img}/>) : undefined}

    </div>;
}