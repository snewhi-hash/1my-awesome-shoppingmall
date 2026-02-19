import Image from "next/image"

export function TeamSection() {
  return (
    <section id="team" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-accent">
              Our Team
            </p>
            <h2 className="max-w-md font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
              열정으로 뭉친
              <br />
              <span className="italic">크리에이티브 팀</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              디자이너, 패턴사, 스타일리스트, 그리고 마케터까지. MAISON의 팀은
              패션에 대한 깊은 이해와 열정을 가진 전문가들로 구성되어 있습니다.
              서로 다른 전문성이 만나 시너지를 만들어냅니다.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">30명+</span>의
                  패션 전문가로 구성된 팀
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  파리, 밀라노 패션위크{" "}
                  <span className="font-medium text-foreground">
                    출신 디자이너 다수
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  매 시즌{" "}
                  <span className="font-medium text-foreground">
                    글로벌 트렌드 리서치
                  </span>{" "}
                  기반 기획
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
              alt="MAISON 크리에이티브 팀"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
