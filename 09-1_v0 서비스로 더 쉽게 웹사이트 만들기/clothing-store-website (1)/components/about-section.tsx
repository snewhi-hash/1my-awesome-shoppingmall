import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <p className="mb-3 text-xs tracking-[0.3em] uppercase text-accent">
          About MAISON
        </p>
        <h2 className="max-w-xl font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
          10년간 이어온
          <br />
          <span className="italic">장인 정신과 열정</span>
        </h2>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1521335751419-603f61523713?q=80&w=2070&auto=format&fit=crop"
              alt="MAISON 아뜰리에 작업 공간"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              2015년, 작은 아뜰리에에서 시작된 MAISON은 "진정한 아름다움은
              디테일에 있다"는 철학 아래 성장해 왔습니다. 우리는 단순한 옷이
              아닌, 입는 사람의 이야기와 개성을 표현하는 패션을 만듭니다.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              이탈리아와 프랑스의 최고급 원단을 직접 선별하고, 숙련된 패턴사와
              재단사의 손을 거쳐 한 벌 한 벌 완성됩니다. 빠른 유행을 따르기보다,
              시간이 지나도 변치 않는 가치를 담아냅니다.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl font-light text-foreground">
                  10+
                </p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                  브랜드 역사 (년)
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-light text-foreground">
                  50K+
                </p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                  누적 고객 수
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-light text-foreground">
                  120+
                </p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                  시즌별 신작
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
