import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../src/components";
import { ButtonContext } from "../src/components/button/useButtonContext";

describe("Тестирование компонента Button", () => {
  test("Проверка рендера компонента Button с текстом `Что сделать`", () => {
    render(
      <Button variant="primary" size={36}>
        <Button.Label text="Что сделать" />
      </Button>
    );
    expect(screen.getByText("Что сделать")).toBeInTheDocument();
  });

  test("Проверка увеличения значения компонента Counter внутри Button при клике", async () => {
    render(
      <Button variant="primary" size={36}>
        <Button.Label text="Что сделать" />
        <Button.Counter />
      </Button>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    setTimeout(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    }, 1000);
  });

  test("Проверка появления ButtonLoader при клике", () => {
    render(
      <Button variant="primary" size={36}>
        <Button.Label text="Что сделать" />
        <Button.Loader />
      </Button>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(button).toHaveClass("loading");
  });

  test("Проверка отсутствия возможности увеличения значения Counter во время жизни компонента ButtonLoader", () => {
    render(
      <ButtonContext.Provider
        value={{ count: 0, increment: () => {}, isLoading: true, variant: "primary", size: 36 }}
      >
        <Button variant="primary" size={36}>
          <Button.Label text="Что сделать" />
          <Button.Counter />
        </Button>
      </ButtonContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    setTimeout(() => {
      expect(screen.getByText("0")).toBeInTheDocument();
    }, 1000);
  });
});
