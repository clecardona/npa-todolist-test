//Local imports
import Button from "./shared/Button";

// Why there is a reloadShoppingList? Sounds like a hack
export default function ButtonsMenu({
  reloadShoppingList,
  handleClear,
  length,
}) {
  return (
    <section className="section-buttons">
      <Button />
      <Button />
    </section>
  );
}
