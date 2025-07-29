import { formatDate } from "helpers/formatDate";
import style from "./CryptoHistory.module.css";
const tableHeaders = ["№", "price", "amount", "date"];

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map((el, index) => (
            <th key={index} className={style.th}>
              {el}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, amount, price, date }, index) => (
          <tr key={id} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{formatDate(date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
