import { Scissors, Gem, Leaf, Heart } from "lucide-react"

const values = [
  {
    icon: Scissors,
    title: "장인 정신",
    description:
      "숙련된 장인이 한 땀 한 땀 정성을 들여 완성합니다. 기계로는 담을 수 없는 섬세함이 MAISON의 차이를 만듭니다.",
  },
  {
    icon: Gem,
    title: "프리미엄 소재",
    description:
      "이탈리아, 프랑스 등 세계 최고급 원단만을 엄선합니다. 피부에 닿는 모든 순간이 특별하도록 소재에 타협하지 않습니다.",
  },
  {
    icon: Leaf,
    title: "지속 가능성",
    description:
      "친환경 원단과 윤리적 생산 공정을 통해 패션의 미래를 만들어갑니다. 아름다움은 책임감에서 시작된다고 믿습니다.",
  },
  {
    icon: Heart,
    title: "고객 중심",
    description:
      "스타일링 컨설팅부터 맞춤 수선까지, 모든 과정에서 고객의 만족을 최우선으로 합니다. 당신만의 완벽한 핏을 찾아드립니다.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-accent">
            Our Values
          </p>
          <h2 className="mx-auto max-w-lg font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
            MAISON이 추구하는
            <br />
            <span className="italic">네 가지 핵심 가치</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group flex flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:bg-primary hover:border-primary"
            >
              <value.icon className="mb-6 h-7 w-7 text-accent transition-colors group-hover:text-primary-foreground" />
              <h3 className="font-serif text-lg font-medium text-card-foreground transition-colors group-hover:text-primary-foreground">
                {value.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
