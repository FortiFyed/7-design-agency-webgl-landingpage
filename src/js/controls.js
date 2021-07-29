export class Controls{
    
    constructor(gui){
        this.gui = gui
    }

    LightControls(pointLight) {
        // light controls
        this.gui.add(pointLight.position, 'x')
        this.gui.add(pointLight.position, 'y')
        this.gui.add(pointLight.position, 'z')
        const color = { color: '#00ff00' }
        this.gui.addColor(color, 'color').onChange(() => {
            pointLight.color.set(color.color)
        })

        return true
    }

    ObjectControls(object) {
        this.gui.add(object.rotation, 'x').min(0).max(250)

        return true
    }

}