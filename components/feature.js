class Princi extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <div class="w-full flex flex-col items-center">
        <img class="w-40 h-40 rounded-full object-cover" src="https://img.freepik.com/premium-photo/elearning-3d-render-icon-illustration_726846-3416.jpg?w=740" alt="">
        <p class="text-xl text-white font-bold ">600+</p>
        <p class="text-xl text-gray-500 font-bold">Courses</p>
        </div>
    `;
  }
}

customElements.define("my-circle", Princi);
