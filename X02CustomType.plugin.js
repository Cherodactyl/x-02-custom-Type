/**
 * @name X02CustomType
 * @author Hime
 * @version 1.0.1
 * @description Custom typing sounds using LADS-inspired effects
 */

module.exports = (() => {
    return class X02CustomType {
        constructor() {
            this.typingSounds = [
                "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/piano_note_1.mp3",
                "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/piano_note_2.mp3",
                "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/piano_note_3.mp3",
                "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/piano_note_4.mp3",
                "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/piano_note_5.mp3",
                "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/piano_note_6.mp3"
            ];
            this.enterSound = "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/Shine.m4a";
            this.backspaceSound = "https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/Select.m4a";
        }

        start() {
            console.log("[X02CustomType] Plugin started.");
            document.addEventListener("keydown", this.playSound);
        }

        stop() {
            document.removeEventListener("keydown", this.playSound);
        }

        playSound = (e) => {
            let audioSrc = null;
            if (e.key === "Enter" && !e.shiftKey) {
                audioSrc = this.enterSound;
            } else if (e.key === "Backspace") {
                audioSrc = this.backspaceSound;
            } else if (e.key.length === 1) {
                const random = Math.floor(Math.random() * this.typingSounds.length);
                audioSrc = this.typingSounds[random];
            }
            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.volume = 0.5;
                audio.play().catch(err => console.warn("[X02CustomType] Audio failed:", err));
            }
        }
    };
})();