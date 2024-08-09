function showContent(section) {
    document.querySelectorAll('.content-section').forEach(function(content) {
        content.style.display = 'none';
    });

    document.getElementById(section).style.display = 'block';
    
    document.querySelectorAll('.buttons button').forEach(function(button) {
        button.classList.remove('active');
    });
    
    event.target.classList.add('active');
}
