import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Arrange - Act - Assert

test("renders learn react link", () => {
  render(<App />);
  const greetingElement = screen.getByText(/welcome/i);
  expect(greetingElement).toBeInTheDocument();
});

/**
 * LIST TESTS
 */
test("The local storage key does not have information (returns 0 items)", () => {
  // Arrange
  const fakeLocalStorageData = [];
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData); // []
  });
  render(<App />);
  // Act
  const errorMessage = screen.getByText(/sorry no items found/i);
  // Assert
  expect(errorMessage).toBeInTheDocument();
});

/**
 * FORM TESTS
 */
