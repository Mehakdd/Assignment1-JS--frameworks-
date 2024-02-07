window.onload = function() {
    fetch("file.txt")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("fileContent").innerText = data;
        })
        .catch((error) => console.error("Error reading file:", error));
}
