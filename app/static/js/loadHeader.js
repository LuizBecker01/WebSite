document.addEventListener("DOMContentLoaded", function () {
    fetch("../static/components/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o header: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error(error));
});
