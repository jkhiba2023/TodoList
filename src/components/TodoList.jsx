import { MdCheck, MdDeleteForever, MdModeEdit } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandlerDeleteItem,
  onHandlerCheckedItem,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandlerCheckedItem(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandlerDeleteItem(data)}>
        <MdDeleteForever />
      </button>
      <button className="edit-btn">
        <MdModeEdit />
      </button>
    </li>
  );
};
