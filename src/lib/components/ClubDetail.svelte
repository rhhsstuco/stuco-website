<script lang="ts">
	/** Club card in the club display*/

	
	import type SchoolClub from "$lib/models/SchoolClub.model";
  	import { blur, crossfade, fade } from "svelte/transition";
	import Picture from "./Picture.svelte";
  	import { quintOut } from "svelte/easing";
  import flip from "$lib/actions/flip";


	export let club: SchoolClub;
	export let selected: boolean = false;

	$: useRainbow = club.bannerColor === "rainbow";
</script>

<div class="club__container" class:selected={selected}>
	<button class="club" on:click>
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
					<a href={club.instagramURL} target="_blank" rel="noopener noreferrer" on:click|stopPropagation={console.log}>
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
		<div class="club__info-container">
			<div class="club__info club__info--front">
				<a href={club.instagramURL} target="_blank" rel="noopener noreferrer" on:click|stopPropagation={console.log}>
					<h2 class="club__info__title">
						{club.name}
					</h2>
				</a>
				<span class="club__info__room">
					{club.room}
				</span>
				<span class="club__info__meeting-time">
					{club.meetingTime}
				</span>
			</div>
			<div class="club__info club__info--back">
				<p class="club__info__desc">
					{club.description}
				</p>
			</div>
		</div>
	</button>
</div>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	.club {
		--transition-time: 0.6s;

		all: unset;

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

			transition: transform 0ms calc(var(--transition-time) / 4);

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

	.club__container {
		background-color: transparent;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	.club__container.selected .club {
		transform: rotateY(180deg);
	}

	.club {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform var(--transition-time);
		transform-style: preserve-3d;
	}

	.club__info {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;

		grid-row: 1 / 1;
		grid-column: 1 / 1;

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

		.club__info__desc {
			font-size: var(--club-description-font-size, 1rem);
			color: var(--color-darker-2);
		}
	}

	.club__info--front, .club__info--back {
		transition: visibility 0ms calc(var(--transition-time) / 4);
	}

	.club__info--back > .club__info__desc {
		transform: rotateY(180deg);
	}

	.club__container.selected .club__banner__icon {
		transform: rotateY(180deg);
	}

	.club__container.selected .club__info--front {
		visibility: hidden;
	}

	.club__container:not(.selected) .club__info--back {
		visibility: hidden;
	}

	.club__info-container {
		display: grid;
	}

	@include exports.media-small {
		.club {
			min-width: 14rem;
		}
	}

	@media (prefers-reduced-motion) {
		.club__info--front, .club__info--back {
			transition: none;
		}

		.club__banner .club__banner__icon {
			transition: none;
		}

		.club {
			transition: none;
		}
	}
</style>
