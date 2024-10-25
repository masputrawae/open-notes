// Toggle Header visibility
document.getElementById('toggleHeader').addEventListener('click', function() {
  const header = document.getElementById('header');
  if (header.style.display === 'none') {
    header.style.display = 'flex';  // Show header
  } else {
    header.style.display = 'none';  // Hide header
  }
});

// Toggle Sidebar visibility
document.getElementById('toggleSidebar').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'flex';  // Show sidebar
  } else {
    sidebar.style.display = 'none';  // Hide sidebar
  }
});