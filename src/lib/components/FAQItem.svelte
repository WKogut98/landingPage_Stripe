<script>
    import chevronDown from "$assets/chevron-down.svg"
    let { faq, isExpanded, ...props } = $props();
</script>

<button class = "container" class:container-expanded={isExpanded} {...props}>
    <div class="question-and-ansqer">
        <p class="question mb-s">{faq.question}</p>
        <p class="answer">{faq.answer}</p>
    </div>
    <img src={chevronDown} alt="" />
</button>

<style>
    .container
    {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 12px 0;
        border-bottom: 1px solid grey;
        text-align: left;
    }
    .question-and-ansqer
    {
        padding-right: 150px;
        flex-grow: 1;
    }
    .answer{
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: 
            max-height 0.3s ease-out,
            opacity 0.3s ease-out;
    }
    .question
    {
        font-weight: 700;
    }
    button img
    {
        width: 24px;
        height: 24px;
        transition: transform 0.3 linear;
    }
    .container-expanded img
    {
        transform: rotate(180deg);
    }
    .container-expanded .answer
    {
        max-height: unset;
        opacity: 1;
        transition: 
            max-height 0.3s ease-out,
            opacity 0.3s ease-out;
    }
</style>