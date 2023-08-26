<script lang="ts">
  export let club: SchoolClub;
</script>

<div class="club">
  <div class="club__banner" style:background-color={club.bannerColor}>
    <div class="club__banner__icon">
		
      <img src={club.imageURL} alt={club.name} />
    </div>
  </div>
  <div class="club__info">
    <h2 class="club__info__title">
      {club.name}
    </h2>
    <span class="club__info__room">
      {club.room}
    </span>
    <span class="club__info__meeting-time">
      {club.meetingTime}
    </span>
  </div>
</div>

<style lang="scss">
  .club {
    --club-title-font-size: 2rem;
    --club-subtitle-font-size: 1.25rem;

    font-family: "Poppins", sans-serif;

    box-shadow: 0 4px 4px var(--color-box-shadow);

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
      box-shadow: 0 4px 4px var(--color-box-shadow);

      top: -25%;
      left: -12.5%;

      img {
        width: 8rem;
      }
    }
  }

  .club__info {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    padding: 1rem;

    .club__info__title {
      font-size: var(--club-title-font-size);
      font-weight: 900;
      color: var(--color-dark);
    }

    .club__info__room,
    .club__info__meeting-time {
      font-size: var(--club-subtitle-font-size);
      color: var(--color-darker-1);
    }
  }
</style>
