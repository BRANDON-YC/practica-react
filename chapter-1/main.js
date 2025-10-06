const STORAGE_KEY = "todos:v1";

const state = {
  todos: load(),
  filter: "all",
};

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []; }
  catch { return []; }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
}

const elements = {
  form: document.querySelector("#todo-form"),
  input: document.querySelector("#todo-input"),
  list: document.querySelector("#todo-list"),
  countTotal: document.querySelector("#count-total"),
  countDone: document.querySelector("#count-done"),
  filters: document.querySelectorAll(".filters button"),
};

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = elements.input.value.trim();
  if (!text) return;
  state.todos.push({ id: crypto.randomUUID(), text, done: false });
  elements.input.value = "";
  render();
  save();
});

elements.filters.forEach(btn => {
  btn.addEventListener("click", () => {
    elements.filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.filter = btn.dataset.filter;
    render();
  });
});

function toggle(id) {
  const t = state.todos.find(t => t.id === id);
  if (t) t.done = !t.done;
  render();
  save();
}

function remove(id) {
  state.todos = state.todos.filter(t => t.id !== id);
  render();
  save();
}

function render() {
  const filtered = state.todos.filter(t => {
    if (state.filter === "pending") return !t.done;
    if (state.filter === "done") return t.done;
    return true;
  });

  elements.list.innerHTML = "";
  for (const t of filtered) {
    const li = document.createElement("li");
    li.className = "item" + (t.done ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = t.done;
    checkbox.addEventListener("change", () => toggle(t.id));

    const span = document.createElement("span");
    span.textContent = t.text;

    const del = document.createElement("button");
    del.textContent = "Eliminar";
    del.addEventListener("click", () => remove(t.id));

    li.append(checkbox, span, del);
    elements.list.append(li);
  }

  elements.countTotal.textContent = state.todos.length;
  elements.countDone.textContent = state.todos.filter(t => t.done).length;
}

render();
