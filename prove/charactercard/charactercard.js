const character = {
    name: "Anjelis Vega",
    class: "Celestial Vanguard",
    level: 1,
    health: 100,
    image: "character.png",
    attacked() {
      this.health -= 20;
      if (this.health <= 0) {
        this.health = 0;
        alert(`${this.name} has fallen.`);
      }
    },
    levelUp() {
      this.level += 1;
    }
  };
  
  const saved = JSON.parse(localStorage.getItem("characterState") || "{}");
  if (typeof saved.level === "number") character.level = saved.level;
  if (typeof saved.health === "number") character.health = saved.health;
  
  function displayCharacter() {
    const main = document.querySelector(".card");
    main.innerHTML = `
      <img class="image" src="${character.image}" alt="${character.name}">
      <h2 class="name">${character.name}</h2>
      <div class="stats">
        <p><strong>Class:</strong> ${character.class}</p>
        <p><strong>Level:</strong> <span id="level">${character.level}</span></p>
        <p><strong>Health:</strong> <span id="health">${character.health}</span></p>
      </div>
      <div class="buttons">
        <button id="attackBtn">Attack</button>
        <button id="levelBtn">Level Up</button>
      </div>
    `;
  }
  
  displayCharacter();
  
  const levelEl = document.querySelector("#level");
  const healthEl = document.querySelector("#health");
  const attackBtn = document.querySelector("#attackBtn");
  const levelBtn = document.querySelector("#levelBtn");
  const submitForm = document.querySelector("#submitForm");
  
  if (character.health === 0) {
    attackBtn.disabled = true;
    attackBtn.textContent = "Defeated";
  }
  
  attackBtn.addEventListener("click", () => {
    character.attacked();
    healthEl.textContent = character.health;
    if (character.health === 0) {
      attackBtn.disabled = true;
      attackBtn.textContent = "Defeated";
    }
  });
  
  levelBtn.addEventListener("click", () => {
    character.levelUp();
    levelEl.textContent = character.level;
  });
  
  submitForm.addEventListener("submit", () => {
    localStorage.setItem("characterState", JSON.stringify({
      level: character.level,
      health: character.health
    }));
  });
  