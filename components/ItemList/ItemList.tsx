// let ItemArr = [];
// function ItemList() {
//   if (ItemArr.length === 0) {
//     return (
//   <div className="empty-state">
//     <div className="empty-picture">
//       <img src="/illustration-empty.svg" alt="empty" />;
//     </div>
//     <div>There is nothing here</div>
//     <div>
//       Create an invoice by clicking the <b>New Invoice</b> button and get
//       started
//     </div>
//   </div>
//     );
//   }
// }

// export default ItemList;

import React from "react";
import styles from "../ItemList/ItemList.module.css";
function ItemList() {
  const items: string[] = [];

  return (
    <div>
      {items.length === 0 ? (
        <div className={styles.empty_state}>
          <div className="empty-picture">
            <img src="/illustration-empty.svg" alt="empty" />
          </div>
          <div className={styles.empty_text1}>There is nothing here</div>
          <div className={styles.empty_text2}>
            Create an invoice by clicking the <b>New Invoice</b> button and get
            started
          </div>
        </div>
      ) : (
        items.map((item) => <p key={item}>{item}</p>)
      )}
    </div>
  );
}

export default ItemList;
