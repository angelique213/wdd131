import recipes from "./recipes.mjs";

const resultsEl = document.querySelector("#results");
const form = document.querySelector("#searchForm");
const qInput = document.querySelector("#q");

// 1) random number function
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// 2) random recipe function
function getRandomRecipe(list) {
  const index = getRandomNumber(list.length);
  return list[index];
}

// 3) rating template (your star builder)
function ratingTemplate(rating = 0) {
  const full = Math.max(0, Math.min(5, Math.floor(Number(rating))));
  const empty = 5 - full;

  const wrap = document.createElement("span");
  wrap.className = "rating";
  wrap.setAttribute("role", "img");
  wrap.setAttribute("aria-label", `Rating: ${rating} out of 5 stars`);

  const stars = "⭐".repeat(full) + "☆".repeat(empty);
  for (const ch of stars) {
    const s = document.createElement("span");
    s.textContent = ch;
    s.setAttribute("aria-hidden", "true");
    s.className = ch === "⭐" ? "icon-star" : "icon-star-empty";
    wrap.appendChild(s);
  }
  return wrap;
}

// 4) tags template
function tagsTemplate(tagsList = []) {
  const tags = document.createElement("div");
  tags.className = "tags";

  tagsList.forEach((t) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = t;
    tags.appendChild(chip);
  });

  return tags;
}

// 5) recipe template (card)
function recipeTemplate(r) {
  const article = document.createElement("article");
  article.className = "recipe-card";

  const img = document.createElement("img");
  img.src = r.image;
  img.alt = `${r.name} photo`;
  img.loading = "lazy";
  img.width = 800;
  img.height = 450;

  const content = document.createElement("div");
  content.className = "recipe-content";

  const tags = tagsTemplate(r.tags || []);
  const h2 = document.createElement("h2");
  h2.textContent = r.name;

  const stars = ratingTemplate(r.rating);

  const desc = document.createElement("p");
  desc.className = "recipe-desc";
  desc.textContent = r.description || "";

  content.append(tags, h2, stars, desc);
  article.append(img, content);
  return article;
}

// 6) render function
function render(list) {
  resultsEl.innerHTML = "";
  if (!list || !list.length) {
    const p = document.createElement("p");
    p.textContent = "No recipes found. Try a different search.";
    resultsEl.appendChild(p);
    return;
  }
  list.forEach((r) => resultsEl.appendChild(recipeTemplate(r)));
}

// 7) filter (you already had this — we can keep it)
function filterRecipes(q) {
  const n = q.trim().toLowerCase();
  if (!n) {
    return [getRandomRecipe(recipes)];
  }
  return recipes.filter((r) =>
    (r.name && r.name.toLowerCase().includes(n)) ||
    (r.tags && r.tags.some((t) => t.toLowerCase().includes(n)))
  );
}

// 8) init: run on page load
function init() {
  const randomRecipe = getRandomRecipe(recipes);
  render([randomRecipe]);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    render(filterRecipes(qInput.value));
  });

  qInput.addEventListener("input", () => {
    render(filterRecipes(qInput.value));
  });
}

init();
