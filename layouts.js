// Navbar dinamis
document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <nav>
        <div class="navbar-container">
            <div class="logo">EduLearn</div>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>  
    </nav>
    `;
    document.getElementById("navbar").innerHTML = navbar;

    // Footer dinamis
    const footer = `
    <footer>
        <p>&copy; 2025 EduLearn. All Rights Reserved.</p>
        <div class="footer-links">
            <a href="about.html">About</a> |
            <a href="courses.html">Courses</a> |
            <a href="contact.html">Contact</a>
        </div>
        <p>Follow us:
            <a href="#">Facebook</a> • 
            <a href="#">Twitter</a> • 
            <a href="#">Instagram</a>
        </p>
    </footer>
    `;
    document.getElementById("footer").innerHTML = footer;
});
