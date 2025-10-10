import React, { useEffect } from 'react';
import './skills-component.css';
import SectionTitle from '../../general/section_title';
import SkillBar from '../../general/skill_bar';
import SkillConsole from '../../general/skill_console';

/*** Swiper Carousel ***/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Skills() {
  /*** Animate Skill Bars ***/
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-bar');
    const observers = [];

    bars.forEach(bar => {
      const progress = bar.querySelector('.skill-bar__progress');
      const levelText = bar.querySelector('.skill-bar__skill-level')?.textContent;
      if (!progress || !levelText) return;

      const [current, max] = levelText.split('/').map(n => parseFloat(n.trim()));
      const percentage = Math.min((current / max) * 100, 100);

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          progress.style.width = `${percentage}%`;
          if (percentage === 100) progress.classList.add('max_progress');
        } else {
          progress.style.width = `0%`;
        }
      }, { threshold: 0.5 });

      observer.observe(bar);
      observers.push({ observer, bar });
    });

    return () => {
      observers.forEach(({ observer, bar }) => {
        observer.unobserve(bar);
        observer.disconnect();
      });
    };
  }, []);

  return (
    <section id="skills" className="section portfolio-skills">
      <div className="columns">
        <SectionTitle title="Skills & Technologies" />
      </div>

      {/* Desktop Layout */}
      <div className="columns is-flex is-justify-content-center is-multiline portfolio-skills__wrapper--desktop is-hidden-touch pt-lg-10">
        <div className="column is-two-fifths">
          <SkillConsole title="Frontend Development"
            skills={[
              <SkillBar skill_title="Javascript & Jquery" skill_level={4} />,
              <SkillBar skill_title="CSS, Sass, Bootstrap" skill_level={3} />,
              <SkillBar skill_title="React.Js, Angular" skill_level={3} />,
              <SkillBar skill_title="ADA Compliance" skill_level={4} />,
              <SkillBar skill_title="Responsive Design" skill_level={4} />
            ]}
            type="progress"
          />
        </div>
        <div className="column is-two-fifths">
          <SkillConsole title="Backend Development"
            skills={[
              <SkillBar skill_title="MongoDB, Firebase" skill_level={3} />,
              <SkillBar skill_title="Ruby & Ruby on Rails" skill_level={3} />,
              <SkillBar skill_title="SQL, JSON" skill_level={3} />,
              <SkillBar skill_title="Liquid Templating" skill_level={4} />,
              <SkillBar skill_title="PostgreSQL, MySQL" skill_level={3} />
            ]}
            type="progress"
          />
        </div>
        <div className="column is-two-fifths">
          <SkillConsole title="Programming Languages"
            skills={[
              <SkillBar skill_title="Java, Springboot" skill_level={3} />,
              <SkillBar skill_title="C++, Typescript" skill_level={3} />,
              <SkillBar skill_title="C#, ASP.NET, .NET" skill_level={3} />,
              <SkillBar skill_title="PHP, and Laravel" skill_level={3} />,
              <SkillBar skill_title="Flutter, Kotlin, Dart" skill_level={3} />
            ]}
            type="progress"
          />
        </div>
        <div className="column is-two-fifths">
          <SkillConsole title="Tools & Platforms"
            skills={[
              <SkillBar skill_title="Vscode, Eclipse, Yarn, NPM" skill_level={4} />,
              <SkillBar skill_title="Adobe XD & Illustrator" skill_level={3} />,
              <SkillBar skill_title="Linux, Windows, Dev Tools" skill_level={4} />,
              <SkillBar skill_title="Wordpress, Shopify" skill_level={3} />,
              <SkillBar skill_title="Git, Git Version Control" skill_level={3} />
            ]}
            type="badges"
          />
        </div>
      </div>

      {/* Mobile Swiper Carousel */}
      <div className="portfolio-skills__wrapper--mobile is-hidden-desktop px-lg-10 py-sm-6 py-md-8 py-lg-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            speed={1000}
            pagination={{ clickable: true }}
            breakpoints={{
                0: {
                    navigation: false,
                    autoplay: { delay: 2000, disableOnInteraction: true },
                    speed: 1000,
                },
                480: {
                    slidesPerView: 1,
                    navigation: false,
                    autoplay: { delay: 2000, disableOnInteraction: true },
                    speed: 1000,
                },
                768: {
                    slidesPerView: 2,
                    navigation: false,
                    autoplay: { delay: 2000, disableOnInteraction: true },
                    speed: 1000,
                }
            }}

        >
          <SwiperSlide>
            <SkillConsole title="Frontend Development"
              skills={[
                <SkillBar skill_title="Javascript & Jquery" skill_level={4} />,
                <SkillBar skill_title="CSS, Sass, Bootstrap" skill_level={3} />,
                <SkillBar skill_title="React.Js, Angular" skill_level={3} />,
                <SkillBar skill_title="ADA Compliance" skill_level={3} />,
                <SkillBar skill_title="Responsive Design" skill_level={4} />
              ]}
              type="progress"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SkillConsole title="Backend Development"
              skills={[
                <SkillBar skill_title="MongoDB, Firebase" skill_level={3} />,
                <SkillBar skill_title="Ruby & Ruby on Rails" skill_level={3} />,
                <SkillBar skill_title="SQL, JSON" skill_level={3} />,
                <SkillBar skill_title="Liquid Templating" skill_level={4} />,
                <SkillBar skill_title="MySQL, SQL Server" skill_level={3} />
              ]}
              type="progress"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SkillConsole title="Programming Languages"
              skills={[
                <SkillBar skill_title="Java, Springboot" skill_level={3} />,
                <SkillBar skill_title="C++, Typescript" skill_level={3} />,
                <SkillBar skill_title="C#, ASP.NET, .NET" skill_level={3} />,
                <SkillBar skill_title="PHP, and Laravel" skill_level={3} />,
                <SkillBar skill_title="Flutter, Kotlin, Dart" skill_level={3} />
              ]}
              type="progress"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SkillConsole title="Tools & Platforms"
              skills={[
                <SkillBar skill_title="Vscode, Eclipse, Yarn, NPM" skill_level={4} />,
                <SkillBar skill_title="Adobe XD & Illustrator" skill_level={3} />,
                <SkillBar skill_title="Linux, Windows, Dev Tools" skill_level={4} />,
                <SkillBar skill_title="Wordpress, Shopify, VM" skill_level={3} />,
                <SkillBar skill_title="Git, Git Version Control" skill_level={3} />
              ]}
              type="badges"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}