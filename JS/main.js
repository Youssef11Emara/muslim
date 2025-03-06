
        const searchBox = document.getElementById("search-box");
        const resultsBox = document.getElementById("results");

        // الأقسام المتاحة في الصفحة
        const sections = [
            { name: "قران كريم", id: "quran" },
            { name: "شهر رمضان", id: "ramadan" },
            { name: "اذاكر الصباح ,اذكار المساء", id: "remembrances" },
            { name: "موعيد الصلاة , صلاة ", id: "prayer" },
            { name: "تلاوه", id: "recitation" }
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