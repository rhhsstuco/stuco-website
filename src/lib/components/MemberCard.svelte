<script lang="ts">
  	import Image from "./Image.svelte";

	export let member: StucoMember;

</script>

<div class="member-card">
	<div class="member-card__photo">
		<Image src={member.imageURL} alt={member.name} loading="lazy"/>
	</div>
	<div class="member-card__text">
		<h2 class="member-card__text__name">
			{member.name}
		</h2>
		<h3 class="member-card__text__position">
			{member.position}
		</h3>
	</div>
</div>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.member-card {
		--name-font-size: 1.25rem;
		--position-font-size: 1rem;

		box-shadow: exports.$box-shadow;
		background-color: var(--color-light);
		padding: 1rem;
	}

	.member-card__photo {
		width: 100%;
		aspect-ratio: 1 / 1;
		position: relative;

		display: flex;
		flex-direction: row;

		&::after {
			content: '';
			box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
			width: 100%;
			height: 100%;
			position: absolute;
			inset: 0;
		}

		margin-bottom: 0.5rem;
	}

	.member-card__text {
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			font-weight: bold;
			font-size: var(--name-font-size);
		}

		h3 {
			font-weight: 300;
			font-size: var(--position-font-size);
		}
	}
</style>