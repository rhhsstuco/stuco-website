<script lang="ts">
  import type { RankColor } from "$lib/models/GradePoints.model";
  import type GradePoint from "$lib/models/GradePoints.model";

  export let position: number;
  export let gradePoint: GradePoint;
  export let color: RankColor;

  $: effectiveColor = gradePoint.points === 0 ? "none" : color;
</script>

<div class="grade-position"
	class:bg-gold={effectiveColor === 'gold'}
	class:bg-silver={effectiveColor === 'silver'}
	class:bg-bronze={effectiveColor === 'bronze'}
>
  <div class="grade-position__info">
	<div class="grade-position__position">
	  {position}.
	</div>
	<div class="grade-position__grade">
		Grade {gradePoint.grade}
	</div>
  </div>
  <div class="grade-position__points">
	{gradePoint.points} Point{gradePoint.points !== 1 ? "s" : ""}
  </div>
</div>

<style lang="scss">
	@use '../../../styles/exports.scss' as exports;

	.grade-position {
		--fs-position: var(--font-size-position, 4rem);
		--fs-grade: var(--font-size-grade, 2rem);
		--fs-points: var(--font-size-points, 2rem);

		font-family: "Poppins", sans-serif;
		color: var(--color-light-2);

		background: var(--color-primary);
		background: linear-gradient(
			135deg,
			var(--color-primary) 50%,
			var(--color-gradient-light) 100%
		);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		display: flex;
		flex-direction: row;

		padding: 1rem;

		border-radius: 3px;
		overflow: hidden;
		box-shadow: exports.$box-shadow;
	}

	.grade-position__info {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2rem;
	}

	.grade-position__position {
		font-size: var(--fs-position);
		min-width: 5rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-weight: bold;
	}

	.grade-position__grade {
		font-size: var(--fs-grade);
	}

	.grade-position__points{
		font-size: var(--fs-points);
	}

	.bg-gold {
		background: hsl(43, 74%, 42%);
		background: linear-gradient(
			135deg,
			hsl(43, 74%, 42%) 40%,
			hsl(43, 74%, 60%) 100%
		);
	}

	.bg-silver {
		background: hsl(0, 0%, 55%);
		background: linear-gradient(
			135deg,
			hsl(0, 0%, 55%) 40%,
			hsl(0, 0%, 68%) 100%
		);
	}

	.bg-bronze {
		background: hsl(26, 65%, 40%);
		background: linear-gradient(
			135deg,
			hsl(26, 65%, 40%) 40%,
			hsl(26, 65%, 55%) 100%
		);
	}

	@include exports.media-small {
		.grade-position__position {
			min-width: 2.75rem;
		}
	}
</style>