<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Mathieu Da Costa"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 3"
    index={3}
    question="Who was the first Black person known to have visited Canada?"
    nextLocation="Go to the large gym"
    {correctAnswers}
/>

