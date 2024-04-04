<script lang="ts">
  	import type GradePoint from "$lib/models/GradePoints.model";

	export let gradePoint: GradePoint;
</script>

<div class="grade-position">
	<div class="grade-position__test-tube">
		<div class="grade-position__test-tube__points" style:height={`${gradePoint.points * 3}%`}>
			{gradePoint.points}
		</div>
	</div>
</div>

<style lang="scss">
	.grade-position__test-tube {
		$border-radius: 5rem;

		position: relative;
		overflow: hidden;

		width: 8rem;
		height: 30rem;

		border-bottom-right-radius: $border-radius;
		border-bottom-left-radius: $border-radius;

		border: 8px solid black;
	}

	.grade-position__test-tube__points {
		position: absolute;

		left: 0;
		right: 0;
		bottom: 0;

		background-color: var(--color-primary);

		font-family: "Poppins";
		font-size: 4rem;
		font-weight: bold;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>