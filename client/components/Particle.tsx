import Particles from 'react-tsparticles';
import 'twin.macro';
import { useTheme } from 'next-themes';

function Particle() {
  const { theme } = useTheme();
  const background = theme === 'dark' ? '#43379d' : '#ffffff';
  const particleColor = theme === 'dark' ? '#ffffff' : '#43379d';
  const linkedColor = theme === 'dark' ? '#ffffff' : '#808080';

  return (
    <Particles
      id="tsparticles"
      tw="absolute h-full w-screen top-0 z-0"
      options={{
        fpsLimit: 40,
        background: {
          color: {
            value: background,
          },
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: particleColor,
          },
          shape: {
            type: ['circle'],
            stroke: {
              width: 0,
              color: '#fff',
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: linkedColor,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
