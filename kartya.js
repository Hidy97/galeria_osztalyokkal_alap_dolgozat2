class Kartya {
    #kepem = {};
    constructor(kepem, index, szuloelem) {
        szuloelem.append("<div class='kartya'>");
        this.#kepem = kepem;
        this.tarolo = szuloelem.children("div:last-child");
        this.tarolo.append(`<img src="${this.#kepem.kep}" alt="">`);
        this.kepImg = this.tarolo.children("img");

        this.kepImg.on("click", () => {
            this.#kattintasTrigger();
        })
    }

    #kattintasTrigger(){
        const kepKatt = new CustomEvent("kepKatt", { detail: this })
        window.dispatchEvent(kepKatt);
        //console.log("katt")
    }
}
export default Kartya;
