<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Anderson Ruffin Abbott"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 9"
    index={9}
    question="Who was the first Black Canadian to earn a medical degree?"
    nextLocation="Go to the stuco office"
    {correctAnswers}
/>

