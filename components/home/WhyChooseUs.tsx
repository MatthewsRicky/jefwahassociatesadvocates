import { MessagesSquare, SearchCheck, Handshake, Scale } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Clear Communication",
    description:
      "We prioritise clear explanations and open communication so clients can better understand their legal position and available options.",
    icon: MessagesSquare,
  },
  {
    number: "02",
    title: "Thorough Analysis",
    description:
      "We approach legal matters with careful consideration of the relevant circumstances, issues and applicable law.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Practical Guidance",
    description:
      "We focus on practical legal advice that takes account of each client's particular needs and circumstances.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Professional Ethics",
    description:
      "We recognise the importance of professional responsibility, confidentiality and integrity in legal practice.",
    icon: Scale,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-dark text-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow">Our Approach</span>
            </div>

            <h2 className="text-balance font-display text-4xl leading-tight text-white sm:text-5xl lg:text-[58px]">
              A considered approach to every legal matter.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/60">
              Good legal representation begins with listening, understanding the
              issues and identifying an appropriate way forward. Our approach
              reflects the firm's commitment to clarity, professionalism and
              client-focused service.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-7">
              <span className="font-display text-3xl italic text-gold-light">
                {`"`}
                Ius est ars boni et aequi
                {`"`}
              </span>
            </div>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="border-t border-white/15 py-8 sm:px-7 sm:py-9"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-gold-light"
                    />
                    <span className="font-display text-lg text-white/30">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
