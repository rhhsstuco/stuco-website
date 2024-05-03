<script lang="ts">
  import type SchoolClub from "$lib/models/SchoolClub.model";
  import Picture from "./Picture.svelte";

  export let club: SchoolClub;

  $: useRainbow = club.bannerColor === "rainbow";

</script>

<div class="club">
	<div class="club__banner" style:background-color={club.bannerColor} class:rainbow={useRainbow}>
		<!-- Rainbow! -->
		{#if useRainbow}
			<div style:background-color="#ff3c40"></div>
			<div style:background-color="#fe9843"></div>
			<div style:background-color="#feef54"></div>
			<div style:background-color="#00802d"></div>
			<div style:background-color="#1558f5"></div>
			<div style:background-color="#851f86"></div>
		{/if}
		<div class="club__banner__icon">
			{#if club.instagramURL}
				<a href={club.instagramURL} target="_blank" rel="noopener noreferrer">
					<Picture meta={club.imageURL} alt={club.name}/>
				</a>
			{:else}
				<Picture meta={club.imageURL} alt={club.name}/>
			{/if}
		</div>
		<div class="club__banner__insta">
			<i class="ri-instagram-line"></i>
		</div>
	</div>
	<div class="club__info">
		<a href={club.instagramURL} target="_blank" rel="noopener noreferrer">
			<h2 class="club__info__title">
				{club.name}
			</h2>
		</a>
		<div>
			<span class="club__info__room">
				{club.room}
			</span>
			<span class="club__info__meeting-time">
				{club.meetingTime}
			</span>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	.club {
		font-family: "Poppins", sans-serif;

		box-shadow: exports.$box-shadow;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		background-color: var(--color-light);

		min-height: 18rem;
	}

	.club__banner {
		position: relative;
		height: 5.75rem;

		.club__banner__icon {
			position: absolute;

			aspect-ratio: 1 / 1;

			border: 0.5rem solid var(--color-light);
			border-radius: 50%;
			overflow: hidden;
			box-shadow: exports.$box-shadow;

			top: -28%;
			left: -12.5%;

			width: 8rem;
			height: 8rem;
		}

		&.rainbow {
			display: flex;
			flex-direction: column;

			> div {
				flex-grow: 1;
			}
		}
	}

	.club__info {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;

		font-family: 'Inter', sans-serif;

		padding: 1rem;

		a {
			all: unset;

			&:hover {
				cursor: pointer;
			}
		}

		.club__info__title {
			font-size: var(--club-title-font-size, 2rem);
			font-weight: 900;
			color: var(--color-dark);

			font-family: 'Poppins', sans-serif;
		}

		.club__info__room,
		.club__info__meeting-time {
			font-size: var(--club-subtitle-font-size, 1.25rem);
			color: var(--color-darker-1);


			display: flex;
			flex-direction: row;
			align-items: center;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}
	}

	@include exports.media-small {
		.club {
			min-width: 14rem;
		}
	}
</style>
