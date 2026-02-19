import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const collections = [
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
    title: "2026 S/S Collection",
    category: "여성 컬렉션",
    description: "따스한 봄빛을 담은 내추럴 톤의 우아한 라인업",
    href: "/collections/spring-summer-2026",
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    title: "Artisan Series",
    category: "프리미엄 라인",
    description: "장인의 손끝에서 탄생한 특별한 디테일의 컬렉션",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2065&auto=format&fit=crop",
    title: "Essential Accessories",
    category: "액세서리",
    description: "스타일을 완성하는 엄선된 가죽 소품과 주얼리",
    href: "#",
  },
]

export function CollectionSection() {
  return (
    <section id="collection" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-accent">
              Collections
            </p>
            <h2 className="max-w-md font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
              시즌 컬렉션을
              <br />
              <span className="italic">만나보세요</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            각 시즌마다 새로운 영감으로 완성된 컬렉션을 선보입니다. MAISON만의
            감성이 담긴 특별한 아이템을 확인하세요.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group cursor-pointer overflow-hidden rounded-sm block"
            >
              <article>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-card-foreground" />
                  </div>
                </div>
                <div className="bg-card p-5">
                  <p className="text-xs tracking-wider text-accent uppercase">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-medium text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
