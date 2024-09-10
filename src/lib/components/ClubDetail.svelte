<script lang="ts">
	/** Club card in the club display*/

	
	import type SchoolClub from "$lib/models/SchoolClub.model";
  	import Confetti from "svelte-confetti";
	import Picture from "./Picture.svelte";


	export let club: SchoolClub;
	let selected: boolean = false;
	let iconSpin: boolean = false;

	let timeout: NodeJS.Timeout | null;

	$: useRainbow = club.bannerColor === "rainbow";

	function onIconClick() {
		if (iconSpin) {
			iconSpin = false;
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			return;
		}

		iconSpin = true;

		timeout = setTimeout(() => (iconSpin = false), 2500)
	}

	function onDescriptionToggle() {
		selected = !selected;

		iconSpin = false;

		if (timeout) {
			clearTimeout(timeout);
		}
	}

	
</script>

<div
	class="club__container"
	class:selected={selected}
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
				<Picture meta={club.imageURL} alt={club.name}/>
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
					<div class="club__info__subheading">
						<span class="club__info__room">
							{club.room}
						</span>
						<span class="club__info__meeting-time">
							{club.meetingTime}
						</span>
					</div>
				</div>
				<div>
					<div class="hr-div"></div>
					<div class="club__info__desc-button">
						<button on:click={onDescriptionToggle}>
							<p>View Description</p>
							<i class="ri-arrow-right-fill"></i>
						</button>
					</div>
				</div>
			</div>
			<div class="club__info club__info--back">
				<p class="club__info__desc">
					{club.description}
				</p>
				<div>
					<div class="hr-div"></div>
					<div class="club__info__desc-button">
						<button on:click={onDescriptionToggle}>
							<i class="ri-arrow-left-fill"></i>
							<p>Close Description</p>
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

		height: 22rem;

		position: relative;
		transition: transform var(--transition-time), background-color .2s ease-in-out;
		transform-style: preserve-3d;
	}

	.confetti {
		position: absolute;
	}

	.club__banner {
		position: relative;
		height: 5.75rem;

		-webkit-perspective: 1000px;
		perspective: 1000px;
		
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
		display: block;

		transform: rotateY(-360deg);

		transition: transform 0ms calc(var(--transition-time) / 4), background-color .2s ease-in-out;

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

	.club__container.selected .club__banner__icon {
		transform: rotateY(-540deg);
	}

	.club__banner__icon.icon-spin {
		-webkit-animation: 0.8s ease-out 1 icon-spin-front; /* Safari 4+ */
		-moz-animation: 0.8s ease-out 1 icon-spin-front; /* Fx 5+ */
		-o-animation: 0.8s ease-out 1 icon-spin-front; /* Opera 12+ */
		animation: 0.8s ease-out 1 icon-spin-front; /* IE 10+, Fx 29+ */

		animation-direction: reverse;
	}

	.club__container.selected .club__banner__icon.icon-spin {
		-webkit-animation: 0.8s ease-out 1 icon-spin-back; /* Safari 4+ */
		-moz-animation: 0.8s ease-out 1 icon-spin-back; /* Fx 5+ */
		-o-animation: 0.8s ease-out 1 icon-spin-back; /* Opera 12+ */
		animation: 0.8s ease-out 1 icon-spin-back; /* IE 10+, Fx 29+ */

		animation-direction: reverse;
	}

	.club__container {
		background-color: transparent;
		
		/* Remove this if you don't want the 3D effect */
		perspective: 1000px; 
	}

	.club__info__subheading {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.club__container.selected .club {
		transform: rotateY(180deg);
	}

	.club__info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		grid-row: 1 / 1;
		grid-column: 1 / 1;

		font-family: 'Inter', sans-serif;

		padding: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;

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

		h2 {
			margin-bottom: 0.25rem;
		}
	}

	.club__info a {
		all: unset;

		&:hover {
			cursor: pointer;
		}
	}

	.hr-div {
		background-color: var(--color-lighter-2);
		height: 1px;
	}

	.club__info__desc-button {
		color: var(--color-darker-1);
		width: 100%;
		font-size: var(--club-description-font-size, 1rem);
		padding-top: 0.75rem;


		i {
			font-size: var(--club-subtitle-font-size, 1.25rem);
		}

		button {
			all: unset;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;
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

	.club__container .club__info__desc-button:hover p {
		text-decoration: underline;
	}

	.club__info--front, .club__info--back {
		transition: visibility 0ms calc(var(--transition-time) / 4), background-color .2s ease-in-out;
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
		0% {
			translate: 0;
		}
		25% {
			translate: 0.2rem;
		}
		50% {
			translate: 0;
		}
		75% {
			translate: 0.2rem;
		}
		100% {
			translate: 0;
		}
	}

	@keyframes icon-spin-front {
		0% {
			-webkit-transform: rotateY(-360deg);
			-moz-transform: rotateY(-360deg);
			-o-transform: rotateY(-360deg);
			transform: rotateY(-360deg);
			scale: 1;
		}
		20% {
			scale: 0.95;
		}
		90% {
			-webkit-transform: rotateY(-90deg);
			-moz-transform: rotateY(-90deg);
			-o-transform: rotateY(-90deg);
			transform: rotateY(-90deg);
			scale: 0.825;
		}
		100% {
			-webkit-transform: rotateY(0deg);
			-moz-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
			scale: 1;
		}
	}

	@keyframes icon-spin-back {
		0% {
			-webkit-transform: rotateY(-540deg);
			-moz-transform: rotateY(-540deg);
			-o-transform: rotateY(-540deg);
			transform: rotateY(-540deg);
			scale: 1;
		}
		20% {
			scale: 0.95;
		}
		90% {
			-webkit-transform: rotateY(-270deg);
			-moz-transform: rotateY(-270deg);
			-o-transform: rotateY(-270deg);
			transform: rotateY(-270deg);
			scale: 0.825;
		}
		100% {
			-webkit-transform: rotateY(-180deg);
			-moz-transform: rotateY(-180deg);
			-o-transform: rotateY(-180deg);
			transform: rotateY(-180deg);
			scale: 1;
		}
	}
</style>
