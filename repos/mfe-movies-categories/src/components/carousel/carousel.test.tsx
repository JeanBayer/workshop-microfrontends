import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Carousel } from "./carousel";

describe("Carousel", () => {
  it("should scroll left when left button is clicked", async () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
      </Carousel>
    );

    const slider = screen.getByText("Item 1").parentElement;
    if (slider) {
      slider.scrollBy = jest.fn();
    } else {
      throw new Error(
        "Slider element (parentElement of 'Item 1') not found, cannot mock scrollBy."
      );
    }

    const leftButton = screen.getByLabelText("scroll left");
    await userEvent.click(leftButton); // Await the click event

    if (slider) {
      expect(slider.scrollBy).toHaveBeenCalledWith({
        left: -400, // 200 * 2
        behavior: "smooth",
      });
    }
  });

  it("should scroll right when right button is clicked", async () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
      </Carousel>
    );

    const slider = screen.getByText("Item 1").parentElement;
    if (slider) {
      slider.scrollBy = jest.fn();
    } else {
      throw new Error(
        "Slider element (parentElement of 'Item 1') not found, cannot mock scrollBy."
      );
    }

    const rightButton = screen.getByLabelText("scroll right");
    await userEvent.click(rightButton); // Await the click event

    if (slider) {
      expect(slider.scrollBy).toHaveBeenCalledWith({
        left: 400, // 200 * 2
        behavior: "smooth",
      });
    }
  });
});
