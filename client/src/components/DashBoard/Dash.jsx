import { GraphicBooksFreeToSubs } from "./BookGraph/BookGraph";
import { useSelector } from "react-redux";
import {
  quantityOfFreeBooks,
  quantityOFPayBooks,
} from "../../utils/Hooks/dashFunctions/bookFunctions";
import { GraphicUsersFreeToSubs } from "./UserGraph/UserGraph";
import style from "./Dash.module.css";
import { BookEdit } from "./BookEdit/BookEdit";

export const Dash = () => {
  const booksSubs = quantityOFPayBooks();
  const booksFree = quantityOfFreeBooks();
  console.log(booksSubs, booksFree);

  return (
    <div className={style.container}>
      <div className={style.graph}>
        <GraphicBooksFreeToSubs />
      </div>
      <div className={style.graph}>
        <GraphicUsersFreeToSubs />
      </div>
      <div>
        <BookEdit />
      </div>
    </div>
  );
};
