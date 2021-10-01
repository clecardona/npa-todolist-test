import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

test("user clicks on Check item, the item should disappear from screen", async () => {
  const mockMethod = jest.fn();

  render(<CheckBox checked={true} onChange={mockMethod} />);

  const checkBox = screen.getByTestId("checkbox");

  expect(checkBox).toBeInTheDocument();

  fireEvent.click(checkBox);
  expect(mockMethod).toHaveBeenCalledTimes(1);
});
