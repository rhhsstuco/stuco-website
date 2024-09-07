<script lang="ts">
	/** Club card in the club display*/

	
	import type SchoolClub from "$lib/models/SchoolClub.model";
  	import Confetti from "svelte-confetti";
	import Picture from "./Picture.svelte";


	export let club: SchoolClub;
	let selected: boolean = false;
	let iconSpin: boolean = false;

	$: useRainbow = club.bannerColor === "rainbow";

	function onIconClick() {
		if (iconSpin) {
			iconSpin = false;
			return
		}

		iconSpin = true;

		setTimeout(() => iconSpin = false, 2500)
	}

	
</script>

<div
	class="club__container"
	class:selected={selected}
	aria-roledescription="flipping card"
>
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
			<button
				class="club__banner__icon"
				class:icon-spin={iconSpin}
				on:click={onIconClick}
			>
				{#if club.instagramURL}
					<!-- <a href={club.instagramURL} target="_blank" rel="noopener noreferrer" on:click|stopPropagation> -->
						<Picture meta={club.imageURL} alt={club.name}/>
					<!-- </a> -->
				{:else}
					<Picture meta={club.imageURL} alt={club.name}/>
				{/if}
			</button>
			{#if iconSpin}
			<div class="confetti">
				<Confetti
					amount={30}
					delay={[0, 250]}
					size={50}
					xSpread={0}
					rounded
					colorArray={[`url(${club.imageURL.img.src})`]}
				/>
			</div>
		{/if}
		</div>
		<div class="club__info-container">
			<div class="club__info club__info--front">
				<div>
					{#if club.instagramURL}
						<a href={club.instagramURL} target="_blank" rel="noopener noreferrer" on:click|stopPropagation>
							<h2 class="club__info__title">
								{club.name}
							</h2>
						</a>
					{:else}
						<h2 class="club__info__title">
							{club.name}
						</h2>
					{/if}
					<span class="club__info__room">
						{club.room}
					</span>
					<span class="club__info__meeting-time">
						{club.meetingTime}
					</span>
				</div>
				<div>
					<hr>
					<div class="club__info__desc-button">
						<button on:click={(e) => selected = !selected}>
							View Description
						</button>
						<i class="ri-arrow-right-fill"></i>
					</div>
				</div>
			</div>
			<div class="club__info club__info--back">
				<p class="club__info__desc">
					{club.description}
				</p>
				<div>
					<hr>
					<div class="club__info__desc-button">
						<i class="ri-arrow-left-fill"></i>
						<button on:click={(e) => selected = !selected}>
							Close Description
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	.club__container {
		all: unset;
	}

	.club {
		--transition-time: 0.6s;

		font-family: "Poppins", sans-serif;

		box-shadow: exports.$box-shadow;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		background-color: var(--color-light);

		min-height: 20rem;

		position: relative;
		width: 100%;
		height: 100%;
		transition: transform var(--transition-time);
		transform-style: preserve-3d;
	}

	.confetti {
		position: absolute;
	}

	.club__banner {
		position: relative;
		height: 5.75rem;

		&.rainbow {
			display: flex;
			flex-direction: column;

			> div {
				flex-grow: 1;
			}
		}
	}

	.club__banner__icon {
		all: unset;
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

		&:hover {
			cursor: pointer;
		}
	}

	.club__banner__icon.icon-spin {
		transform-style: preserve-3d;
		
		perspective: 1000px;

		animation: 0.8s ease-out 1 icon-spin;
	}

	.club__container {
		background-color: transparent;
		
		/* Remove this if you don't want the 3D effect */
		perspective: 1000px; 
	}

	.club__container.selected .club {
		transform: rotateY(180deg);
	}

	.club__info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;

		-webkit-font-smoothing: subpixel-antialiased;
		transform: translateZ(0);


		grid-row: 1 / 1;
		grid-column: 1 / 1;

		font-family: 'Inter', sans-serif;

		padding: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;

		a {
			all: unset;

			&:hover {
				cursor: pointer;
			}
		}

		hr {
			border-top: 0.5px solid var(--color-lighter-2);
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
			line-height: 1.2;
		}
	}


	.club__info__desc-button {
		color: var(--color-darker-1);
		width: 100%;
		font-size: var(--club-description-font-size, 1rem);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		i {
			font-size: var(--club-subtitle-font-size, 1.25rem);
		}

		button {
			all: unset;
		}

		&:hover {
			cursor: pointer;
		}
	}

	.club__container.selected .club__info__desc-button:hover i {
		animation: none;
	}

	.club__container .club__info__desc-button:hover i {
		animation: 1s linear infinite arrow-bobbing;
	}

	.club__info--front, .club__info--back {
		transition: visibility 0ms calc(var(--transition-time) / 4);
	}

	.club__info--back {
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
		flex-grow: 1;
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

	
	@keyframes arrow-bobbing {
		$offset: 0.2rem;

		0% {
			translate: 0;
		}
		25% {
			translate: $offset;
		}
		50% {
			translate: 0;
		}
		75% {
			translate: $offset;
		}
		100% {
			translate: 0;
		}
	}

	/* @keyframes icon-spin {
		0% {
			rotate: y 0;
		}
		100% {
			rotate: y 1turn;
		}
	} */

	@keyframes icon-spin {
		0% {
			scale: 1;
			rotate: y 0;
		}
		10% {
			rotate: y 0.25turn;
			scale: 0.825;
		}
		80% {
			scale: 0.95;
		}
		100% {
			rotate: y 1turn;
		}
	}
</style>
