import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

type fediverse = {
    meta: {
        apiVersion: "eniehack/v0.1.0"
    },
    getShareLink(text: string, url?: string): Promise<string>;
}

interface Window {
    fediverse: fediverse
}

const getShareLink = (title: string, url: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        console.log(window.fediverse)
        if (typeof window.fediverse === "undefined") {
            reject("window.fediverse is undefined.");
            return;
        }
        let test = window.fediverse.getShareLink(title, url);
        console.log("test", test)
        resolve(
            test
        );
    })
}

@customElement("fediverse-share")
export class FediverseShareButton extends LitElement {
    static styles = css`
        a {
            display: block;
        }
    `;

    @property({type: String})
    title = document.title

    @property({type: String})
    url = document.URL

    render() {
        return html`
            <button @click="${this._openLink}">share</button>
            <p>powered by スルっとFediverseShare</p>
        `;
    }

    private async _openLink(ev: Event) {
        if (typeof window.fediverse === "undefined") {
            ("window.fediverse is undefined.");
            return;
        }
        let test = await window.fediverse.getShareLink(this.title, this.url);
        window.open(test, "mozillaTab");
        console.log(test);
    }

}