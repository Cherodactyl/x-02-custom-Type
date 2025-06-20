/**
 * @name x02CustomType
 * @version 1.0.0
 * @description Custom typing sounds for Discord (X-02 Theme)
 * @author Cherodactyl
 * @description Custom typing sounds with specific bindings for typing, backspace, and enter (on message send only).
 * @updateUrl https://github.com/Cherodactyl/x-02-custom-Type/raw/main/x02customType.plugin.js
 * @source https://github.com/Cherodactyl/x-02-custom-Type
 * @license MIT
 */

class x02CustomType {
    constructor() {
        this.keyAudio = new Audio("https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/select.mp3");
        this.backspaceAudio = new Audio("https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/backspace.mp3");
        this.enterAudio = new Audio("https://github.com/Cherodactyl/x-02-custom-Type/raw/refs/heads/main/finish.mp3");
        this.typingHandler = this.typingHandler.bind(this);
    }

    start() {
        document.addEventListener("keydown", this.typingHandler);
    }

    stop() {
        document.removeEventListener("keydown", this.typingHandler);
    }

    typingHandler(e) {
        const activeElement = document.activeElement;
        const isTextInput = activeElement && (
            activeElement.tagName === "TEXTAREA" ||
            (activeElement.tagName === "INPUT" && activeElement.type === "text") ||
            activeElement.isContentEditable
        );

        if (!isTextInput) return;

        if (e.code === "Backspace") {
            this.playAudio(this.backspaceAudio);
        } else if (e.code === "Enter") {
            if (activeElement.value?.trim()) {
                this.playAudio(this.enterAudio);
            }
        } else if (e.key.length === 1) {
            this.playAudio(this.keyAudio);
        }
    }

    playAudio(audio) {
        const clone = audio.cloneNode();
        clone.volume = 0.8;
        clone.play().catch(() => {});
    }
}

module.exports = x02CustomType;
