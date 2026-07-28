const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        cursor.style.width = "50px";
        cursor.style.height = "50px";

    });

    link.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";

    });

});