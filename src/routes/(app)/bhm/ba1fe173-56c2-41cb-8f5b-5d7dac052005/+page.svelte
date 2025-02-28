<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["William Hall"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 7"
    index={7}
    question="Who was the first Black Canadian recipient of the Victoria Cross?"
    nextLocation="Go to the music room"
    {correctAnswers}
/>

