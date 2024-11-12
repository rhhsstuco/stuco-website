<script lang="ts">
	/** Displays a StuCo member in a card */

	// @ts-ignore
	import DefaultProfilePicture from "$lib/images/default_pfp.png?format=avif;webp;png&w=400;800&as=picture";
  	import type StucoMember from "$lib/models/StucoMember.model";
    import Card from "$lib/components/Card.svelte";
  	import Picture from "$lib/components/Picture.svelte";

	interface Props {
		member: StucoMember;
		loading?: "lazy" | "eager";
	}

	let { member, loading = "eager" }: Props = $props();
</script>

<Card>
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
</Card>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.member-card__photo {
		width: 100%;
		aspect-ratio: 1 / 1;
		position: relative;

		display: flex;
		flex-direction: row;
		margin-bottom: 0.5rem;

		&::after {
			content: '';
			box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
			width: 100%;
			height: 100%;
			position: absolute;
			inset: 0;
		}
	}

	.member-card__text {
        --name-font-size: 10.25rem;
		--position-font-size: 1rem;
        
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
		.member-card__text {
			--name-font-size: 1.125rem;
			--position-font-size: 0.95rem;
		}
	}
</style>