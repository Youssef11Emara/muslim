
// function updateRamadanTimer() {
//     const ramadanEnd = new Date('2025-04-08T23:59:59'); // نهاية رمضان ليلة 29 رمضان
//     const now = new Date();
//     const diff = ramadanEnd - now;
    
//     if (diff > 0) {
//         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
//         document.getElementById('ramadan-timer').textContent = `انتهاء رمضان بعد: ${days} يوم و ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية`;
//     } else {
//         document.getElementById('ramadan-timer').textContent = "انتهى رمضان!";
//     }
// }

// setInterval(updateRamadanTimer, 1000);
// updateRamadanTimer();

// setInterval(updateRamadanTimer, 1000);
// updateRamadanTimer();
// // ✅ حديث نبوي عشوائي
// const ahadith = [
//     "قال رسول الله ﷺ: إنما الأعمال بالنيات وإنما لكل امرئ ما نوى",
//     "قال رسول الله ﷺ: لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
//     "قال رسول الله ﷺ: من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت"
// ];

// document.getElementById("hadith").innerText = ahadith[Math.floor(Math.random() * ahadith.length)];

// // ✅ أذكار متغيرة كل دقيقة
// const azkarList = [
//     "سبحان الله وبحمده سبحان الله العظيم",
//     "اللهم صلِّ على سيدنا محمد",
//     "أستغفر الله العظيم وأتوب إليه"
// ];

// function updateAzkar() {
//     document.getElementById("azkar").innerText = azkarList[Math.floor(Math.random() * azkarList.length)];
// }

// setInterval(updateAzkar, 60000);
// updateAzkar();

// // ✅ ورد قرآني يومي
// const quranAyat = [
//     "إِنَّ مَعَ الْعُسْرِ يُسْرًا (الشرح 6)",
//     "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ (النور 35)",
//     "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (الشرح 5)"
// ];

const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // حفظ التفضيلات في LocalStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// عند تحميل الصفحة، استرجاع الوضع المحفوظ
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
