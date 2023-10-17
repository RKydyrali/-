document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const groupCountInput = document.getElementById("groupCount");
    const randomizeButton = document.getElementById("randomizeButton");
    const result = document.getElementById("result");

    function generateRandomVariants() {
        result.innerHTML = "";
        const names = nameInput.value.split("\n").filter(name => name.trim() !== "");
        const groupCount = parseInt(groupCountInput.value);

        if (names.length > 0 && groupCount > 0) {
            const groups = new Array(groupCount).fill().map(() => []);
            for (let i = 0; i < names.length; i++) {
                const groupName = i % groupCount;
                groups[groupName].push(names[i]);
            }

            groups.forEach((group, index) => {
                const groupElement = document.createElement("div");
                groupElement.innerHTML = `<h3>Группа ${index + 1}</h3><ul>`;
                group.forEach(name => {
                    groupElement.innerHTML += `<li>${name}</li>`;
                });
                groupElement.innerHTML += `</ul>`;
                result.appendChild(groupElement);
            });
        } else {
            result.innerHTML = "Введите имена и выберите количество групп.";
        }
    }

    randomizeButton.addEventListener("click", generateRandomVariants);

    // Генерировать первый вариант при загрузке страницы
    generateRandomVariants();
});
