import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

test("user toggles checkbox", () => {
  const toggleItem = jest.fn();
  render(<CheckBox checked={true} onChange={toggleItem} />);

  const checkBox = screen.getByTestId("checkbox");

  expect(checkBox).toBeInTheDocument();
  fireEvent.click(checkBox);
  expect(toggleItem).toHaveBeenCalledTimes(1);
});
