<script lang="ts">
	/** Displays a StuCo member in a cart*/

	import DefaultProfilePicture from "$lib/images/default_pfp.png?format=avif;webp;png&w=400;800&as=picture";
  	import type StucoMember from "$lib/models/StucoMember.model";
  	import Picture from "./Picture.svelte";

	export let member: StucoMember;
	export let loading: "lazy" | "eager" = "eager";
</script>

<div class="member-card">
	<div class="member-card__photo">
		<Picture meta={member?.imageURL || DefaultProfilePicture} alt={member.name} sizes="(max-width: 800px) 400px, 1200px" {loading}/>
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
		--max-padding: 1rem;

		box-shadow: exports.$box-shadow;
		background-color: var(--color-light);
		padding: min(var(--max-padding), 5%);
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
		gap: 0.125rem;

		color: var(--color-dark);

		h2 {
			font-weight: bold;
			font-size: var(--name-font-size);
			text-align: center;
		}

		h3 {
			font-weight: 300;
			font-size: var(--position-font-size);
			color: var(--color-darker-1);
		}
	}

	@media (max-width: 92rem) {
		.member-card {
			--name-font-size: 1.125rem;
			--position-font-size: 0.95rem;
		}
	}

	@include exports.media-largest {
		.member-card {
			--max-padding: 0.5rem;
		}
	}
</style>