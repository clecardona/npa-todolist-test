import Checkbox from "./Checkbox";
import { toggleTodo } from "../../utils/task";

export default function ListItem({ item, setReload }) {
  return (
    <li key={item.id} className={item.checked ? "done" : ""}>
      <h4>{item.title}</h4>
      <Checkbox
        checked={item.checked}
        onChange={() => {
          toggleTodo(item);
          setReload();
        }}
      />
    </li>
  );
}
