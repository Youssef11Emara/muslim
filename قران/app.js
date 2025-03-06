
const searchBox = document.getElementById("search-box");
const resultsBox = document.getElementById("results");

// الأقسام المتاحة في الصفحة
const sections = [
    { name: "سورة الفاتحة", id: "1" },
    { name: " سورة البقره", id: "2" },
    { name: "  سورة ال عمران ", id: "3" },
    { name: "سورة النساء", id: "4" },
    { name: "سورة المائدة", id: "5" },
    { name: "سورة الانعام", id: "6" },
    { name: "سورة الاعراف", id: "7" },
    { name: "سورة الانفال", id: "8" },
    { name: "سورة التوبة", id: "9" },
    { name: "سورة يونس", id: "10" },
    { name: "سورة هود", id: "11" },
    { name: "سورة يوسف", id: "12" },
    { name: "سورة الرعد", id: "13" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" }
    
];

searchBox.addEventListener("input", function() {
    const query = this.value.trim().toLowerCase();
    resultsBox.innerHTML = "";
    if (query.length >= 2) {
        const filteredSections = sections.filter(section => 
            section.name.toLowerCase().includes(query)
        );

        if (filteredSections.length > 0) {
            resultsBox.style.display = "block";
            filteredSections.forEach(section => {
                const div = document.createElement("div");
                div.classList.add("result-item");
                div.textContent = section.name;
                div.onclick = function() {
                    window.location.hash = section.id; // ينقل المستخدم للقسم
                    resultsBox.style.display = "none";
                    searchBox.value = "";
                };
                resultsBox.appendChild(div);
            });
        } else {
            resultsBox.style.display = "none";
        }
    } else {
        resultsBox.style.display = "none";
    }
});

document.addEventListener("click", function(event) {
    if (!searchBox.contains(event.target) && !resultsBox.contains(event.target)) {
        resultsBox.style.display = "none";
    }
});