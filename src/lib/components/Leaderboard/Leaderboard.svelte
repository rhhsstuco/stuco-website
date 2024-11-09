<script lang="ts">
	/** The leaderboard component which displays the point total and rankings for grade wars. */
    
	import type { RankColor } from "$lib/models/GradePoints.model";
	import type GradePoint from "$lib/models/GradePoints.model";
	import GradePosition from "./GradePosition.svelte";

	interface Props {
		gradeColors: RankColor[];
		gradePoints: GradePoint[];
	}

	let { gradeColors, gradePoints }: Props = $props();
</script>

<section class="leaderboard">
	{#each gradePoints as gradePoint, i}
		<GradePosition {gradePoint} position={i + 1} color={gradeColors[i]}/>
	{/each}
</section>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	.leaderboard {
		--font-size-position: 4rem;
		--font-size-grade: 2rem;
		--font-size-points: 2rem;

		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@include exports.media-medium {
		.leaderboard {
			--font-size-position: 3rem;
			--font-size-grade: 1.5rem;
			--font-size-points: 1.5rem;

			gap: 1.75rem
		}
	}

	@include exports.media-smallest {
		.leaderboard {
			--font-size-position: 2.25rem;
			--font-size-grade: 1.125rem;
			--font-size-points: 1.125rem;

			gap: 1.5rem;
		}
	}
</style>
