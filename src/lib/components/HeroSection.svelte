<script>
    import bookCover from "$assets/book_cover.png";
    import phoneCover from "$assets/phone_cover.png";
    import { Button } from "$components";

    let {children} = $props();
</script>

<section class ="hero">
    <div class="hero-showcase text-center bold">
        <h1 class="purple">Move to</h1>
        <h1 class="purple mb-xs">Spain</h1>
        <h4 class="italic semi-bold">The land of the sun and lazy people</h4>
        <img class="book-cover" src={bookCover} alt="" />
        <img class="phone-cover" src={phoneCover} alt="" />
    </div>
    <div class = "hero-text white text-center">
        {#if children}
        {@render children()}
        {:else}
        <h1>THIS EBOOK WILL</h1>
        <h1>SAVE YOU MONEY,</h1>
        <h1 class="mb-m">TIME & NERVES</h1>
        <p class="light-grey mb-l">My name is Íñigo Montoya. You killed my father, prepare to...
            right, you don't live in the same country. That can be a little problem... Fear not! I wrote this book to help you relocate
            to the wonderful land of España so we can finally have our righteous duel.
        </p>
        <Button>Purchase for $9.99</Button>
        {/if}
    </div>
</section>

<style>
    .hero{
        display: flex;
        height: 100vh;
        overflow-y: hidden;
    }
    .hero-showcase
    {
        position: relative;
        width: 50%;
        padding: 100px 16px 0 16px;
        background: linear-gradient(
            135deg,
            #e2cbff,
            #e2cbff 25%,
            #deeaff 50%,
            #ece5ff 75%,
            #927bce
        );
    }
    .hero-text
    {
        padding: 100px 5%;
        width: 50%;
        background-color: black;
    }
    .book-cover
    {
        position: absolute;
        right: 2%;
        bottom: 0;
        width: 65%;
        transform: translateY(30%);
    }
    .phone-cover
    {
        position: absolute;
        right: 52%;
        bottom: 0;
        width: 35%;
        transform: translateY(25%);
    }
</style>