import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer"

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("Card component renders with no data", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot(); 
})

it("Card component renders with data", () => {
    const tree = renderer.create(<Card 
        title="test title"
        content="test content"
    />).toJSON();
    expect(tree).toMatchSnapshot(); 
})