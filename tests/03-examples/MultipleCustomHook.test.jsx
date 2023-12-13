import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en MultipleCustomHook", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHook />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Rick and Morty Characters"));

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    expect(nextButton.disabled).toBeTruthy();
  });

  test("debe de mostrar un personaje", async () => {
    useFetch.mockReturnValue({
      data: { name: "Camilo", status: "Alive" },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    expect(screen.getByText("Camilo")).toBeTruthy();
    expect(screen.getByText("Alive")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: { name: "Camilo", status: "Alive" },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
