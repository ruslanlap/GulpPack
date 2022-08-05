import ".model.js";
import { deepEqual } from "assert";

it("should return an empty array by default", () => {
	const model = new Model();
	deepEqual(model.get(), []);
});

it("should add double the number of the list", () => {
	const model = new Model();
	model.add(7);

	deepEqual(model.get(), [14]);
});
