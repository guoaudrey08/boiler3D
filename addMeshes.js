import * as THREE from 'three'

//arrow function, but is almost the same as "export function addBoilerPlateMesh(){}"
export const addBoilerPlateMesh = () => {
    const box = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({ color: '0xff0000'})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(2, 0, 0)
    return boxMesh
}

export function addStandardMesh(){
    const box = new THREE.BoxGeometry(1,1, 1)
    const boxMaterial = new THREE.MeshStandardMaterial({ color:0x00ff00})
    const boxMesh = new THREE.Mesh(box,boxMaterial)
    boxMesh.position.set(-2,0,0)
    return boxMesh
}