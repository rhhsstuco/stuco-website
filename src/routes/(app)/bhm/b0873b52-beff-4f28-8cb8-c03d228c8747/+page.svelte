<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["1967"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 6"
    index={6}
    question="In which year was the Toronto Caribbean Carnival (Caribana) first organized"
    nextLocation="Go to the guidance office"
    {correctAnswers}
/>

