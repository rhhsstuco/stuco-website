<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Lincoln Alexander"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 2"
    index={2}
    question="Which Black Canadian politician became the first Black federal member of Parliament in 1968?"
    nextLocation="Go to room 2029"
    {correctAnswers}
/>

