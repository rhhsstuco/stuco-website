<script lang="ts">
    import { goto } from "$app/navigation";

    interface Props {
        title: string;
        question: string;
        correctAnswers: Set<string>;
        nextLocation: string;
        index: number
    }

    let { title, question, correctAnswers, nextLocation, index }: Props = $props();

    $effect(() => {
        if (index > 1) {
            const prevTime = localStorage.getItem(`q${index - 1}`);

            if (!prevTime) {
                goto("/bhm/start");
            }
        }
    })

    let status = $state<boolean | null>(null);
    let text = $state<string>("");
    let time = $state<number | null>(null);

    function onSubmit(e: SubmitEvent) {
        e.preventDefault();

        if (correctAnswers.has(text.trim().toLocaleLowerCase())) {
            status = true;

            const date = Date.now();

            localStorage.setItem(`q${index}`, date.toString())

            if (index === 10) {
                const startTime = localStorage.getItem("q1");

                if (!startTime) {
                    goto("/bhm/start");
                }

                time = Math.round((date - (Number(startTime))) / 1000);
            }
        } else {
            status = false;
        }

        text = "";
    }
</script>

<main>
    <h1>
        {title}
    </h1>
    <div class="control">
        {#if status === null}
            <p>{question}</p>
            <form
                class="search"
                onsubmit={onSubmit}
            >
                <input
                    type="text" bind:value={text}
                    placeholder="Take your guess"
                >
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button type="submit">
                    <i class="ri-corner-down-left-line"></i>
                </button>
            </form>
        {:else if status === true}
            <span class="correct">
                {nextLocation}
                {#if time}
                    in {time} seconds
                {/if}
            </span>
        {:else}
            <button onclick={() => status = null} class="incorrect">
                <span>Wrong.</span>
                <span>Try Again?</span>
            </button>
        {/if}
    </div>
</main>

<style lang="scss">
    @use "../../styles/exports.scss" as exports;

    main {
        width: clamp(16rem, 50%, 36rem);
        height: calc(100lvh - 6rem);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        font-family: 'Inter', sans-serif;
    }

    h1 {
        margin-top: 2rem;
        @include exports.header;
    }

    p {
        color: var(--color-darker-2);
		font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
    }

    .search {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--color-light);
        color: var(--color-dark);
        box-shadow: 0 4px 4px var(--color-box-shadow);
        padding: 1rem 0.75rem 1rem 1rem;
        gap: 0.75rem;
        
        button {
            all: unset;
            
            &:hover {
                cursor: pointer;
            }
        }

        input {
            all: unset;
            flex-grow: 1;
        }

        i {
            font-size: 1.25rem;
        }
    }

    .control {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        
        margin-bottom: 10rem;
    }

    .incorrect {
        all: unset;
        @include exports.header;

        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;

        transition: all 200ms ease-out;

        color: hsl(10, 100%, 40%);

        span {
            display: inline-block;
            width: 100%;
            text-align: center;
        }

        &:hover {
            translate: 0 -0.125rem;
            cursor: pointer;
        }
    }

    .correct {
        @include exports.header;
        color: hsl(110, 100%, 35%);
    }

</style>