document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.querySelector('.main-menu');
    const container = document.querySelector('.container');

    // Fungsi untuk mengaktifkan sidebar hanya di perangkat seluler
    function updateSidebarState() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            container.classList.remove('sidebar-active');
        } else {
            sidebar.classList.add('active');
            container.classList.add('sidebar-active');
        }
    }

    // Menginisialisasi status sidebar berdasarkan ukuran layar saat pertama kali dimuat
    updateSidebarState();

    // Menangani klik pada tombol toggle
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active'); // Toggle class 'active' pada sidebar
        container.classList.toggle('sidebar-active'); // Toggle class 'sidebar-active' pada container
    });

    // Menyegarkan status sidebar saat ukuran layar berubah
    window.addEventListener('resize', updateSidebarState);
});

async function displayWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=City&appid=YOUR_API_KEY');
    const data = await response.json();
    document.querySelector('.weather').innerText = `${data.weather[0].main} | ${data.main.temp}°C`;
}
displayWeather();
