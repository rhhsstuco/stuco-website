<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Jean Augustine"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 1"
    index={1}
    question="Who was the first Black woman to be elected to the Canadian Parliament??"
    nextLocation="Go to the small gym"
    {correctAnswers}
/>

