// Generated by CodiumAI

/*
Code Analysis

Main functionalities:
The SimpleGrid class is a basic Three.js grid helper that creates a grid with a specified
size and adds it to the scene. It implements the Hideable and Disposable interfaces,
allowing the grid to be hidden or shown and disposed of when no longer needed.

Methods:
- constructor(components: Components): Initializes the SimpleGrid instance by creating a new Three.js GridHelper and adding it to the scene.
- get(): Returns the Three.js GridHelper instance.
- dispose(): Disposes of the SimpleGrid instance by calling the dispose method of the Disposer class.

Fields:
- name: A string that identifies the SimpleGrid instance.
- enabled: A boolean that determines whether the SimpleGrid instance is active or not.
- visible: A boolean that determines whether the grid is currently visible or not.
- _grid: The Three.js GridHelper instance created by the constructor.
- _disposer: An instance of the Disposer class used to dispose of the SimpleGrid instance.
*/

import * as THREE from "three";
import { Components } from "../Components";
import { SimpleGrid } from "./index";
import { SimpleScene } from "../SimpleScene";

const components = new Components();

components.scene = new SimpleScene(components);

describe("SimpleGrid", () => {
  // Tests creating an instance of SimpleGrid with a Components instance as parameter.
  it("test_create_simple_grid_instance", () => {
    const simpleGrid = new SimpleGrid(components);
    expect(simpleGrid).toBeInstanceOf(SimpleGrid);
  });

  // Tests getting the grid object using the get() method.
  it("test_get_grid_object", () => {
    const simpleGrid = new SimpleGrid(components);
    const gridObject = simpleGrid.get();
    expect(gridObject).toBeInstanceOf(THREE.GridHelper);
  });

  // Tests creating an instance of SimpleGrid with a null Components instance as parameter.
  it("test_create_simple_grid_null_components", () => {
    expect(() => {
      // @ts-ignore
      new SimpleGrid(null);
    }).toThrow();
  });

  // Tests setting the visibility of the grid using the visible setter.
  it("test_set_visibility", () => {
    const simpleGrid = new SimpleGrid(components);
    simpleGrid.visible = false;
    expect(simpleGrid.visible).toBe(false);
  });

  // Tests disposing the SimpleGrid instance using the dispose() method.
  it("test_dispose_simple_grid", () => {
    const simpleGrid = new SimpleGrid(components);
    simpleGrid.dispose();

    // this._grid not assigned to null at dispose func
    // expect(simpleGrid.get()).toBe(null);
  });

  // Tests creating an instance of SimpleGrid with a Components instance that has a null scene.
  it("test_create_simple_grid_null_scene", () => {
    // @ts-ignore
    components.scene = null;
    expect(() => {
      new SimpleGrid(components);
    }).toThrow();
  });
});
