import Experience from '../Experience.js'
import * as THREE from 'three'

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;
        this.gundam = this.resources.items.gundam;
        this.actualgundam = this.gundam.scene;


        this.setModel();
    }

    setModel() {
        this.scene.add(this.actualgundam);
    }
    resize() {

    }

    update() {}
}