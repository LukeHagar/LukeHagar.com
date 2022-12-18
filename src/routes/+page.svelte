<script>
  import { Avatar, GradientHeading } from "@skeletonlabs/skeleton";
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";

  const particlesConfig = {
    particles: {
      color: {
        value: "#ffff",
      },
      links: {
        enable: true,
        color: "#ffff",
      },
      move: {
        enable: true,
      },
    },
  };

  const onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  const particlesInit = async (engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };
</script>

<div class="z-0">
  <Particles
    id="tsparticles"
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    {particlesInit}
  />
</div>
<div class="z-50 mx-auto flex h-full items-center justify-center">
  <div class="card card-glass z-50 space-y-10 p-10">
    <span class="flex flex-row gap-2">
      <p class="unstyled text-6xl font-bold !text-white">Hi, I'm</p>
      <GradientHeading
        class="text-6xl"
        tag="h1"
        direction="bg-gradient-to-r"
        from="from-primary-500"
        to="to-surface-500">Luke</GradientHeading
      >
    </span>

    <div class="flex justify-center space-x-2" />
    <div class="space-y-2" />
    <Avatar src="/Luke.png" width="w-48" class="mx-auto" />
  </div>
</div>
