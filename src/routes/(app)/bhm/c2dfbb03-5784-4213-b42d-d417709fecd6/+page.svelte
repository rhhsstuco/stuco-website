<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    const correctAnswers = new Set(["Esi Edugyan"].map(str => str.toLocaleLowerCase()));
</script>

<Quiz
    title="Question 8"
    index={8}
    question="Her acclaimed novels 'Half-Blood Blues' and 'Washington Black' have both won the Giller Prize?"
    nextLocation="Go to the library"
    {correctAnswers}
/>

