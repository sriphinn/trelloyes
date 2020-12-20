import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from "react-test-renderer"

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("List component renders with no data", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot(); 
})