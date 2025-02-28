<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Carrie Best"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 4"
    index={4}
    question="Co-founder of The Clarion, one of the first newspapers in Nova Scotia owned and published by Black Canadians"
    nextLocation="Go to room 2030"
    {correctAnswers}
/>

