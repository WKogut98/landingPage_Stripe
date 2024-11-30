<script>
    import authorPic from "$assets/inigo.jpg"
</script>

<section class="landing-page-section">
    <h2 class="mb-s">About the author</h2>
    <div class="author-container">
        <div class="author-text">
            <p class="mb-xs">
            Íñigo Montoya is a passionate Spanish author known for his 
            expertise in finance and travel. His best-selling books range 
            from practical guides on mastering personal finance to 
            adventurous travel companions, offering readers a unique blend 
            of wealth management and cultural exploration.
            </p><p>Beyond his 
            literary pursuits, Íñigo is an avid fencer with a deep interest 
            in historical duels and hidden treasures, themes that often weave 
            into his writing. With a flair for adventure and a sharp mind for 
            strategy, Montoya invites readers to navigate both the world of 
            finance and the thrill of discovery with precision and daring.
            </p>
        </div>
        <img src={authorPic} alt="Author Íñigo Montoya"/>
    </div>
</section>

<style>
    .author-container
    {
        display: flex;
        justify-content: space-between;
    }
    .author-container img{
        width: 40%;
        border: 6px solid black;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
    }
    .author-text
    {
        width: 55%;
    }
</style>