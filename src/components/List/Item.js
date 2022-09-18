import ErrorView from "../ErrorView/ErrorView.js";
import styles from "./Item.module.css";

function Item({
  item,
  modify,
  onModifySubmit,
  onModifyChange,
  onModify,
  modiError,
  checkChange,
  itemDel,
}) {
    return (
        <div>
            <li key={item.id}>
                <div className={item.check ? styles.item_check : styles.item}>
                    {item.modify} ?
                </div>
            </li>
        </div>
    )
}
