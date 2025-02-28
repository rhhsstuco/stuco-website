<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Africville"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 10"
    index={10}
    question="In 2010, the mayor of Halifax apologized for the destruction of what historic Black community in the 1960s?"
    nextLocation="You win!"
    {correctAnswers}
/>

