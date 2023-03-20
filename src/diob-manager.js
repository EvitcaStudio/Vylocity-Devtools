/**
* DiobManager class for the Vylocity Game Engine.
* @class DiobManagerSingleton
* @license MIT License
* @author https://github.com/doubleactii
*/
class DiobManagerSingleton {
    trackedInterfaces = [];
    trackedParticles = [];
    trackedDiobs = [];
    trackedMovables = [];
    trackedMobs = [];
    trackedTiles = [];

    constructor() {
        // The update interval on updating the counters and viewable instances.
        // This is on delay do to updating in realtime would be performance intensive due to VYLO.World.getDiobs()
        this.updateInterval = setInterval(this.updateCounters.bind(this), 1000);
    }
    /**
     * Update counters for all type countrers.
     */
    updateCounters() {
        const worldDiobsInFrame = VYLO.World.getDiobs();
        // Get the tracked diob types
        this.trackedInterfaces = worldDiobsInFrame.filter((pElement) => { return pElement.baseType === 'Interface'; });
        this.trackedParticles = worldDiobsInFrame.filter((pElement) => { return pElement.baseType === 'Particle'; });
        this.trackedDiobs = worldDiobsInFrame.filter((pElement) => { return pElement.baseType === 'Diob'; });
        this.trackedMovables = worldDiobsInFrame.filter((pElement) => { return pElement.baseType === 'Movable'; });
        this.trackedMobs = worldDiobsInFrame.filter((pElement) => { return pElement.baseType === 'Mob'; });
        this.trackedTiles = worldDiobsInFrame.filter((pElement) => { return pElement.baseType === 'Tile'; });
        // Update DOM
        this.updateDOM();
    }

    updateDOM() {

    }

}

export const DiobManager = new DiobManagerSingleton();