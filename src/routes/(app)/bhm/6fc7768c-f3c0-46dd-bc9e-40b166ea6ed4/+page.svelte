<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Justice Murray Sinclair", "Murray Sinclair"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 2"
    index={2}
    question="Who was the first Black Chief Justice person in Canada?"
    nextLocation="Go to the room 2029"
    {correctAnswers}
/>

