const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const genereting = () => {
  const minEl = document.querySelector("#min");
  const maxEl = document.querySelector("#max");
  const min = Number(minEl.value);
  const max = Number(maxEl.value);

  if (minEl.value === "" || maxEl.value === "") {
    alert("Пожалуйста, введите число от 1 до 20");
    return;
  }

  if (min > max) {
    alert("Минимальное значение должно быть меньше максимального");
    return;
  }
  const placeholder = document.querySelector("#placeholder");
  placeholder.textContent = getRandom(min, max);
};

const btnEl = document.querySelector("#generator");
btnEl.addEventListener("click", genereting);
