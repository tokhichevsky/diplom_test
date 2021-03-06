export class Metronom {
  // private soundSrc = Sounds.Click;
  private audioContext: AudioContext;
  private tick: OscillatorNode;
  private tickVolume: GainNode;
  private soundHz = 900;

  public readonly intervalTime;
  public static readonly Status = {
    Started: "started",
    Stopped: "stopped",
    Initialized: "initialized",
    NotCreated: "not_created"
  };
  private interval = null;
  public status: string = Metronom.Status.NotCreated;

  constructor(beatsPerMinute?: number) {
    if (beatsPerMinute !== undefined) {
      this.intervalTime = 60 / beatsPerMinute;
    }
    this.status = Metronom.Status.Initialized;
    this.initAudio();
  }

  private initAudio() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.tick = this.audioContext.createOscillator();
    this.tickVolume = this.audioContext.createGain();

    this.tick.type = "sine";
    this.tick.frequency.value = this.soundHz;
    this.tickVolume.gain.value = 0;

    this.tick.connect(this.tickVolume);
    this.tickVolume.connect(this.audioContext.destination);
    this.tick.start(0);  // No offset, start immediately.
  }

  playClickSound() {
    const time = this.audioContext.currentTime;
    this.playClickSoundAtTime(time);
  }

  playClickSoundAtTime(time) {
    // Silence the click.
    this.tickVolume.gain.cancelScheduledValues(time);
    this.tickVolume.gain.setValueAtTime(0, time);

    // Audible click sound.
    this.tickVolume.gain.linearRampToValueAtTime(0.9, time + 0.001);
    this.tickVolume.gain.linearRampToValueAtTime(0, time + 0.001 + 0.01);
  }

  private createSoundInterval() {
    if (this.status === Metronom.Status.Started) {
      const currentTime = this.audioContext.currentTime;
      let currentTicksNum = 1;
      this.playClickSound();
      this.playClickSoundAtTime(currentTime + this.intervalTime);
      this.interval = setInterval(() => {
        currentTicksNum += 1;
        this.playClickSoundAtTime(currentTime + (currentTicksNum) * this.intervalTime);
      }, this.intervalTime * 1000);
    }
  }

  private createSoundRandomInterval() {
    if (this.status === Metronom.Status.Started) {
      setTimeout(() => {
        this.playClickSound();
        this.createSoundRandomInterval();
      }, 60 / ((0.05 + Math.random()) / 1.05 * 250) * 1000);
    }
  }

  start() {
    clearInterval(this.interval);
    this.status = Metronom.Status.Started;
    this.initAudio();

    this.createSoundInterval();
  }

  startRandom() {
    clearInterval(this.interval);
    this.status = Metronom.Status.Started;
    this.initAudio();
    this.createSoundRandomInterval();
  }

  stop() {
    this.status = Metronom.Status.Stopped;
    this.tickVolume.gain.value = 0;
    clearInterval(this.interval);
  }
}

export enum MetronomTypes {
  Random = "random",
  Normal = "normal"
}
