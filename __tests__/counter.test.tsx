import React from "react";
import { render } from "@testing-library/react";
import { Counter } from "../src/components";
import { ButtonContext } from "../src/components/button/useButtonContext";
import { TButtonSize, TVariant } from "../src/components/button/types";

describe("Тестирование компонента Counter", () => {
    const renderWithContext = (value: number, size: TButtonSize , variant: TVariant) => {
        return render(
      <ButtonContext.Provider value={{ count: value, size, variant, increment: () => {}, isLoading: false }}>
        <Counter value={value} />
      </ButtonContext.Provider>
    );
  };

  test("Проверка простого рендера компонента Counter", () => {
    const { getByText } = renderWithContext(5, 28, "primary");
    expect(getByText("5")).toBeInTheDocument();
  });

  test("Проверка, что при числе больше 99 отображается текст 99+", () => {
    const { getByText } = renderWithContext(150, 36, "primary");
    expect(getByText("99+")).toBeInTheDocument();
  });

  test("Проверка, что при выборе варианта secondary, меняется цветовая схема", () => {
    const { container } = renderWithContext(5, 56, "secondary");
    expect(container.firstChild).toHaveClass("secondary");
  });
});
