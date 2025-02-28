<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["No. 2 Construction Battalion"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 5"
    index={5}
    question="The only Canadian battalion composed of Black soldiers to serve in World War I"
    nextLocation="Go to the whiteboard tables"
    {correctAnswers}
/>

