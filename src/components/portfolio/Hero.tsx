import { FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="home" className="home page-width" tabIndex={-1} aria-labelledby="home-title">
      <header className="home-heading">
        <div>
          <h1 id="home-title">{profile.name}</h1>
          <p className="home-subtitle">
            Physical AI, efficient models, and the systems behind them.
          </p>
        </div>
        <a className="cv-link" href={profile.cv} target="_blank" rel="noopener noreferrer">
          <FileText size={15} aria-hidden="true" /> {profile.cvTitle}
        </a>
      </header>

      <div className="home-biography prose">
        <img
          src={profile.avatar}
          alt="Timi Owolabi"
          width={240}
          height={240}
          fetchPriority="high"
          className="portrait"
        />
        <p>
          I lead the Embodied AI Research Group at{" "}
          <a href="https://mlcollective.org/" target="_blank" rel="noopener noreferrer">
            ML Collective
          </a>
          , where we develop generalist robot policies. I'm particularly interested in making
          physical AI models more capable, safer, and efficient enough for real-time inference on
          onboard compute.
        </p>
        <p>
          I'm also a cofounder and ML systems engineer at a stealth AI startup, where we make
          generative AI models run blazing fast on mobile devices.
        </p>
        <p>
          In 2025, I graduated with a 4.85/5.0 GPA, placing in the top 4% of my Electrical
          Engineering class at{" "}
          <a
            href="https://www.covenantuniversity.edu.ng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Covenant University
          </a>
          , ranked 1st in Nigeria. I also researched explainability in autonomous driving using
          graph neural networks at WaySense. My supervisor was{" "}
          <a href="https://danielomeiza.github.io/" target="_blank" rel="noopener noreferrer">
            Dr. Daniel Omeiza
          </a>
          , then a postdoctoral researcher at the{" "}
          <a href="https://ori.ox.ac.uk/" target="_blank" rel="noopener noreferrer">
            Oxford Robotics Institute
          </a>
          .
        </p>
        <p>
          I also care about impacting communities, so I founded{" "}
          <a
            href="https://www.linkedin.com/company/113221087"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Classroom Project
          </a>{" "}
          to provide mentorship and learning resources to underserved secondary schools in Lagos.
        </p>
      </div>
      <details className="personal-note">
        <summary>
          I live and breathe these words <span aria-hidden="true">+</span>
        </summary>
        <blockquote className="prose personal-quote">
          <p>
            “It is not the critic who counts; not the man who points out how the strong man
            stumbles, or where the doer of deeds could have done them better. The credit belongs to
            the man who is actually in the arena, whose face is marred by dust and sweat and blood;
            who strives valiantly; who errs, who comes short again and again, because there is no
            effort without error and shortcoming; but who does actually strive to do the deeds; who
            knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who
            at the best knows in the end the triumph of high achievement, and who at the worst, if
            he fails, at least fails while daring greatly, so that his place shall never be with
            those cold and timid souls who neither know victory nor defeat.”
          </p>
          <footer>
            <cite>The Man in the Arena</cite>
            <span>Theodore Roosevelt</span>
          </footer>
        </blockquote>
      </details>
      <div className="home-contact">
        <SocialLinks variant="icons" />
      </div>
    </section>
  );
}
