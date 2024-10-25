
    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.querySelector('.toggle-button');
        const sidebar = document.querySelector('.main-menu');
        const container = document.querySelector('.container');

        // Menangani klik pada tombol toggle
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('active'); // Toggle class 'active' pada sidebar
            container.classList.toggle('sidebar-active'); // Toggle class 'sidebar-active' pada container
        });
    });
