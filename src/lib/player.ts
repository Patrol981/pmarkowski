import * as THREE from 'three';
import type { Scene } from './scene';

type Keys = {
  W: boolean,
  A: boolean,
  S: boolean,
  D: boolean
};

class Player {
  readonly scene: Scene;

  playerModel: THREE.Group;
  moveDirection: THREE.Vector3;
  velocity = 2;

  constructor(scene: Scene) {
    this.scene = scene;

    this.playerModel = THREE.Group.prototype;
    this.moveDirection = new THREE.Vector3();
  }

  public async loadPlayerModel(): Promise<void> {
    this.playerModel = await this.scene.loadModel('pacman.obj', 'pacman.png');
  }

  public getPlayerModel(): THREE.Group {
    return this.playerModel;
  }

  public update(delta: number, keys: Keys): void {
    this.handleKeyPress(keys);
    this.movePlayer(delta);
  }

  movePlayer(detla: number): void {
    this.moveDirection.y = 0;
    this.moveDirection.normalize();

    const moveX = this.moveDirection.x * this.velocity * detla;
    const moveZ = this.moveDirection.z * this.velocity * detla;
    this.playerModel.position.x += moveX;
    this.playerModel.position.z += moveZ;
  }

  handleKeyPress(keys: Keys): void {
    if (keys.A) this.moveDirection.x = -1;
    else if (keys.D) this.moveDirection.x = 1;
    else this.moveDirection.x = 0;

    if (keys.W) this.moveDirection.z = -1;
    else if (keys.S) this.moveDirection.z = 1;
    else this.moveDirection.z = 0;
  }
}

export { Player };
export type { Keys };
