document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.style.overflow = 'hidden'; 
    document.getElementById('home').style.display = 'flex'; 
    document.getElementById('about-section').style.display = 'none'; 
    document.getElementById('image-section').style.display = 'none'; 
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.style.overflow = 'auto'; 
    document.getElementById('home').style.display = 'none'; 
    document.getElementById('about-section').style.display = 'block'; 
    document.getElementById('image-section').style.display = 'none'; 
});

document.getElementById('menu-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.style.overflow = 'auto'; 
    document.getElementById('home').style.display = 'none'; 
    document.getElementById('about-section').style.display = 'none'; 
    document.getElementById('image-section').style.display = 'block';
});
