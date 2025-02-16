class NoteItem extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._style = document.createElement("style");

    this._note = {
      id: "id-data",
      title: "title-data",
      body: "body-data",
      createdAt: "createdAt-data",
      archived: false,
    };
  }

  connectedCallback(){
    this.render()
  }

  setNote(values) {
    this._note["id"] = values.id;
    this._note["title"] = values.title;
    this._note["body"] = values.body;
    this._note["createdAt"] = values.createdAt;
    this._note["archived"] = values.archived;

    this.render()
  }

  updateStyle() {
    this._style.textContent = `
        :host {
            display: flex;
            flex-direction: column;
            background-color: #1d1d1d;
            padding: 10px;
            border-radius: 10px;
            padding: 10px;
            color: white;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }

        .container-isi {
            background-color: #373737;
            padding: 10px;
            border-radius: 10px;
            
        }

        h2 {
            transform: translateY(-5px);
            color: #d3d3d3;
            padding-bottom: 20px;
            border-bottom: 1px solid #373737;
            min-height: 50px
        }
        
        p {
          margin-left: 10px;
        }
        .container-isi p {
            margin-top: 10px;
            color: white;
            min-height: 100px;
        }

        .keterangan {
            display: flex;
            gap: 1rem;
        }
        `;
  }

  emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this.emptyContent();
    this.updateStyle();

    this._shadowRoot.appendChild(this._style);

    this.setAttribute("id-note", this._note.id);

    this._shadowRoot.innerHTML = `
    ${this._style.outerHTML}
                <h2>${this._note.title}</h2>
                <p>${this._note.createdAt} | ${this._note.body.length} Character</p> 
                <div class="container-isi">
                    <p>${this._note.body}</p>
                </div>
        `;
  }
}

customElements.define('note-item', NoteItem);