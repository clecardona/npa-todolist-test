import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/** MOCKUP TODOS **/
const todos = [
  {
    id: 1632898930037,
    title: "dance in circle",
    timestamp: 1632898930037,
    checked: false,
  },
  {
    id: 1632898963662,
    title: "run fast",
    timestamp: 1632898963662,
    checked: true,
  },
  {
    id: 1632900398536,
    title: "jump high",
    timestamp: 1632900398536,
    checked: false,
  },
];
const oneTodo = [
  {
    id: 1632900398536,
    title: "jump high",
    timestamp: 1632900398536,
    checked: false,
  },
];
const oneTodoChecked = [
  {
    id: 1632900398536,
    title: "jump high",
    timestamp: 1632900398536,
    checked: true,
  },
];

/** LIST TESTS **/

test("The local storage has no data, first connexion to the app", () => {
  // Arrange
  Storage.prototype.getItem = jest.fn(() => {
    return null;
  });
  render(<App />);
  // Act
  const greetingMessage = screen.getByText(/welcome/i);
  // Assert
  expect(greetingMessage).toBeInTheDocument();
});

test("The local storage has an empty list", () => {
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify([]);
  });
  render(<App />);

  const errorMessage = screen.getByText(/sorry no items found/i);

  expect(errorMessage).toBeInTheDocument();
});

test("to-do presence", () => {
  const fakeLocalStorageData = todos;

  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);

  const todo = screen.getByText(/jump high/i);
  expect(todo).toBeInTheDocument();
});

test("task-done absence", () => {
  const fakeLocalStorageData = todos;

  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);
  const taskDone = screen.queryByText(/run fast/i);
  expect(taskDone).toBeNull();
});

test("task-done presence after clicking the view tasks done button", () => {
  const fakeLocalStorageData = todos;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);

  const buttonElement = screen.getByText(/view tasks done/i);
  fireEvent.click(buttonElement);

  const taskDone = screen.getByText(/run fast/i);
  expect(taskDone).toBeInTheDocument();
});

/** BUTTON TESTS **/

test("Open the modal", () => {
  const fakeLocalStorageData = todos;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  document.body.appendChild(modal);
  render(<App />);

  const buttonElement = screen.getByText(/add a task/i);
  fireEvent.click(buttonElement);

  const btnClose = screen.getByText(/close/i);
  expect(modal).toContainElement(btnClose);
});
