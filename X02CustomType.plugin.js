/**
 * @name x02customType
 * @version 1.0.0
 * @description Custom typing sounds for Discord (X-02 Theme)
 * @author Cherodactyl
 * @updateUrl https://github.com/Cherodactyl/x-02-custom-Type/raw/main/x02customType.plugin.js
 * @source https://github.com/Cherodactyl/x-02-custom-Type
 * @license MIT
 */


const soundUrls = {
  default: "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/select.mp3",
  enter: "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/finish.mp3",
  backspace: "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/backspace.mp3"
};

module.exports = class {
  constructor() {
    this.sounds = {};
    this.boundKeyHandler = this.handleKey.bind(this);
  }

  loadSound(name, url) {
    const audio = new Audio(url);
    audio.volume = 0.5;
    this.sounds[name] = audio;
  }

  playSound(name) {
    if (this.sounds[name]) {
      const audio = this.sounds[name].cloneNode();
      audio.play().catch(() => {});
    }
  }

  handleKey(e) {
    if (e.key === "Enter") this.playSound("enter");
    else if (e.key === "Backspace") this.playSound("backspace");
    else if (e.key.length === 1) this.playSound("default");
  }

  start() {
    this.loadSound("default", soundUrls.default);
    this.loadSound("enter", soundUrls.enter);
    this.loadSound("backspace", soundUrls.backspace);
    document.addEventListener("keydown", this.boundKeyHandler);
  }

  stop() {
    document.removeEventListener("keydown", this.boundKeyHandler);
  }
};
